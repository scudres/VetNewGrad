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

// A custom icon for pins
const pinIcon = new L.Icon({
  iconUrl: "https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [0, -35]
});

const defaultMapView = {
  center: [30, 0], // Centered to show most of world
  zoom: 2
};

function MapJobOpportunities({ jobs, selectedCountry, setSelectedCountry }) {
  const [geoData, setGeoData] = useState(null);
  const [countryBounds, setCountryBounds] = useState(null);
  const [jobLocations, setJobLocations] = useState([]);

  // --- 1. Load GeoJSON country polygons once ---
  useEffect(() => {
    fetch("/countries.geojson")
      .then(res => res.json())
      .then(setGeoData);
  }, []);

  // --- 2. When selectedCountry changes, zoom to that country ---
  useEffect(() => {
    if (geoData && selectedCountry && selectedCountry !== "All") {
      const countryFeature = geoData.features.find(
        f =>
          f.properties.ADMIN === selectedCountry ||
          f.properties.NAME === selectedCountry
      );
      if (countryFeature) {
        // Get country polygon bounds
        const layer = L.geoJSON(countryFeature);
        setCountryBounds(layer.getBounds());
      }
    } else {
      setCountryBounds(null);
    }
  }, [geoData, selectedCountry]);

  // --- 3. Geocode jobs that don't have lat/lng ---
  useEffect(() => {
    let isMounted = true;
    async function geocodeJobs() {
      // Use in-memory cache for cities (to avoid geocoding twice in one render)
      const cityCache = {};
      const promises = jobs.map(async job => {
        if (job.latitude && job.longitude) {
          return {
            ...job,
            latlng: [parseFloat(job.latitude), parseFloat(job.longitude)]
          };
        } else if (job.city && job.country) {
          const cacheKey = `${job.city},${job.country}`;
          if (!cityCache[cacheKey]) {
            cityCache[cacheKey] = geocodeCityCountry(job.city, job.country);
          }
          const coords = await cityCache[cacheKey];
          if (coords) {
            return {
              ...job,
              latlng: [coords.lat, coords.lng]
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
  }, [jobs]);

  // --- 4. Highlight countries; handle country click ---
  const countryStyle = feature => ({
    fillColor:
      selectedCountry &&
      (feature.properties.ADMIN === selectedCountry ||
        feature.properties.NAME === selectedCountry)
        ? "#2563eb"
        : "#cbd5e1",
    weight: 1,
    color: "#888",
    fillOpacity: 0.7
  });

  // --- 5. Zoom on country select ---
  const whenCreated = useCallback(map => {
    if (countryBounds) {
      map.fitBounds(countryBounds, { maxZoom: 6 });
    } else {
      map.setView(defaultMapView.center, defaultMapView.zoom);
    }
  }, [countryBounds]);

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
            key={selectedCountry} // force refresh
            data={geoData}
            style={countryStyle}
            onEachFeature={(feature, layer) => {
              layer.on({
                click: () => {
                  setSelectedCountry(feature.properties.ADMIN || feature.properties.NAME);
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
                      (feature.properties.ADMIN === selectedCountry ||
                        feature.properties.NAME === selectedCountry)
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
