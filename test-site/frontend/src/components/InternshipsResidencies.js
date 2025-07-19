import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MapJobOpportunities from "./MapJobOpportunities";

// --- Static Programs Data for Internships & Residencies ---
const staticPrograms = [
  {
    title: "VIRMP - Veterinary Internship and Residency Matching Program",
    organisation: "USA/Canada",
    description: "Central matching service for veterinary internships and residencies in North America.",
    url: "https://www.virmp.org/",
    country: "USA",
    city: "Nationwide",
    species: "multiple",
    type: "internship, residency"
  },
  {
    title: "Royal Veterinary College Small Animal Residency Programmes",
    organisation: "Royal Veterinary College",
    description: "...",
    url: "https://www.rvc.ac.uk/study/postgraduate/residencies/small-animal",
    country: "United Kingdom",
    city: "London",
    latitude: 51.5221,
    longitude: -0.1338,
    species: "small animal",
    type: "residency"
  },
  {
    title: "University of Liverpool Rotating Internship Programme",
    organisation: "University of Liverpool",
    description: "...",
    url: "https://www.liverpool.ac.uk/sath/teaching/postgraduates/internships/",
    country: "United Kingdom",
    city: "Liverpool",
    latitude: 53.4068,
    longitude: -2.9664,
    species: "small animal",
    type: "internship"
  },
  {
    title: "University of Liverpool Anaesthesia Internship Programme",
    organisation: "University of Liverpool",
    description: "...",
    url: "https://www.liverpool.ac.uk/sath/teaching/postgraduates/internships/",
    country: "United Kingdom",
    city: "Liverpool",
    latitude: 53.4068,
    longitude: -2.9664,
    species: "small animal",
    type: "internship"
  },
  {
    title: "University of Liverpool Small Animal Residency Programme",
    organisation: "University of Liverpool",
    description: "...",
    url: "https://www.liverpool.ac.uk/sath/teaching/postgraduates/residencies/#:~:text=The%20Small%20Animal%20Teaching%20Hospital,renowned%20training%20for%20veterinary%20specialisation.",
    country: "United Kingdom",
    city: "Liverpool",
    latitude: 53.4068,
    longitude: -2.9664,
    species: "small animal",
    type: "residency"
  },
  {
    title: "University of Cambridge Rotating Internship Programme",
    organisation: "University of Cambridge",
    description: "...",
    url: "https://www.vet.cam.ac.uk/study/cts/jcts1/smallanimal",
    country: "United Kingdom",
    city: "Cambridge",
    latitude: 52.2053,
    longitude: 0.1218,
    species: "small animal",
    type: "internship"
  },
  {
    title: "University of Cambridge Senior Clinical Training Scholarship / Residency Programme",
    organisation: "University of Cambridge",
    description: "...",
    url: "https://www.vet.cam.ac.uk/study/cts/jcts1/smallanimal",
    country: "United Kingdom",
    city: "Cambridge",
    latitude: 52.2053,
    longitude: 0.1218,
    species: "small animal",
    type: "residency"
  },
  {
    title: "University of Edinburgh Rotating Internship Programme",
    organisation: "University of Edinburgh",
    description: "...",
    url: "https://vet.ed.ac.uk/clinical/vacancies/rotating-interns",
    country: "United Kingdom",
    city: "Edinburgh",
    latitude: 55.9533,
    longitude: -3.1883,
    species: "small animal",
    type: "internship"
  },
  {
    title: "University of Edinburgh Residency / Clinical Scholarship Programme",
    organisation: "University of Edinburgh",
    description: "...",
    url: "https://vet.ed.ac.uk/clinical/vacancies/clinicalscholarships",
    country: "United Kingdom",
    city: "Edinburgh",
    latitude: 55.9533,
    longitude: -3.1883,
    species: "small animal",
    type: "residency"
  },
  {
    title: "University of Glasgow Small Animal Internship Programme",
    organisation: "University of Glasgow",
    description: "",
    url: "https://www.gla.ac.uk/explore/jobs/appointments/sahvacancies/",
    country: "United Kingdom",
    city: "Glasgow",
    latitude: 55.8721,
    longitude: -4.2888,
    species: "small animal",
    type: "internship"
  },
  {
    title: "University of Glasgow Small Animal Residency Programme",
    organisation: "University of Glasgow",
    description: "",
    url: "https://www.gla.ac.uk/explore/jobs/appointments/sahvacancies/",
    country: "United Kingdom",
    city: "Glasgow",
    latitude: 55.8721,
    longitude: -4.2888,
    species: "small animal",
    type: "residency"
  },
  {
    title: "IVC Evidensia Rotating and Discipline Specific Internships",
    organisation: "IVC Evidensia",
    description: "...",
    url: "https://ivcevidensia.co.uk/careers?roles=8",
    country: "United Kingdom",
    city: "Nationwide",
    species: "small animal",
    type: "internship"
  },
  {
    title: "IVC Evidensia Small Animal Residency Programmes",
    organisation: "IVC Evidensia",
    description: "...",
    url: "https://ivcevidensia.co.uk/careers?roles=9",
    country: "United Kingdom",
    city: "Nationwide",
    species: "small animal",
    type: "residency"
  },
  {
    title: "Linnaeus Small Animal Rotating and Displine Specific Internships",
    organisation: "Linnaeus Group",
    description: "...",
    url: "https://www.linnaeusgroup.co.uk/careers/internships",
    country: "United Kingdom",
    city: "Nationwide",
    species: "small animal",
    type: "internship"
  },
  {
    title: "Linnaeus Small Animal Residency Programmes",
    organisation: "Linnaeus Group",
    description: "...",
    url: "https://www.linnaeusgroup.co.uk/careers/vacancies?role=6",
    country: "United Kingdom",
    city: "Nationwide",
    species: "small animal",
    type: "residency"
  },
  {
    title: "CVS Small Animal Rotating and Discpline Specific Internship Programmes",
    organisation: "CVS Group",
    description: "...",
    url: "https://cvs-referrals.com/careers/internship/",
    country: "United Kingdom",
    city: "Nationwide",
    species: "small animal",
    type: "internship"
  },
  {
    title: "CVS Small Animal Residency Programmes",
    organisation: "CVS Group",
    description: "...",
    url: "https://cvs-referrals.com/careers/residencies/",
    country: "United Kingdom",
    city: "Nationwide",
    species: "small animal",
    type: "residency"
  },
  {
    title: "BEVA Recognised Equine Internship",
    organisation: "BEVA",
    description: "...",
    url: "https://www.beva.org.uk/New-Vet-Grads/Recognised-Internships",
    country: "Worldwide",
    city: "",
    species: "equine",
    type: "internship"
  },
  {
    title: "ECVS Residency Training",
    organisation: "European College of Veterinary Surgeons",
    description: "...",
    url: "https://www.ecvs.org/ecvs-for/residents.php",
    country: "Europe",
    city: "",
    species: "mixed",
    type: "residency"
  },
  {
    title: "ECVP Residency Programme",
    organisation: "European College of Veterinary Pathologists",
    description: "...",
    url: "https://www.ecvpath.org/resident-registration",
    country: "Europe",
    city: "",
    species: "mixed",
    type: "residency"
  },
  {
    title: "The Ralph Veterinary Residency Programme",
    organisation: "The Ralph",
    description: "...",
    url: "https://theralph.vet/join-team-ralph/",
    country: "United Kingdom",
    city: "Marlow",
    latitude: 51.5700,
    longitude: -0.7741,
    species: "small animal",
    type: "residency"
  },
  {
    title: "The Ralph Veterinary Internship Programmes",
    organisation: "The Ralph",
    description: "...",
    url: "https://theralph.vet/join-team-ralph/",
    country: "United Kingdom",
    city: "Marlow",
    latitude: 51.5700,
    longitude: -0.7741,
    species: "small animal",
    type: "internship"
  },
  {
    title: "ECVIM-CA Residency Programmes",
    organisation: "ECVIM",
    description: "...",
    url: "https://ecvim-ca.college/residency-vacancies/",
    country: "Europe",
    city: "",
    species: "small animal",
    type: "residency"
  },
  {
    title: "European College of Veterinary Microbiology (ECVM) Residency Programmes",
    organisation: "ECVM",
    description: "...",
    url: "https://ecvmicro.org/training-centers/",
    country: "Europe",
    city: "",
    species: "mixed",
    type: "residency"
  },
  {
    title: "European College of Veterinary Anaesthesia and Analgesia Residency Programmes",
    organisation: "ECVAA",
    description: "...",
    url: "https://www.ecvaa.org/ecvaa/training-centers-list",
    country: "Europe",
    city: "",
    species: "mixed",
    type: "residency"
  },
  {
    title: "European College of Veterinary and Comparative Nutrition",
    organisation: "ECVCN",
    description: "...",
    url: "https://www.ecvcn.org/why-become-resident-why-become-supervisor",
    country: "Europe",
    city: "",
    species: "mixed",
    type: "residency"
  },
  {
    title: "European College of Veterinary Clinical Pathology",
    organisation: "ECVCP",
    description: "...",
    url: "https://www.esvcp.org/open-positions.html",
    country: "Europe",
    city: "",
    species: "mixed",
    type: "residency"
  },
  {
    title: "European College of Veterinary Dermatology",
    organisation: "ECVD",
    description: "...",
    url: "https://www.ecvd.org/programmes/start-your-residency/",
    country: "Europe",
    city: "",
    species: "small animal",
    type: "residency"
  },
  {
    title: "European College of Veterinary Diagnostic Imaging",
    organisation: "ECVDI",
    description: "...",
    url: "https://www.ecvdi.org/training-centers-list",
    country: "Europe",
    city: "",
    species: "mixed",
    type: "residency"
  },
  {
    title: "European College of Veterinary Emergency and Critical Care",
    organisation: "ECVECC",
    description: "...",
    url: "https://www.ecvecc.org/resident-training-facilities",
    country: "Europe",
    city: "",
    species: "small animal",
    type: "residency"
  },
  {
    title: "European College of Veterinary Neurology",
    organisation: "ECVN",
    description: "...",
    url: "https://www.ecvn.org/general-information/open-residency-position",
    country: "Europe",
    city: "",
    species: "small animal",
    type: "residency"
  },
  {
    title: "European College of Veterinary Ophthalmologists",
    organisation: "ECVO",
    description: "...",
    url: "https://www.ecvo.eu/residents/training-job-opportunities-for-interns-residents.html",
    country: "Europe",
    city: "",
    species: "small animal",
    type: "internship, residency"
  },
  {
    title: "Equine Internal Medicine Residency – Vetsuisse Faculty, University of Bern",
    organisation: "Vetsuisse Faculty, University of Bern",
    description: "...",
    url: "https://www.vetsuisse.unibe.ch/unibe/portal/fak_vetmedizin/content/e958563/e1479566/e1487942/files1488663/ECEIM_InnererMedizinderPferde_2025_eng.pdf",
    country: "Switzerland",
    city: "Bern",
    latitude: 46.9470,
    longitude: 7.4474,
    species: "equine",
    type: "residency"
  },
  {
    title: "Residency in Equine Internal Medicine – Vetagro‑Sup, Lyon",
    organisation: "VetAgro Sup – Lyon Veterinary School",
    description: "...",
    url: "https://international-relations.auth.gr/wp-content/uploads/sites/60/2021/10/PubResid-MED-2022-2025-EN.pdf",
    country: "France",
    city: "Lyon",
    latitude: 45.7831,
    longitude: 4.8725,
    species: "equine",
    type: "residency"
  },
  {
    title: "Equine Internal Medicine Residency – École Nationale Vétérinaire d'Alfort (EnvA)",
    organisation: "EnvA, France",
    description: "...",
    url: "https://www.eceim.info/",
    country: "France",
    city: "Maisons-Alfort",
    latitude: 48.8000,
    longitude: 2.4347,
    species: "equine",
    type: "residency"
  },
  {
    title: "Equine Internal Medicine Residency – Royal Veterinary College, London",
    organisation: "Royal Veterinary College",
    description: "...",
    url: "https://www.rvc.ac.uk/study/postgraduate/residencies/equine",
    country: "United Kingdom",
    city: "London",
    latitude: 51.5221,
    longitude: -0.1338,
    species: "equine",
    type: "residency"
  },
  {
    title: "Equine Internal Medicine Residency – University of Liverpool",
    organisation: "University of Liverpool",
    description: "...",
    url: "https://www.liverpool.ac.uk/equine/about-us/opportunities/",
    country: "United Kingdom",
    city: "Liverpool",
    latitude: 53.4068,
    longitude: -2.9664,
    species: "equine",
    type: "residency"
  }
];

// The rest of your component is unchanged (copy from your original)
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

const InternshipsResidencies = () => {
  const [dynamicJobs, setDynamicJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [countryOptions, setCountryOptions] = useState(["All"]);
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [selectedSpecies, setSelectedSpecies] = useState("All Species");
  const [selectedType, setSelectedType] = useState("All Types");

  // Load country list from GeoJSON for dropdown
  useEffect(() => {
    fetch("/countries.geojson")
      .then(res => res.json())
      .then(geo => {
        const names = geo.features.map(f => f.properties.ADMIN || f.properties.NAME).sort();
        setCountryOptions(["All", ...names]);
      });
  }, []);

  // Fetch dynamic internships/residencies from backend
  useEffect(() => {
    setLoading(true);
    setError(false);
    fetch("https://vetjobs-api.onrender.com/api/internships-residencies")
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

  // Unified filter function
  const filterFn = (program) => {
    const speciesMatch =
      selectedSpecies === "All Species" ||
      (program.species && program.species.toLowerCase().includes(selectedSpecies.toLowerCase()));
    const typeMatch =
      selectedType === "All Types" ||
      (program.type && program.type.toLowerCase() === selectedType.toLowerCase());
    const countryMatch =
      selectedCountry === "All" || program.country === selectedCountry;
    return speciesMatch && typeMatch && countryMatch;
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

          {/* Interactive Map */}
          <MapJobOpportunities
            jobs={[...filteredDynamic, ...filteredStatic]}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-10 justify-center">
            <select
              value={selectedCountry}
              onChange={e => setSelectedCountry(e.target.value)}
              className="px-4 py-2 rounded-lg border border-blue-300 focus:ring-2 focus:ring-blue-500"
            >
              {countryOptions.map(option => (
                <option key={option} value={option}>{option === "All" ? "All Countries" : option}</option>
              ))}
            </select>
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
                  <strong>Type:</strong> {program.type ? (program.type.charAt(0).toUpperCase() + program.type.slice(1)) : "N/A"}

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
