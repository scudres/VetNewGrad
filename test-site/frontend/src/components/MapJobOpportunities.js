import React, { useEffect, useState, useCallback } from "react";
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// --- Helper for geocoding city/country to lat/lng using Nominatim ---
async function geocodeCityCountry(city, country) {
  const params = new URLSearchParams({
    q: `${city}, ${country}`,
    format: "json",
    limit: 1
  });
  const url = `https://nominatim.openstreetmap.org/search?${params}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data && data.length) {
      return {
        lat: parseFloat(data[0].lat),
        lng: parseFloat(data[0].lon)
      };
    }
  } catch (e) {}
  return null;
}

// --- Normalize country name to match GeoJSON ADMIN property ---
function normalizeCountryName(name) {
  if (!name) return "";
  return name
    .trim()
    .replace(/^uk$/i, "United Kingdom")
    .replace(/^u\.k\.$/i, "United Kingdom")
    .replace(/^gb$/i, "United Kingdom")
    .replace(/^england$/i, "United Kingdom")
    .replace(/^scotland$/i, "United Kingdom")
    .replace(/^wales$/i, "United Kingdom")
    .replace(/^northern ireland$/i, "United Kingdom")
    .replace(/^usa$/i, "United States of America")
    .replace(/^us$/i, "United States of America")
    .replace(/^u\.s\.a\.$/i, "United States of America")
    // Add more rules as needed!
    .replace(/ +/g, " ")
    .toLowerCase()
    .replace(/\b\w/g, c => c.toUpperCase());
}

// --- Find the centroid of a GeoJSON polygon for a country ---
function getCountryCentroid(geoData, countryName) {
  if (!geoData) return null;
  const normalized = normalizeCountryName(countryName);
  const feature = geoData.features.find(
    f =>
      normalizeCountryName(f.properties.ADMIN || f.properties.NAME || f.properties.name) === normalized
  );
  if (!feature) return null;
  try {
    const layer = L.geoJSON(feature);
    const bounds = layer.getBounds();
    const center = bounds.getCenter();
    return [center.lat, center.lng];
  } catch (e) {
    return null;
  }
}

// A custom icon for pins
const pinIcon = new L.Icon({
  iconUrl: "https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [0, -35]
});

const defaultMapView = {
  center: [30, 0],
  zoom: 2
};

function MapJobOpportunities({ jobs, selectedCountry, setSelectedCountry }) {
  const [geoData, setGeoData] = useState(null);
  const [countryBounds, setCountryBounds] = useState(null);
  const [jobLocations, setJobLocations] = useState([]);

  // 1. Load GeoJSON country polygons once
  useEffect(() => {
    fetch("/countries.geojson")
      .then(res => res.json())
      .then(setGeoData);
  }, []);

  // 2. When selectedCountry changes, zoom to that country
  useEffect(() => {
    if (geoData && selectedCountry && selectedCountry !== "All") {
      const normalized = normalizeCountryName(selectedCountry);
      const countryFeature = geoData.features.find(
        f =>
          normalizeCountryName(f.properties.ADMIN || f.properties.NAME || f.properties.name) === normalized
      );
      if (countryFeature) {
        const layer = L.geoJSON(countryFeature);
        setCountryBounds(layer.getBounds());
      }
    } else {
      setCountryBounds(null);
    }
  }, [geoData, selectedCountry]);

  // 3. Geocode jobs (city/country) or pin at country centroid
  useEffect(() => {
    let isMounted = true;
    async function geocodeJobs() {
      const cityCache = {};
      const promises = jobs.map(async job => {
        const country = normalizeCountryName(job.country);
        const city = job.city && job.city.toLowerCase() !== "nationwide" ? job.city : null;

        // Use any present lat/lon field (backend-first)
        const lat = job.latitude ?? job.lat;
        const lng = job.longitude ?? job.lon ?? job.lng;
        if (
          typeof lat !== "undefined" &&
          typeof lng !== "undefined" &&
          lat !== null &&
          lng !== null &&
          !Number.isNaN(parseFloat(lat)) &&
          !Number.isNaN(parseFloat(lng))
        ) {
          return {
            ...job,
            latlng: [parseFloat(lat), parseFloat(lng)]
          };
        }

        // Fallback: Geocode city+country
        if (city && country) {
          const cacheKey = `${city},${country}`;
          if (!cityCache[cacheKey]) {
            cityCache[cacheKey] = geocodeCityCountry(city, country);
          }
          const coords = await cityCache[cacheKey];
          if (coords) {
            return {
              ...job,
              latlng: [coords.lat, coords.lng]
            };
          }
        }
        // Fallback: Pin at country centroid
        if (country && geoData) {
          const centroid = getCountryCentroid(geoData, country);
          if (centroid) {
            return {
              ...job,
              latlng: centroid
            };
          }
        }
        return null;
      });

      const resolved = (await Promise.all(promises)).filter(Boolean);
      if (isMounted) setJobLocations(resolved);
    }
    geocodeJobs();
    return () => {
      isMounted = false;
    };
  }, [jobs, geoData]);

  // 4. Highlight countries; handle country click
  const countryStyle = feature => ({
    fillColor:
      selectedCountry &&
      normalizeCountryName(feature.properties.ADMIN || feature.properties.NAME || feature.properties.name) ===
        normalizeCountryName(selectedCountry)
        ? "#2563eb"
        : "#cbd5e1",
    weight: 1,
    color: "#888",
    fillOpacity: 0.7
  });

  // 5. Zoom on country select
  const whenCreated = useCallback(
    map => {
      if (countryBounds) {
        map.fitBounds(countryBounds, { maxZoom: 6 });
      } else {
        map.setView(defaultMapView.center, defaultMapView.zoom);
      }
    },
    [countryBounds]
  );

  return (
    <div style={{ width: "100%", height: 400, marginBottom: 32 }}>
      <MapContainer
        center={defaultMapView.center}
        zoom={defaultMapView.zoom}
        style={{ width: "100%", height: "100%" }}
        whenCreated={whenCreated}
        scrollWheelZoom
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />

        {/* Countries polygons */}
        {geoData && (
          <GeoJSON
            key={selectedCountry}
            data={geoData}
            style={countryStyle}
            onEachFeature={(feature, layer) => {
              layer.on({
                click: () => {
                  const country = normalizeCountryName(
                    feature.properties.ADMIN || feature.properties.NAME || feature.properties.name
                  );
                  setSelectedCountry(country);
                },
                mouseover: e => {
                  e.target.setStyle({
                    fillColor: "#2563eb",
                    weight: 2
                  });
                },
                mouseout: e => {
                  if (
                    !(
                      selectedCountry &&
                      normalizeCountryName(feature.properties.ADMIN || feature.properties.NAME || feature.properties.name) ===
                        normalizeCountryName(selectedCountry)
                    )
                  ) {
                    e.target.setStyle({
                      fillColor: "#cbd5e1",
                      weight: 1
                    });
                  }
                }
              });
            }}
          />
        )}

        {/* Job Markers */}
        {jobLocations.map((job, idx) =>
          job.latlng ? (
            <Marker key={idx} position={job.latlng} icon={pinIcon}>
              <Popup>
                <div>
                  <strong>{job.title}</strong>
                  <br />
                  {job.city && <span>{job.city}, </span>}
                  <span>{job.country}</span>
                  <br />
                  <a href={job.url} target="_blank" rel="noopener noreferrer">
                    View & Apply
                  </a>
                  {job.organisation && (
                    <>
                      <br />
                      <span>Org: {job.organisation}</span>
                    </>
                  )}
                </div>
              </Popup>
            </Marker>
          ) : null
        )}
      </MapContainer>
    </div>
  );
}

export default MapJobOpportunities;
