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
    country: "USA/Canada",
    type: "internship",
    species: "small animal, equine, farm animal"
  },
  {
    title: "Royal Veterinary College Small Animal Residency Programmes",
    organisation: "Royal Veterinary College",
    description: "These residencies are designed for qualified veterinary graduates who wish to specialise in specific disciplines related to small animal practice. All residents are also registered for a Master's degree in Veterinary Medicine.",
    url: "https://www.rvc.ac.uk/study/postgraduate/residencies/small-animal",
    country: "UK",
    type: "residency",
    species: "small animal"
  },
  {
    title: "University of Liverpool Rotating Internship Programme",
    organisation: "Univeristy of Liverpool",
    description: "Rotating internships are designed for highly motivated veterinary professionals who wish to develop their skills, experience and knowledge by working under supervision in a multi-disciplinary referral hospital to prepare them for entry to a residency programme.",
    url: "https://www.liverpool.ac.uk/sath/teaching/postgraduates/internships/",
    country: "UK",
    type: "internship",
    species: "small animal"
  },
  {
    title: "University of Liverpool Anaesthesia Internship Programme",
    organisation: "Univeristy of Liverpool",
    description: "Rotating internships are designed for highly motivated veterinary professionals who wish to develop their skills, experience and knowledge by working under supervision in a multi-disciplinary referral hospital to prepare them for entry to a residency programme.",
    url: "https://www.liverpool.ac.uk/sath/teaching/postgraduates/internships/",
    country: "UK",
    type: "internship",
    species: "small animal"
  },
  {
    title: "University of Liverpool Small Animal Residency Programme",
    organisation: "Univeristy of Liverpool",
    description: "The Small Animal Teaching Hospital (SATH) offers several residency programmes designed for veterinarians who wish to specialise in specific disciplines related to small animal practice. They provide first class, world-renowned training for veterinary specialisation.",
    url: "https://www.liverpool.ac.uk/sath/teaching/postgraduates/residencies/#:~:text=The%20Small%20Animal%20Teaching%20Hospital,renowned%20training%20for%20veterinary%20specialisation.",
    country: "UK",
    type: "residency",
    species: "small animal"
  },
  {
    title: "University of Cambridge Rotating Internship Programme",
    organisation: "Univeristy of Cambridge",
    description: "The Internship programme provides an opportunity for qualified veterinarians to obtain high-quality, post-graduate training in a large range of small animal disciplines. The objectives of the Programme are to enhance participants’ clinical, diagnostic, problem-solving, communication, and technical skills, and to prepare the interns to advance to a Senior Clinical Training Programme and subsequent specialism should you wish or to head back into general practice with increased confidence to practice to a high standard of care.",
    url: "https://www.vet.cam.ac.uk/study/cts/jcts1/smallanimal",
    country: "UK",
    type: "internship",
    species: "small animal"
  },
  {
    title: "University of Cambridge Senior Clinical Training Scholarship / Residency Programme",
    organisation: "Univeristy of Cambridge",
    description: "The Internship programme provides an opportunity for qualified veterinarians to obtain high-quality, post-graduate training in a large range of small animal disciplines. The objectives of the Programme are to enhance participants’ clinical, diagnostic, problem-solving, communication, and technical skills, and to prepare the interns to advance to a Senior Clinical Training Programme and subsequent specialism should you wish or to head back into general practice with increased confidence to practice to a high standard of care.",
    url: "https://www.vet.cam.ac.uk/study/cts/jcts1/smallanimal",
    country: "UK",
    type: "residency",
    species: "small animal"
  },
  {
    title: "University of Edinburgh Rotating Internship Programme",
    organisation: "Univeristy of Edinburgh",
    description: "53 week Rotating Internship programme provides an opportunity for new graduates or recently-qualified veterinarians to receive high-quality postgraduate training in small animal disciplines under the supervision of experienced clinicians in the R(D)SVS Hospital for Small Animals.",
    url: "https://vet.ed.ac.uk/clinical/vacancies/rotating-interns",
    country: "UK",
    type: "internship",
    species: "small animal"
  },
  {
    title: "University of Edinburgh Residency / Clinical Scholarship Programme",
    organisation: "Univeristy of Edinburgh",
    description: "The Professional Doctorate in Veterinary Medicine will provide an opportunity for qualified veterinary surgeons to undertake a period of advanced clinical training in a chosen specialty under the guidance and supervision of the Royal College of Veterinary Surgeons and European/ American veterinary specialists.",
    url: "https://vet.ed.ac.uk/clinical/vacancies/clinicalscholarships",
    country: "UK",
    type: "residency",
    species: "small animal"
  },
  {
    title: "University of Glasgow Small Animal Internship Programme",
    organisation: "Univeristy of Glasgow",
    description: "",
    url: "https://www.gla.ac.uk/explore/jobs/appointments/sahvacancies/",
    country: "UK",
    type: "internship",
    species: "small animal"
  },
  {
    title: "University of Glasgow Small Animal Internship Programme",
    organisation: "Univeristy of Glasgow",
    description: "",
    url: "https://www.gla.ac.uk/explore/jobs/appointments/sahvacancies/",
    country: "UK",
    type: "residency",
    species: "small animal"
  },
  {
    title: "IVC Evidensia Rotating and Discipline Specific Internships",
    organisation: "IVC Evidensia, various locations",
    description: "The Internship programmes provides an opportunity for qualified veterinarians to obtain training in a large range of small animal disciplines.",
    url: "https://ivcevidensia.co.uk/careers?roles=8",
    country: "UK",
    type: "internship",
    species: "small animal"
  },
  {
    title: "IVC Evidensia Small Animal Residency Programmes",
    organisation: "IVC Evidensia, various locations",
    description: "The residency programmes provides an opportunity for qualified veterinarians to obtain specialised training working towards diplomat status in their chosen discpline.",
    url: "https://ivcevidensia.co.uk/careers?roles=9",
    country: "UK",
    type: "residency",
    species: "small animal"
  },
  {
    title: "IVC Evidensia Small Animal Residency Programmes",
    organisation: "IVC Evidensia, various locations",
    description: "The residency programmes provides an opportunity for qualified veterinarians to obtain specialised training working towards diplomat status in their chosen discpline.",
    url: "https://ivcevidensia.co.uk/careers?roles=9",
    country: "UK",
    type: "residency",
    species: "small animal"
  },
  {
    title: "Linnaeus Small Animal Rotating and Displine Specific Internships",
    organisation: "Linnaeus Group, various locations",
    description: "Rotating and discipline specific internships providing an opportunity for qualified veterinarians to obtain training in a large range of small animal disciplines.",
    url: "https://www.linnaeusgroup.co.uk/careers/internships",
    country: "UK",
    type: "internship",
    species: "small animal"
  },
  {
    title: "Linnaeus Small Animal Residency Programmes",
    organisation: "Linnaeus Group, various locations",
    description: "Residency programmes providing an opportunity for qualified veterinarians to obtain specialised training working towards diplomat status in their chosen discpline.",
    url: "https://www.linnaeusgroup.co.uk/careers/vacancies?role=6",
    country: "UK",
    type: "residency",
    species: "small animal"
  },
  {
    title: "CVS Small Animal Rotating and Discpline Specific Internship Programmes",
    organisation: "CVS Group, various locations",
    description: "Give exposure to referral practice and a broad range of specialist disciplines working alongside world-class nurses, vets and specialists",
    url: "https://cvs-referrals.com/careers/internship/",
    country: "UK",
    type: "internship",
    species: "small animal"
  },
  {
    title: "CVS Small Animal Residency Programmes",
    organisation: "CVS Group, various locations",
    description: "Residency programmes providing an opportunity for qualified veterinarians to obtain specialised training working towards diplomat status in their chosen discpline.",
    url: "https://cvs-referrals.com/careers/residencies/",
    country: "UK",
    type: "residency",
    species: "small animal"
  },
  {
    title: "BEVA Recognised Equine Internship",
    organisation: "BEVA",
    description: "All BEVA recognised internships have agreed to a set of core standards that ensure interns receive the right training and are treated fairly.",
    url: "https://www.beva.org.uk/New-Vet-Grads/Recognised-Internships",
    country: "Worldwide",
    type: "internship",
    species: "equine"
  },
  {
    title: "ECVS Residency Training",
    organisation: "European College of Veterinary Surgeons",
    description: "Advanced surgical training programs leading to board certification in veterinary surgery.",
    url: "https://www.ecvs.org/ecvs-for/residents.php",
    country: "Europe",
    type: "residency",
    species: "small animal"
  },
  {
    title: "ECVP Residency Programme",
    organisation: "European College of Veterinary Pathologists",
    description: "Specialized training in veterinary pathology leading to board certification.",
    url: "https://www.ecvpath.org/resident-registration",
    country: "Europe",
    type: "residency",
    species: "mixed"
  },
  {
    title: "The Ralph Veterinary Residency Programme",
    organisation: "The Ralph",
    description: "Various residency programs in collaboration with European colleges.",
    url: "https://theralph.vet/join-team-ralph/",
    country: "UK",
    type: "residency",
    species: "small animal"
  },
  {
    title: "The Ralph Veterinary Internship Programmes",
    organisation: "The Ralph",
    description: "Various rotating and discpline specific programs.",
    url: "https://theralph.vet/join-team-ralph/",
    country: "UK",
    type: "residency",
    species: "small animal"
  },
  {
    title: "ECVIM-CA Residency Programmes",
    organisation: "ECVIM",
    description: "Specialized residency training programs in internal medicine at various veterinary institutes.",
    url: "https://ecvim-ca.college/residency-vacancies/",
    country: "Europe",
    type: "residency",
    species: "small animal"
  },
  {
    title: "European College of Veterinary Microbiology (ECVM) Residency Programmes",
    organisation: "ECVM",
    description: "Specialized residency training programs in microbiology at various veterinary institutes.",
    url: "https://ecvmicro.org/training-centers/",
    country: "Europe",
    type: "residency",
    species: "small animal"
  },
  {
    title: "European College of Veterinary Anaesthesia and Analgesia Residency Programmes",
    organisation: "ECVAA",
    description: "Specialized residency training programs in anaesthesia and analgesia at various veterinary institutes.",
    url: "https://www.ecvaa.org/ecvaa/training-centers-list",
    country: "Europe",
    type: "residency",
    species: "small animal"
  },
  {
    title: "European College of Veterinary and Comparative Nutrition",
    organisation: "ECVCN",
    description: "Specialized residency training programs in nutrition at various veterinary institutes.",
    url: "https://www.ecvcn.org/why-become-resident-why-become-supervisor",
    country: "Europe",
    type: "residency",
    species: "small animal"
  },
  {
    title: "European College of Veterinary Clinical Pathology",
    organisation: "ECVCP",
    description: "Specialized residency training programs in clinical pathology at various veterinary institutes.",
    url: "https://www.esvcp.org/open-positions.html",
    country: "Europe",
    type: "residency",
    species: "small animal"
  },
  {
    title: "European College of Veterinary Dermatology",
    organisation: "ECVD",
    description: "Specialized residency training programs in veterinary dermatology at various veterinary institutes.",
    url: "https://www.ecvd.org/programmes/start-your-residency/",
    country: "Europe",
    type: "residency",
    species: "small animal"
  },
  {
    title: "European College of Veterinary Diagnostic Imaging",
    organisation: "ECVDI",
    description: "Specialized residency training programs in veterinary diagnostic imaging at various veterinary institutes.",
    url: "https://www.ecvdi.org/training-centers-list",
    country: "Europe",
    type: "residency",
    species: "small animal"
  },
  {
    title: "European College of Veterinary Emergency and Critical Care",
    organisation: "ECVECC",
    description: "Specialized residency training programs in veterinary emergency and critical care at various veterinary institutes.",
    url: "https://www.ecvecc.org/resident-training-facilities",
    country: "Europe, New Zealand",
    type: "residency",
    species: "small animal"
  },
  {
    title: "European College of Veterinary Neurology",
    organisation: "ECVN",
    description: "Specialized residency training programs in veterinary neurology at various veterinary institutes.",
    url: "https://www.ecvn.org/general-information/open-residency-position",
    country: "Europe",
    type: "residency",
    species: "small animal"
  },
  {
    title: "European College of Veterinary Ophthalmologists",
    organisation: "ECVO",
    description: "Specialized internship and residency training programs in veterinary ophthalmology at various veterinary institutes.",
    url: "https://www.ecvo.eu/residents/training-job-opportunities-for-interns-residents.html",
    country: "Europe",
    type: "intern, residency",
    species: "small animal"
  },
  {
    title: "Equine Internal Medicine Residency – Vetsuisse Faculty, University of Bern",
    organisation: "Vetsuisse Faculty, University of Bern",
    description: "A 3–4 year residency based at ISME equine clinic in Bern, Switzerland. Under supervision of ECEIM Diplomates, residents manage a full spectrum of internal medicine cases (colic, respiratory, endocrine, neurology, cardiology, neonatology, critical care), perform procedures (endoscopy, ultrasound, ECG, biopsies), rotate through anesthesia, pathology, radiology, emergency medicine, and complete a research project with publication. Full ECEIM curriculum compliance towards Diplomate status.",
    url: "https://www.vetsuisse.unibe.ch/unibe/portal/fak_vetmedizin/content/e958563/e1479566/e1487942/files1488663/ECEIM_InnererMedizinderPferde_2025_eng.pdf",
    country: "Switzerland",
    type: "residency",
    species: "equine"
  },
  {
    title: "Residency in Equine Internal Medicine – Vetagro‑Sup, Lyon",
    organisation: "VetAgro Sup – Lyon Veterinary School",
    description: "A 3‑year residency (2022–2025) at the Teaching Veterinary Hospital in Lyon, France, following ECEIM guidelines. Includes ≥60 % internal medicine under ECEIM/ACVIM Diplomate supervision, rotations in anesthesia, pathology, imaging, critical care, on‑call emergency duties, ambulatory service, journal clubs, clinical teaching, 5+ scientific presentations, attendance at 3 international conferences, and research producing publications—all aligned to ECEIM certification requirements.",
    url: "https://international-relations.auth.gr/wp-content/uploads/sites/60/2021/10/PubResid-MED-2022-2025-EN.pdf",
    country: "France",
    type: "residency",
    species: "equine"
  },
  {
    title: "Equine Internal Medicine Residency – École Nationale Vétérinaire d'Alfort (EnvA)",
    organisation: "EnvA, France",
    description: "Residency opening in the new equine hospital at EnvA, France, structured to meet ECEIM requirements under direct supervision of ECEIM Diplomates. 3‑year competency‑based training integrating clinical care, procedures, rotations, research and publication components.",
    url: "https://www.eceim.info/",
    country: "France",
    type: "residency",
    species: "equine"
  },
  {
    title: "Equine Internal Medicine Residency – Royal Veterinary College, London",
    organisation: "Royal Veterinary College",
    description: "A 3–4 year equine internal medicine residency programme approved by the European College, based at RVC’s equine clinic. Designed to meet ECEIM training standards under supervision of Diplomates, includes clinical rotations, research, and progression toward DipECEIM.",
    url: "https://www.rvc.ac.uk/study/postgraduate/residencies/equine",
    country: "UK",
    type: "residency",
    species: "equine"
  },
  {
    title: "Equine Internal Medicine Residency – Univeristy of Liverpool",
    organisation: "Royal Veterinary College",
    description: "Residencies are generally three-year posts for veterinary surgeons with appropriate post graduate clinical experience, following an approved programme of post-graduate training which leads to a specialist qualification. Currently the equine hospital employs six residents (2 medicine residents and 4 surgery residents).",
    url: "https://www.liverpool.ac.uk/equine/about-us/opportunities/",
    country: "UK",
    type: "residency",
    species: "equine"
  },
  {
    title: "Equine Internal Medicine Residency – Univeristy of Liverpool",
    organisation: "Royal Veterinary College",
    description: "Residencies are generally three-year posts for veterinary surgeons with appropriate post graduate clinical experience, following an approved programme of post-graduate training which leads to a specialist qualification. Currently the equine hospital employs six residents (2 medicine residents and 4 surgery residents).",
    url: "https://www.liverpool.ac.uk/equine/about-us/opportunities/",
    country: "UK",
    type: "residency",
    species: "equine"
  },
];

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
