import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MapJobOpportunities from "./MapJobOpportunities";

// --- Static job boards as before ---
const jobBoards = [ // UK
  {
    title: "Vet Times Jobs",
    url: "https://jobs.vettimes.co.uk/",
    country: "UK",
    types: ["small animal", "farm animal", "equine", "exotic", "mixed"],
    sectors: ["private", "academic"],
    practice: ["independent", "corporate"]
  },
  {
    title: "VetPartners",
    url: "https://www.vetpartnersjobs.co.uk/",
    country: "UK",
    types: ["small animal", "equine", "mixed"],
    sectors: ["private"],
    practice: ["corporate"]
  },
  {
    title: "Veterinary Jobs Marketplace",
    url: "https://www.veterinaryjobsmarketplace.com/jobs/uk/",
    country: "UK",
    types: ["small animal", "farm animal", "equine", "exotic", "mixed"],
    sectors: ["private", "academic"],
    practice: ["independent", "corporate"]
  },
  // USA
  {
    title: "AVMA Career Center",
    url: "https://jobs.avma.org/",
    country: "USA",
    types: ["small animal", "farm animal", "equine", "exotic", "mixed"],
    sectors: ["private", "academic"],
    practice: ["independent", "corporate"]
  },
  {
    title: "ACVS Job Board",
    url: "https://jobs.acvs.org/",
    country: "USA",
    types: ["small animal", "equine", "exotic"],
    sectors: ["private", "academic"],
    practice: ["independent", "corporate"]
  },
  {
    title: "Veterinary Jobs Marketplace",
    url: "https://www.veterinaryjobsmarketplace.com/jobs/usa/",
    country: "USA",
    types: ["small animal", "farm animal", "equine", "exotic", "mixed"],
    sectors: ["private", "academic"],
    practice: ["independent", "corporate"]
  },
  {
    title: "My Veterinary Job Board",
    url: "https://myveterinaryjobboard.com/",
    country: "USA",
    types: ["small animal", "farm animal", "equine", "exotic", "mixed"],
    sectors: ["private", "academic"],
    practice: ["independent", "corporate"]
  },
  {
    title: "VOS/Ethos",
    url: "https://veterinaryos.com/jobs/",
    country: "USA",
    types: ["small animal", "equine"],
    sectors: ["private", "academic"],
    practice: ["independent", "corporate"]
  },
  // Canada
  {
    title: "Veterinary Jobs Marketplace",
    url: "https://www.veterinaryjobsmarketplace.com/jobs/canada/",
    country: "Canada",
    types: ["small animal", "farm animal", "equine", "exotic", "mixed"],
    sectors: ["private", "academic"],
    practice: ["independent", "corporate"]
  },
  {
    title: "VOS/Ethos",
    url: "https://veterinaryos.com/jobs/",
    country: "Canada",
    types: ["small animal", "equine"],
    sectors: ["private", "academic"],
    practice: ["independent", "corporate"]
  }
];

const typeOptions = ["All", "small animal", "farm animal", "equine", "exotic", "mixed"];
const sectorOptions = ["All", "academic", "private"];
const practiceOptions = ["All", "independent", "corporate"];

const JobOpportunities = () => {
  // Dynamic jobs from backend
  const [dynamicJobs, setDynamicJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Countries from GeoJSON for dropdown
  const [countryOptions, setCountryOptions] = useState(["All"]);
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedSector, setSelectedSector] = useState("All");
  const [selectedPractice, setSelectedPractice] = useState("All");

  // Load country list from GeoJSON
  useEffect(() => {
    fetch("/countries.geojson")
      .then(res => res.json())
      .then(geo => {
        const names = geo.features.map(f => f.properties.ADMIN || f.properties.NAME).sort();
        setCountryOptions(["All", ...names]);
      });
  }, []);

  // Fetch dynamic jobs from API
  useEffect(() => {
    setLoading(true);
    setError(false);
    fetch("https://vetjobs-api.onrender.com/api/job-opportunities")
      .then(res => res.json())
      .then(data => {
        setDynamicJobs(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  // Filter logic for dynamic jobs
  const filteredDynamic = dynamicJobs.filter(job => {
    const matchesCountry = selectedCountry === "All" || job.country === selectedCountry;
    const matchesType = selectedType === "All" || (job.type && job.type.toLowerCase() === selectedType);
    const matchesSector = selectedSector === "All" || (job.sector && job.sector.toLowerCase() === selectedSector);
    const matchesPractice = selectedPractice === "All" || (job.practice && job.practice.toLowerCase() === selectedPractice);
    return matchesCountry && matchesType && matchesSector && matchesPractice;
  });

  // Filter logic for static job boards
  const filteredBoards = jobBoards.filter(board => {
    const matchesCountry = selectedCountry === "All" || board.country === selectedCountry;
    const matchesType = selectedType === "All" || board.types.includes(selectedType);
    const matchesSector = selectedSector === "All" || board.sectors.includes(selectedSector);
    const matchesPractice = selectedPractice === "All" || board.practice.includes(selectedPractice);
    return matchesCountry && matchesType && matchesSector && matchesPractice;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">VetNextStep</h1>
                <p className="text-sm text-gray-600">Your Veterinary Career Guide</p>
              </div>
            </Link>
            <Link
              to="/"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200 flex items-center"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Title and Blurb */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Job Opportunities</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find current veterinary job postings and explore trusted job boards. Filter by country, species, sector, or practice type!
            </p>
          </div>

          {/* Interactive Map */}
          <MapJobOpportunities
            jobs={filteredDynamic}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />

          {/* Filters */}
          <div className="bg-blue-50 rounded-xl p-8 mb-12 border border-blue-200 flex flex-col md:flex-row md:items-end md:space-x-6 space-y-6 md:space-y-0">
            {/* Country */}
            <div>
              <label className="block mb-2 text-blue-900 font-semibold">Country</label>
              <select
                value={selectedCountry}
                onChange={e => setSelectedCountry(e.target.value)}
                className="w-full md:w-48 px-4 py-2 rounded-lg border border-blue-300"
              >
                {countryOptions.map(option => (
                  <option key={option} value={option}>{option === "All" ? "All Countries" : option}</option>
                ))}
              </select>
            </div>
            {/* Type */}
            <div>
              <label className="block mb-2 text-blue-900 font-semibold">Species / Type</label>
              <select
                value={selectedType}
                onChange={e => setSelectedType(e.target.value)}
                className="w-full md:w-48 px-4 py-2 rounded-lg border border-blue-300"
              >
                {typeOptions.map(option => (
                  <option key={option} value={option}>{option === "All" ? "All Types" : option.charAt(0).toUpperCase() + option.slice(1)}</option>
                ))}
              </select>
            </div>
            {/* Sector */}
            <div>
              <label className="block mb-2 text-blue-900 font-semibold">Sector</label>
              <select
                value={selectedSector}
                onChange={e => setSelectedSector(e.target.value)}
                className="w-full md:w-48 px-4 py-2 rounded-lg border border-blue-300"
              >
                {sectorOptions.map(option => (
                  <option key={option} value={option}>{option === "All" ? "All Sectors" : option.charAt(0).toUpperCase() + option.slice(1)}</option>
                ))}
              </select>
            </div>
            {/* Practice */}
            <div>
              <label className="block mb-2 text-blue-900 font-semibold">Practice Type</label>
              <select
                value={selectedPractice}
                onChange={e => setSelectedPractice(e.target.value)}
                className="w-full md:w-48 px-4 py-2 rounded-lg border border-blue-300"
              >
                {practiceOptions.map(option => (
                  <option key={option} value={option}>{option === "All" ? "All Practice Types" : option.charAt(0).toUpperCase() + option.slice(1)}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Dynamic Jobs Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Live Veterinary Job Openings</h2>
            {loading && <div className="text-gray-700 text-center py-8">Loading jobs...</div>}
            {error && <div className="text-red-500 text-center py-8">Could not load jobs. Please try again later.</div>}
            {!loading && !error && filteredDynamic.length === 0 && (
              <div className="text-gray-500 text-center py-4">No jobs found for this filter.</div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredDynamic.map((job, idx) => (
                <div key={idx} className="bg-blue-50 border-l-4 border-blue-600 rounded-xl shadow p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-blue-900">{job.title}</h3>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">{job.country}</span>
                  </div>
                  <p className="text-gray-700 mb-2">
                    <strong>Organisation:</strong> {job.organisation || "N/A"}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Type:</strong> {job.type}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Sector:</strong> {job.sector}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Practice:</strong> {job.practice}
                  </p>
                  <p className="text-gray-600 mb-4 leading-relaxed">{job.description}</p>
                  <div className="flex justify-between items-end">
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                    >
                      View & Apply
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    {job.date && <span className="text-xs text-gray-500">Deadline: {job.date}</span>}
                  </div>
                  <div className="text-xs text-right text-gray-400 mt-1">Source: {job.source}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Static Job Boards Section */}
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Other Veterinary Job Boards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredBoards.length === 0 ? (
              <div className="col-span-full text-center text-xl text-gray-700 py-16">
                No job boards match your selected filters.
              </div>
            ) : (
              filteredBoards.map((board, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
                >
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">{board.title}</h2>
                    <span className="inline-block mb-4 px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {board.country}
                    </span>
                    <div className="mb-2 text-gray-600">
                      <strong>Types:</strong> {board.types.map(t => t.charAt(0).toUpperCase() + t.slice(1)).join(", ")}
                    </div>
                    <div className="mb-2 text-gray-600">
                      <strong>Sectors:</strong> {board.sectors.map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(", ")}
                    </div>
                    <div className="mb-4 text-gray-600">
                      <strong>Practice:</strong> {board.practice.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(", ")}
                    </div>
                  </div>
                  <a
                    href={board.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 mt-4"
                  >
                    Visit Job Board
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default JobOpportunities;
