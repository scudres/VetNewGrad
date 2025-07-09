import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const VeterinaryCareerHub = () => {
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
      highlights: ["RCVS Registration", "CertAVP Programs", "NHS Opportunities"],
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
      title: "Training Programs",
      icon: "🎓",
      image: "https://images.pexels.com/photos/7663144/pexels-photo-7663144.jpeg",
      description: "Comprehensive training programs for new veterinary graduates"
    },
    {
      title: "Internships & Residencies",
      icon: "🏥",
      image: "https://images.unsplash.com/photo-1596058939740-516d0d71f3d4",
      description: "Specialized internship and residency opportunities through MATCH"
    },
    {
      title: "Postgraduate Certificates",
      icon: "📜",
      image: "https://images.pexels.com/photos/8325952/pexels-photo-8325952.jpeg",
      description: "Advanced certificates and continuing education programs"
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
                    <div key={index} className="group">
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
                          <p className="text-gray-600">{category.description}</p>
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;