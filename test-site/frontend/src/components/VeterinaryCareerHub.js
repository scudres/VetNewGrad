import React, { useState } from "react";
import Header from './LandingPage/Header';
import HeroSection from './LandingPage/HeroSection';
import MainContent from './LandingPage/MainContent';
import Footer from './LandingPage/Footer';


// If your router is set up elsewhere, you may remove this import:
import { useNavigate } from "react-router-dom";

// --- Mock data: Move to a separate file later for best practices ---
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
  },
  {
    title: "CPD and Conferences",
    icon: "🗓️",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    description: "Explore CPD events and veterinary congresses",
    id: "cpd-conferences",
    route: "/cpd-conferences"
  },
  {
    title: "Job Opportunities",
    icon: "💼",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b",
    description: "Find veterinary jobs in the UK, USA, and Canada.",
    id: "job-opportunities",
    route: "/job-opportunities"
  }
];

const VeterinaryCareerHub = () => {
  const navigate = useNavigate(); // Only needed for child props if required
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Filtering logic (as before)
  const filteredPrograms = programs.filter(program => {
    const matchesSearch =
      program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = selectedCountry === "" || program.country === selectedCountry;
    const matchesCategory = selectedCategory === "" || program.category === selectedCategory;
    return matchesSearch && matchesCountry && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <HeroSection
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        isSearchFocused={isSearchFocused}
        setIsSearchFocused={setIsSearchFocused}
      />
      {/* Only show search results if searchTerm is set and the activeTab is NOT "programs" */}
      {searchTerm && activeTab !== "programs" && (
        <section className="py-12 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Search Results ({filteredPrograms.length} found)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPrograms.map((program, index) => (
                // Import ProgramCard in MainContent if you want to keep it DRY
                <React.Fragment key={index}>
                  {/* You could move this to a SearchResults.js component */}
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
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
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>
      )}

      <MainContent
        activeTab={activeTab}
        categories={categories}
        countries={countries}
        filteredPrograms={filteredPrograms}
        navigate={navigate}
      />

      <Footer />
    </div>
  );
};

export default VeterinaryCareerHub;
