import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const staticPrograms = [
  // ... (for brevity: use the full array from your App.js - all those objects; this is too large for this message's space but you can copy them as shown)
  // See previous messages for your exact data, or let me know if you want the full pasted block!
];

const InternshipsResidencies = () => {
  const [dynamicJobs, setDynamicJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const speciesList = [
    "All Species",
    "Small Animal",
    "Equine",
    "Exotic",
    "Farm/Mixed",
    "Mixed"
  ];
  const typeList = [
    "All Types",
    "internship",
    "residency"
  ];

  const [selectedSpecies, setSelectedSpecies] = useState("All Species");
  const [selectedType, setSelectedType] = useState("All Types");

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetch("https://vetjobs-api.onrender.com/api/jobs")
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

  const filterFn = (program) => {
    const speciesMatch =
      selectedSpecies === "All Species" ||
      (program.species && program.species.toLowerCase().includes(selectedSpecies.toLowerCase()));
    const typeMatch =
      selectedType === "All Types" ||
      (program.type && program.type.toLowerCase() === selectedType.toLowerCase());
    return speciesMatch && typeMatch;
  };

  const filteredStatic = staticPrograms.filter(filterFn);
  const filteredDynamic = dynamicJobs.filter(filterFn);

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
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Internships & Residencies</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized training opportunities for advanced veterinary education and board certification preparation.
            </p>
          </div>
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-10 justify-center">
            <select
              value={selectedSpecies}
              onChange={e => setSelectedSpecies(e.target.value)}
              className="px-4 py-2 rounded-lg border border-blue-300 focus:ring-2 focus:ring-blue-500"
            >
              {speciesList.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <select
              value={selectedType}
              onChange={e => setSelectedType(e.target.value)}
              className="px-4 py-2 rounded-lg border border-blue-300 focus:ring-2 focus:ring-blue-500"
            >
              {typeList.map(t => (
                <option key={t} value={t}>{t.charAt(0).toUpperCase() + t.slice(1)}</option>
              ))}
            </select>
          </div>

          {/* Dynamic Jobs Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Live Board-certified Residencies & Internships</h2>
            {loading && (
              <div className="text-gray-700 text-center py-8">Loading dynamic jobs...</div>
            )}
            {error && (
              <div className="text-red-500 text-center py-8">
                Could not load dynamic jobs. Please try again later.
              </div>
            )}
            {!loading && !error && filteredDynamic.length === 0 && (
              <div className="text-gray-500 text-center py-4">
                No dynamic jobs found for this filter.
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredDynamic.map((job, index) => (
                <div key={index} className="bg-blue-50 border-l-4 border-blue-600 rounded-xl shadow p-8 hover:shadow-xl transition-shadow duration-300">
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
                    <strong>Species:</strong> {job.species}
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

          {/* Static Programs Section */}
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Other Internships & Residency Programmes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredStatic.map((program, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{program.title}</h3>
                  <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {program.country}
                  </span>
                </div>
                <p className="text-gray-700 mb-2">
                  <strong>Organisation:</strong> {program.organisation}
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Type:</strong> {program.type.charAt(0).toUpperCase() + program.type.slice(1)}
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Species:</strong> {program.species}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                <a
                  href={program.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  Visit Programme
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default InternshipsResidencies;
