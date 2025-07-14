import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate, Link } from "react-router-dom";

// Training Programs Component
const TrainingPrograms = () => {
  const programs = [
    {
      title: "CVS Veterinary Group Graduate Programme",
      organisation: "CVS Group",
      description: "Comprehensive graduate development programme with mentorship and structured learning.",
      url: "https://careers.cvsvets.com/Graduates",
      country: "UK"
    },
    {
      title: "IVC Evidensia Graduate Academy",
      organisation: "IVC Evidensia",
      description: "Graduate academy offering structured learning, mentoring, and career development opportunities.",
      url: "https://ivcevidensia.co.uk/graduate-academy",
      country: "UK"
    },
    {
      title: "Linnaeus Veterinary Graduate Development Programme",
      organisation: "Linnaeus Group",
      description: "18-month structured programme with clinical rotations, mentoring, and professional development.",
      url: "https://www.linnaeusgroup.co.uk/careers/graduates-students-and-apprenticeships/veterinary-graduate-development-programme-at-linnaeus",
      country: "UK"
    },
    {
      title: "Medivet Early Careers Programme",
      organisation: "Medivet",
      description: "Comprehensive early career development with mentoring and structured learning pathways.",
      url: "https://careers.medivet.co.uk/early-careers",
      country: "UK"
    },
    {
      title: "Vets4Pets Graduate Programme",
      organisation: "Vets4Pets",
      description: "Graduate programme focusing on primary care development with ongoing support and training.",
      url: "https://www.vets4petscareers.com/our-graduate-programme/",
      country: "UK"
    },
    {
      title: "VetPartners Graduate Programme",
      organisation: "VetPartners",
      description: "Structured graduate programme with clinical mentoring and professional development opportunities.",
      url: "https://www.vetpartners.co.uk/your-career/graduates/",
      country: "UK"
    }
  ];

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
                <h1 className="text-2xl font-bold text-gray-900">VetCareerHub</h1>
                <p className="text-sm text-gray-600">Your Veterinary Career Compass</p>
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Post-graduate Training Programs</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive training programs designed for new veterinary graduates to develop clinical skills and experience in a structured environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-semibold text-gray-900">{program.title}</h2>
                  <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {program.country}
                  </span>
                </div>
                <p className="text-gray-700 mb-4">
                  <strong className="text-blue-600">Organisation:</strong> {program.organisation}
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



// Internships & Residencies Component


const InternshipsResidencies = () => {
  const programs = [
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
      title: "Royal Veterinary College Rotating Internship Programme",
      organisation: "Royal Veterinary College",
      description: "The programme is designed for highly motivated recent veterinary graduates (typically less than five years) who wish to expand their clinical knowledge, skills and experience in all aspects of small animal practice, working under supervision in a multidisciplinary referral hospital",
      url: "https://www.rvc.ac.uk/study/postgraduate/internships/small-animal",
      country: "UK",
      type: "internship",
      species: "small animal"
    },
    {
      title: "Royal Veterinary College Small Animal Residency Programmes",
      organisation: "Royal Veterinary College",
      description: "TThese residencies are designed for qualified veterinary graduates who wish to specialise in specific disciplines related to small animal practice. All residents are also registered for a Master's degree in Veterinary Medicine.",
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
      species: "small animal",
    },
    {
      title: "European College of Veterinary Microbiology (ECVM) Residency Programmes",
      organisation: "ECVM",
      description: "Specialized residency training programs in microbiology at various veterinary institutes.",
      url: "https://ecvmicro.org/training-centers/",
      country: "Europe",
      type: "residency",
      species: "small animal",
    },
    {
      title: "European College of Veterinary Anaesthesia and Analgesia Residency Programmes",
      organisation: "ECVAA",
      description: "Specialized residency training programs in anaesthesia and analgesia at various veterinary institutes.",
      url: "https://www.ecvaa.org/ecvaa/training-centers-list",
      country: "Europe",
      type: "residency",
      species: "small animal",
    },
    {
      title: "European College of Veterinary and Comparative Nutrition",
      organisation: "ECVCN",
      description: "Specialized residency training programs in nutrition at various veterinary institutes.",
      url: "https://www.ecvcn.org/why-become-resident-why-become-supervisor",
      country: "Europe",
      type: "residency",
      species: "small animal",
    },
    {
      title: "European College of Veterinary Clinical Pathology",
      organisation: "ECVCP",
      description: "Specialized residency training programs in clinical pathology at various veterinary institutes.",
      url: "https://www.esvcp.org/open-positions.html",
      country: "Europe",
      type: "residency",
      species: "small animal",
    },
    {
      title: "European College of Veterinary Dermatology",
      organisation: "ECVD",
      description: "Specialized residency training programs in veterinary dermatology at various veterinary institutes.",
      url: "https://www.ecvd.org/programmes/start-your-residency/",
      country: "Europe",
      type: "residency",
      species: "small animal",
    },
    {
      title: "European College of Veterinary Diagnostic Imaging",
      organisation: "ECVDI",
      description: "Specialized residency training programs in veterinary diagnostic imaging at various veterinary institutes.",
      url: "https://www.ecvdi.org/training-centers-list",
      country: "Europe",
      type: "residency",
      species: "small animal",
    },
    {
      title: "European College of Veterinary Emergency and Critical Care",
      organisation: "ECVECC",
      description: "Specialized residency training programs in veterinary emergency and critical care at various veterinary institutes.",
      url: "https://www.ecvecc.org/resident-training-facilities",
      country: "Europe, New Zealand",
      type: "residency",
      species: "small animal",
    },
    {
      title: "European College of Veterinary Neurology",
      organisation: "ECVN",
      description: "Specialized residency training programs in veterinary neurology at various veterinary institutes.",
      url: "https://www.ecvn.org/general-information/open-residency-position",
      country: "Europe",
      type: "residency",
      species: "small animal",
    },
     {
      title: "European College of Veterinary Ophthalmologists",
      organisation: "ECVO",
      description: "Specialized internship and residency training programs in veterinary ophthalmology at various veterinary institutes.",
      url: "https://www.ecvo.eu/residents/training-job-opportunities-for-interns-residents.html",
      country: "Europe",
      type: "intern, residency",
      species: "small animal",
    },
  ];

  // Unique species and types for filter dropdowns
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

  // Filter state
  const [selectedSpecies, setSelectedSpecies] = useState("All Species");
  const [selectedType, setSelectedType] = useState("All Types");

  // Filtering logic
  const filteredPrograms = programs.filter(program => {
    // Species filter (checks if selected species is in the program.species string)
    const speciesMatch =
      selectedSpecies === "All Species" ||
      program.species.toLowerCase().includes(selectedSpecies.toLowerCase());

    // Type filter
    const typeMatch =
      selectedType === "All Types" ||
      program.type.toLowerCase() === selectedType.toLowerCase();

    return speciesMatch && typeMatch;
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
                <h1 className="text-2xl font-bold text-gray-900">VetCareerHub</h1>
                <p className="text-sm text-gray-600">Your Veterinary Career Compass</p>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPrograms.map((program, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-semibold text-gray-900">{program.title}</h2>
                  <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {program.country}
                  </span>
                </div>
                <p className="text-gray-700 mb-4">
                  <strong className="text-blue-600">Organisation:</strong> {program.organisation}
                </p>
                <p className="text-gray-700 mb-4">
                  <strong className="text-blue-600">Type:</strong> {program.type.charAt(0).toUpperCase() + program.type.slice(1)}
                </p>
                <p className="text-gray-700 mb-4">
                  <strong className="text-blue-600">Species:</strong> {program.species}
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





// Postgraduate Certificates Component
const PostgraduateCertificates = () => {
  const programs = [
    {
      title: "Improve International Postgraduate Programmes",
      organisation: "Improve International",
      description: "Comprehensive range of postgraduate veterinary courses and certificates.",
      url: "https://improveinternational.com/uk/postgraduate-programmes/",
      country: "UK"
    },
    {
      title: "BSAVA Postgraduate Certificates",
      organisation: "British Small Animal Veterinary Association",
      description: "Professional certificates in small animal medicine and surgery.",
      url: "https://www.bsava.com/education/postgraduate-certificates/",
      country: "UK"
    },
    {
      title: "Royal Veterinary College CertAVP",
      organisation: "Royal Veterinary College",
      description: "RCVS-accredited certificate programme in advanced veterinary practice.",
      url: "https://www.rvc.ac.uk/study/postgraduate/certavp",
      country: "UK"
    },
    {
      title: "University of Edinburgh CertAVP",
      organisation: "University of Edinburgh",
      description: "RCVS Certificate in Advanced Veterinary Practice with flexible study options.",
      url: "https://vet.ed.ac.uk/education/postgraduate/taught/rcvs-certavp",
      country: "UK"
    },
    {
      title: "University of Liverpool CertAVP",
      organisation: "University of Liverpool",
      description: "Certificate in Advanced Veterinary Practice with online and face-to-face learning.",
      url: "https://www.liverpool.ac.uk/vets/cpd/certavp/",
      country: "UK"
    },
    {
      title: "University of Nottingham CertAVP",
      organisation: "University of Nottingham",
      description: "RCVS Certificate in Advanced Veterinary Practice with modular structure.",
      url: "https://www.nottingham.ac.uk/vet/study-with-us/cpd/rcvs-certificate-in-advanced-veterinary-practice-certavp.aspx",
      country: "UK"
    },
    {
      title: "University of Surrey Veterinary General Practice-PGCert",
      organisation: "University of Surrey",
      description: "Modular structure delivered through online learning followed by a 2 week placement at the University.",
      url: "https://www.surrey.ac.uk/postgraduate/veterinary-general-practice-pgcert",
      country: "UK"
    }
  ];

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
                <h1 className="text-2xl font-bold text-gray-900">VetCareerHub</h1>
                <p className="text-sm text-gray-600">Your Veterinary Career Compass</p>
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Postgraduate Certificates</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced certification programs for practicing veterinarians to develop specialized expertise.
            </p>
          </div>

          {/* RCVS Information Section */}
          <div className="bg-blue-50 rounded-xl p-8 mb-12 border border-blue-200">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              About RCVS Certificate in Advanced Veterinary Practice (CertAVP)
            </h2>
            <p className="text-blue-800 mb-6 text-lg leading-relaxed">
              The CertAVP is an RCVS-accredited qualification that allows veterinarians to demonstrate advanced knowledge and skills in a chosen subject area.
            </p>
            <p className="text-blue-700 mb-6">
              <strong>Source:</strong> Royal College of Veterinary Surgeons
            </p>
            <a
              href="https://www.rcvs.org.uk/lifelong-learning/postgraduate-qualifications/certificate-in-advanced-veterinary-practice-certavp/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Learn More About CertAVP
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-semibold text-gray-900">{program.title}</h2>
                  <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {program.country}
                  </span>
                </div>
                <p className="text-gray-700 mb-4">
                  <strong className="text-blue-600">Organisation:</strong> {program.organisation}
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

const VeterinaryCareerHub = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Mock data for demonstration
  const programs = [
    {
      title: "NAVLE Preparation Program",
      country: "USA",
      category: "licensing",
      description: "Comprehensive preparation for the North American Veterinary Licensing Examination",
      url: "https://www.aavsb.org/navle/"
    },
    {
      title: "MATCH Internship Program",
      country: "USA",
      category: "internship",
      description: "Veterinary Internship and Residency Matching Program",
      url: "https://www.virmp.org/"
    },
    {
      title: "ECFVG Certification",
      country: "USA",
      category: "visa",
      description: "Educational Commission for Foreign Veterinary Graduates - required for foreign graduates",
      url: "https://www.avma.org/education/ecfvg"
    },
    {
      title: "PAVE Program",
      country: "USA",
      category: "visa",
      description: "Program for the Assessment of Veterinary Education Equivalence",
      url: "https://www.aavsb.org/student-services/preparing-for-licensure"
    },
    {
      title: "RVC CertAVP",
      country: "UK",
      category: "certificate",
      description: "Certificate in Advanced Veterinary Practice from Royal Veterinary College",
      url: "https://www.rvc.ac.uk/study/cpd/postgraduate-certificates"
    },
    {
      title: "University of Liverpool Certificate",
      country: "UK",
      category: "certificate",
      description: "Postgraduate Certificate in Veterinary Medicine",
      url: "https://www.liverpool.ac.uk/veterinary-science/study/postgraduate/"
    },
    {
      title: "BSAVA Courses",
      country: "UK",
      category: "certificate",
      description: "British Small Animal Veterinary Association training courses",
      url: "https://www.bsava.com/Education-and-CPD"
    },
    {
      title: "RCVS Professional Development Programme",
      country: "UK",
      category: "development",
      description: "Continuing Professional Development for UK veterinarians",
      url: "https://www.rcvs.org.uk/lifelong-learning/pdp/"
    },
    {
      title: "RCVS Registration",
      country: "UK",
      category: "visa",
      description: "Registration requirements for foreign veterinarians in the UK",
      url: "https://www.rcvs.org.uk/registration/"
    },
    {
      title: "Canadian Veterinary Medical Association",
      country: "Canada",
      category: "licensing",
      description: "Resources for veterinary licensing in Canada",
      url: "https://www.canadianveterinarians.net/"
    },
    {
      title: "NEB Exams Canada",
      country: "Canada",
      category: "visa",
      description: "National Examining Board requirements for foreign veterinary graduates",
      url: "https://www.cvma-acmv.org/"
    }
  ];

  const filteredPrograms = programs.filter(program => {
    const matchesSearch = program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = selectedCountry === "" || program.country === selectedCountry;
    const matchesCategory = selectedCategory === "" || program.category === selectedCategory;
    return matchesSearch && matchesCountry && matchesCategory;
  });

  const countries = [
    {
      name: "United Kingdom",
      code: "UK",
      image: "https://images.unsplash.com/photo-1659019479789-4dd5dbdc2cb1",
      highlights: ["RCVS Registration", "CertAVP Programs", "Thriving referral services"],
      visaInfo: {
        euCitizens: "Post-Brexit: EU citizens need Skilled Worker Visa with job offer from UK sponsor",
        nonEuCitizens: "Skilled Worker Visa required with job offer from licensed UK sponsor",
        additionalReqs: "RCVS registration mandatory, English proficiency may be required"
      }
    },
    {
      name: "United States",
      code: "USA",
      image: "https://images.pexels.com/photos/6075005/pexels-photo-6075005.jpeg",
      highlights: ["NAVLE Examination", "MATCH Program", "State Licensing"],
      visaInfo: {
        foreignGrads: "Work visa required (contact U.S. Department of State)",
        educationReqs: "ECFVG or PAVE certification for non-AVMA accredited graduates",
        additionalReqs: "NAVLE exam + state-specific licensing requirements"
      }
    },
    {
      name: "Canada",
      code: "Canada",
      image: "https://images.unsplash.com/photo-1629280301895-a098bd9c4a67",
      highlights: ["Provincial Licensing", "CVMA Resources", "Rural Opportunities"],
      visaInfo: {
        foreignGrads: "Work visa through Federal Skilled Worker Program or Provincial Nominee Program",
        educationReqs: "Educational Credential Assessment (ECA) + NEB exams (BCSE + NAVLE)",
        additionalReqs: "Provincial licensing + English/French proficiency"
      }
    }
  ];

  const categories = [
    {
      title: "Post-graduate Training Programs",
      icon: "🎓",
      image: "https://unsplash.com/photos/g1Kr4Ozfoac/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzUyMDc5NTg4fA&force=true&w=2400",
      description: "Comprehensive post-graduate training programs for new veterinary graduates",
      id: "training",
      route: "/training-programs"
    },
    {
      title: "Internships & Residencies",
      icon: "🏥",
      image: "https://images.unsplash.com/photo-1596058939740-516d0d71f3d4",
      description: "Specialised internship and residency opportunities through MATCH and European programs",
      id: "internships",
      route: "/internships-residencies"
    },
    {
      title: "Postgraduate Certificates",
      icon: "📜",
      image: "https://images.pexels.com/photos/8325952/pexels-photo-8325952.jpeg",
      description: "Advanced certificates and continuing education programs including CertAVP",
      id: "certificates",
      route: "/postgraduate-certificates"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">VetCareerHub</h1>
                <p className="text-sm text-gray-600">Your Veterinary Career Compass</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => setActiveTab("overview")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === "overview" 
                    ? "bg-blue-100 text-blue-700" 
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Overview
              </button>
              <button 
                onClick={() => setActiveTab("countries")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === "countries" 
                    ? "bg-blue-100 text-blue-700" 
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Countries
              </button>
              <button 
                onClick={() => setActiveTab("visa")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === "visa" 
                    ? "bg-blue-100 text-blue-700" 
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Visa & Licensing
              </button>
              <button 
                onClick={() => setActiveTab("programs")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === "programs" 
                    ? "bg-blue-100 text-blue-700" 
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Programs
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="relative bg-cover bg-center py-24 px-4 sm:px-6 lg:px-8"
          style={{
            backgroundImage: `url(https://images.pexels.com/photos/8532850/pexels-photo-8532850.jpeg)`,
            backgroundBlendMode: 'overlay'
          }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Your Veterinary Career
              <span className="block text-blue-300">Starts Here</span>
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Comprehensive guidance for veterinary graduates with less than 5 years experience. 
              Discover training programs, licensing information, and career opportunities across the UK, USA, and Canada.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className={`relative transition-all duration-300 ${isSearchFocused ? 'transform scale-105' : ''}`}>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search programs, licenses, or opportunities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className="w-full pl-10 pr-4 py-4 text-gray-900 placeholder-gray-500 rounded-xl border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-2xl text-lg"
                />
              </div>
              <div className="flex justify-center mt-4 space-x-4">
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="px-4 py-2 bg-white bg-opacity-20 text-white rounded-lg border border-white border-opacity-30 focus:ring-2 focus:ring-blue-300 focus:outline-none backdrop-blur-sm"
                >
                  <option value="">All Countries</option>
                  <option value="UK">United Kingdom</option>
                  <option value="USA">United States</option>
                  <option value="Canada">Canada</option>
                </select>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 bg-white bg-opacity-20 text-white rounded-lg border border-white border-opacity-30 focus:ring-2 focus:ring-blue-300 focus:outline-none backdrop-blur-sm"
                >
                  <option value="">All Categories</option>
                  <option value="visa">Visa & Immigration</option>
                  <option value="licensing">Licensing</option>
                  <option value="internship">Internships</option>
                  <option value="certificate">Certificates</option>
                  <option value="development">Development</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Results */}
      {searchTerm && (
        <section className="py-12 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Search Results ({filteredPrograms.length} found)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPrograms.map((program, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {program.country}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {program.category}
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{program.title}</h4>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <a
                    href={program.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Learn More
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-16">
              
              {/* Categories Section */}
              <section>
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                  Explore Career Opportunities
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {categories.map((category, index) => (
                    <div key={index} className="group cursor-pointer" onClick={() => navigate(category.route)}>
                      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
                          <img 
                            src={category.image} 
                            alt={category.title}
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                          />
                          <div className="absolute inset-0 bg-blue-900 bg-opacity-40"></div>
                          <div className="absolute top-4 right-4 text-4xl bg-white bg-opacity-20 rounded-full p-3 backdrop-blur-sm">
                            {category.icon}
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.title}</h3>
                          <p className="text-gray-600 mb-4">{category.description}</p>
                          <div className="flex items-center text-blue-600 font-medium">
                            <span>Click to explore</span>
                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Quick Stats */}
              <section className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold mb-2">150+</div>
                    <div className="text-blue-200">Training Programs</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">3</div>
                    <div className="text-blue-200">Countries Covered</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">50+</div>
                    <div className="text-blue-200">Internship Opportunities</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">25+</div>
                    <div className="text-blue-200">Certificate Programs</div>
                  </div>
                </div>
              </section>

              {/* Key Resources */}
              <section>
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                  Essential Resources
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">🇺🇸 United States</h3>
                    <ul className="space-y-3">
                      <li><a href="https://www.aavsb.org/navle/" className="text-blue-600 hover:text-blue-800">NAVLE Examination</a></li>
                      <li><a href="https://www.virmp.org/" className="text-blue-600 hover:text-blue-800">MATCH Program</a></li>
                      <li><a href="https://www.avma.org/education/ecfvg" className="text-blue-600 hover:text-blue-800">ECFVG Certification</a></li>
                      <li><a href="https://www.avma.org/education/foreign/information-foreign-veterinary-graduates-working-veterinarian-us" className="text-blue-600 hover:text-blue-800">Foreign Graduate Guide</a></li>
                      <li><a href="https://www.avma.org/" className="text-blue-600 hover:text-blue-800">AVMA Resources</a></li>
                    </ul>
                  </div>
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">🇬🇧 United Kingdom</h3>
                    <ul className="space-y-3">
                      <li><a href="https://www.rcvs.org.uk/" className="text-blue-600 hover:text-blue-800">RCVS Registration</a></li>
                      <li><a href="https://www.rcvs.org.uk/lifelong-learning/pdp/" className="text-blue-600 hover:text-blue-800">RCVS PDP</a></li>
                      <li><a href="https://www.gov.uk/skilled-worker-visa" className="text-blue-600 hover:text-blue-800">Skilled Worker Visa</a></li>
                      <li><a href="https://www.rvc.ac.uk/" className="text-blue-600 hover:text-blue-800">RVC CertAVP</a></li>
                      <li><a href="https://www.bsava.com/" className="text-blue-600 hover:text-blue-800">BSAVA Courses</a></li>
                    </ul>
                  </div>
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">🇨🇦 Canada</h3>
                    <ul className="space-y-3">
                      <li><a href="https://www.canadianveterinarians.net/" className="text-blue-600 hover:text-blue-800">CVMA Resources</a></li>
                      <li><a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/federal-skilled-workers.html" className="text-blue-600 hover:text-blue-800">Federal Skilled Worker</a></li>
                      <li><a href="https://www.cvbc.ca/" className="text-blue-600 hover:text-blue-800">BC Veterinary College</a></li>
                      <li><a href="https://www.ovc.uoguelph.ca/" className="text-blue-600 hover:text-blue-800">Ontario Veterinary College</a></li>
                      <li><a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/permit.html" className="text-blue-600 hover:text-blue-800">Work Permit Info</a></li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          )}

          {/* Countries Tab */}
          {activeTab === "countries" && (
            <div className="space-y-12">
              <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                Choose Your Destination
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {countries.map((country, index) => (
                  <div key={index} className="group">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="h-64 relative overflow-hidden">
                        <img 
                          src={country.image} 
                          alt={country.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <h3 className="text-2xl font-bold">{country.name}</h3>
                        </div>
                      </div>
                      <div className="p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Opportunities</h4>
                        <ul className="space-y-2 mb-6">
                          {country.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-center text-gray-700">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                        
                        <div className="border-t pt-4">
                          <h5 className="font-semibold text-gray-900 mb-3">Visa & Licensing Info</h5>
                          <div className="space-y-2 text-sm text-gray-600">
                            {country.code === "UK" && (
                              <>
                                <p><strong>EU Citizens:</strong> {country.visaInfo.euCitizens}</p>
                                <p><strong>Non-EU Citizens:</strong> {country.visaInfo.nonEuCitizens}</p>
                                <p><strong>Additional:</strong> {country.visaInfo.additionalReqs}</p>
                              </>
                            )}
                            {country.code === "USA" && (
                              <>
                                <p><strong>Foreign Graduates:</strong> {country.visaInfo.foreignGrads}</p>
                                <p><strong>Education:</strong> {country.visaInfo.educationReqs}</p>
                                <p><strong>Licensing:</strong> {country.visaInfo.additionalReqs}</p>
                              </>
                            )}
                            {country.code === "Canada" && (
                              <>
                                <p><strong>Foreign Graduates:</strong> {country.visaInfo.foreignGrads}</p>
                                <p><strong>Education:</strong> {country.visaInfo.educationReqs}</p>
                                <p><strong>Additional:</strong> {country.visaInfo.additionalReqs}</p>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Detailed Visa Information Section */}
              <section className="bg-gray-50 rounded-2xl p-8 mt-12">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                  Detailed Visa & Licensing Requirements
                </h2>
                
                <div className="space-y-8">
                  {/* USA Section */}
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <h3 className="text-2xl font-bold text-blue-600 mb-4">🇺🇸 United States</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Visa Requirements</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Non-U.S. citizens need appropriate work visa</li>
                          <li>• Contact U.S. Department of State for visa categories</li>
                          <li>• AVMA does not influence visa issuance</li>
                          <li>• Secure employment separately from licensing</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Educational Requirements</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• <strong>ECFVG Certification:</strong> For non-AVMA accredited graduates</li>
                          <li>• <strong>PAVE Program:</strong> Alternative equivalency pathway</li>
                          <li>• English language proficiency assessment</li>
                          <li>• Clinical skills assessment required</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Licensing Process</h4>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <ol className="space-y-2 text-gray-700">
                          <li>1. <strong>NAVLE Exam:</strong> Required by all states (360 multiple-choice questions)</li>
                          <li>2. <strong>State-Specific Requirements:</strong> Each state has additional requirements</li>
                          <li>3. <strong>Jurisprudence Exams:</strong> Some states require local law knowledge</li>
                          <li>4. <strong>Contact State Board:</strong> Verify specific requirements for your target state</li>
                        </ol>
                      </div>
                    </div>
                    
                    <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                      <p className="text-sm text-yellow-800">
                        <strong>Important:</strong> State requirements vary significantly. Always check with the specific state veterinary board where you plan to practice.
                      </p>
                    </div>
                  </div>
                  
                  {/* UK Section */}
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <h3 className="text-2xl font-bold text-blue-600 mb-4">🇬🇧 United Kingdom</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Post-Brexit Requirements</h4>
                        <div className="space-y-4">
                          <div className="bg-blue-50 p-3 rounded-lg">
                            <h5 className="font-semibold text-blue-900">EU Citizens</h5>
                            <ul className="text-sm text-gray-700 mt-2">
                              <li>• Skilled Worker Visa required</li>
                              <li>• Job offer from UK sponsor needed</li>
                              <li>• Employer must hold valid sponsor license</li>
                            </ul>
                          </div>
                          
                          <div className="bg-green-50 p-3 rounded-lg">
                            <h5 className="font-semibold text-green-900">Non-EU Citizens</h5>
                            <ul className="text-sm text-gray-700 mt-2">
                              <li>• Skilled Worker Visa required</li>
                              <li>• Job offer from licensed UK sponsor</li>
                              <li>• May need additional assessments</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">RCVS Registration</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Registration with RCVS is mandatory</li>
                          <li>• EU qualifications may be recognized</li>
                          <li>• Non-EU degrees require assessment</li>
                          <li>• English proficiency may be required</li>
                          <li>• Health and safety compliance needed</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>Process:</strong> Secure job offer → Apply for visa → Complete RCVS registration → Undergo health checks
                      </p>
                    </div>
                  </div>
                  
                  {/* Canada Section */}
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <h3 className="text-2xl font-bold text-blue-600 mb-4">🇨🇦 Canada</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Immigration Pathways</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• <strong>Federal Skilled Worker Program</strong></li>
                          <li>• <strong>Provincial Nominee Program</strong></li>
                          <li>• Labour Market Impact Assessment (LMIA) may be required</li>
                          <li>• English or French proficiency required</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Education & Licensing</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• <strong>Educational Credential Assessment (ECA)</strong></li>
                          <li>• <strong>NEB Exams:</strong> BCSE + NAVLE</li>
                          <li>• Provincial licensing required</li>
                          <li>• May need internships/residencies</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Step-by-Step Process</h4>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <ol className="space-y-2 text-gray-700">
                          <li>1. <strong>ECA:</strong> Assess degree equivalency through CVMA</li>
                          <li>2. <strong>NEB Exams:</strong> Pass Basic and Clinical Sciences + NAVLE</li>
                          <li>3. <strong>Provincial License:</strong> Apply in target province</li>
                          <li>4. <strong>Work Visa:</strong> Apply through appropriate immigration stream</li>
                        </ol>
                      </div>
                    </div>
                    
                    <div className="mt-4 p-4 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-800">
                        <strong>Tip:</strong> Contact both CVMA and provincial regulatory bodies for most current requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}

          {/* Visa & Licensing Tab */}
          {activeTab === "visa" && (
            <div className="space-y-12">
              <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                Visa & Licensing Requirements
              </h2>
              
              <div className="space-y-8">
                {/* USA Section */}
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-3xl font-bold text-blue-600 mb-6 flex items-center">
                    🇺🇸 United States
                  </h3>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Visa Requirements</h4>
                      <div className="bg-blue-50 p-6 rounded-lg">
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>Non-U.S. citizens need appropriate work visa</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>Contact U.S. Department of State for visa categories</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>AVMA does not influence visa issuance</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>Secure employment separately from licensing</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Educational Equivalency</h4>
                      <div className="space-y-4">
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-green-900 mb-2">ECFVG Certification</h5>
                          <p className="text-sm text-gray-700">For graduates from non-AVMA accredited schools</p>
                          <ul className="text-sm text-gray-600 mt-2 space-y-1">
                            <li>• English language proficiency</li>
                            <li>• Basic & clinical sciences exam</li>
                            <li>• Clinical skills assessment</li>
                          </ul>
                        </div>
                        
                        <div className="bg-yellow-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-yellow-900 mb-2">PAVE Program</h5>
                          <p className="text-sm text-gray-700">Alternative equivalency pathway by AAVSB</p>
                          <p className="text-sm text-yellow-700 mt-2">Verify state acceptance before choosing</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">State Licensing Process</h4>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-3">Step 1: NAVLE Exam</h5>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Required by all 50 states</li>
                            <li>• 360 multiple-choice questions</li>
                            <li>• Covers all veterinary medicine aspects</li>
                            <li>• Offered during specific testing windows</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-3">Step 2: State Requirements</h5>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Each state has unique requirements</li>
                            <li>• Some require jurisprudence exams</li>
                            <li>• Additional fees and documentation</li>
                            <li>• Contact specific state board</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
                    <p className="text-sm text-red-800">
                      <strong>⚠️ Important:</strong> State requirements vary significantly. Always verify with the specific state veterinary board where you plan to practice.
                    </p>
                  </div>
                </div>
                
                {/* UK Section */}
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-3xl font-bold text-blue-600 mb-6 flex items-center">
                    🇬🇧 United Kingdom
                  </h3>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Post-Brexit Visa Requirements</h4>
                      
                      <div className="space-y-4">
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                          <h5 className="font-semibold text-blue-900 mb-2">EU Citizens</h5>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Skilled Worker Visa required</li>
                            <li>• Job offer from UK sponsor needed</li>
                            <li>• Employer must hold valid sponsor license</li>
                            <li>• No longer automatic right to work</li>
                          </ul>
                        </div>
                        
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <h5 className="font-semibold text-green-900 mb-2">Non-EU Citizens</h5>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Skilled Worker Visa required</li>
                            <li>• Job offer from licensed UK sponsor</li>
                            <li>• May need additional assessments</li>
                            <li>• Immigration skills charge applies</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">RCVS Registration</h4>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>Registration with RCVS is mandatory</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>EU qualifications may be recognized</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>Non-EU degrees require assessment</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>English proficiency may be required</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>Health and safety compliance needed</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-sm text-blue-800">
                      <strong>✅ Process:</strong> Secure job offer → Apply for visa → Complete RCVS registration → Undergo health checks
                    </p>
                  </div>
                </div>
                
                {/* Canada Section */}
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-3xl font-bold text-blue-600 mb-6 flex items-center">
                    🇨🇦 Canada
                  </h3>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Immigration Pathways</h4>
                      <div className="space-y-4">
                        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                          <h5 className="font-semibold text-red-900 mb-2">Federal Skilled Worker</h5>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Points-based system</li>
                            <li>• Language proficiency required</li>
                            <li>• Educational credentials assessed</li>
                            <li>• Work experience evaluated</li>
                          </ul>
                        </div>
                        
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                          <h5 className="font-semibold text-blue-900 mb-2">Provincial Nominee Program</h5>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Province-specific requirements</li>
                            <li>• Job offer may be required</li>
                            <li>• Faster processing possible</li>
                            <li>• Must intend to live in province</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Education & Licensing</h4>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span><strong>ECA:</strong> Educational Credential Assessment through CVMA</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span><strong>NEB Exams:</strong> BCSE + NAVLE required</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span><strong>Provincial License:</strong> Each province has requirements</span>
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span><strong>Language:</strong> English or French proficiency</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Step-by-Step Process</h4>
                    <div className="bg-green-50 p-6 rounded-lg">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <ol className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                              <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">1</span>
                              <span><strong>ECA:</strong> Assess degree equivalency</span>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">2</span>
                              <span><strong>NEB:</strong> Pass required exams</span>
                            </li>
                          </ol>
                        </div>
                        
                        <div>
                          <ol className="space-y-2 text-gray-700" start="3">
                            <li className="flex items-start">
                              <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">3</span>
                              <span><strong>Provincial:</strong> Apply for license</span>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">4</span>
                              <span><strong>Immigration:</strong> Apply for visa</span>
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-sm text-green-800">
                      <strong>💡 Tip:</strong> Contact both CVMA and provincial regulatory bodies for the most current requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Programs Tab */}
          {activeTab === "programs" && (
            <div className="space-y-12">
              <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                All Programs & Opportunities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {programs.map((program, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {program.country}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {program.category}
                      </span>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">{program.title}</h4>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    <a
                      href={program.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Learn More
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">V</span>
                </div>
                <h3 className="text-xl font-bold">VetCareerHub</h3>
              </div>
              <p className="text-gray-400">
                Your comprehensive guide to veterinary career opportunities across the UK, USA, and Canada.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Training Programs</a></li>
                <li><a href="#" className="hover:text-white">Licensing Info</a></li>
                <li><a href="#" className="hover:text-white">Internships</a></li>
                <li><a href="#" className="hover:text-white">Certificates</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Countries</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">United Kingdom</a></li>
                <li><a href="#" className="hover:text-white">United States</a></li>
                <li><a href="#" className="hover:text-white">Canada</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://www.aavsb.org/navle/" className="hover:text-white">NAVLE</a></li>
                <li><a href="https://www.virmp.org/" className="hover:text-white">MATCH</a></li>
                <li><a href="https://www.rcvs.org.uk/" className="hover:text-white">RCVS</a></li>
                <li><a href="https://www.rcvs.org.uk/lifelong-learning/pdp/" className="hover:text-white">RCVS PDP</a></li>
                <li><a href="https://www.avma.org/education/foreign/information-foreign-veterinary-graduates-working-veterinarian-us" className="hover:text-white">AVMA Foreign Guide</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 VetCareerHub. Empowering veterinary careers worldwide.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VeterinaryCareerHub />} />
          <Route path="/training-programs" element={<TrainingPrograms />} />
          <Route path="/internships-residencies" element={<InternshipsResidencies />} />
          <Route path="/postgraduate-certificates" element={<PostgraduateCertificates />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;