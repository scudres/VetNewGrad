import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const VeterinaryCareerHub = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedCountry, setSelectedCountry] = useState("");
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
      title: "Canadian Veterinary Medical Association",
      country: "Canada",
      category: "licensing",
      description: "Resources for veterinary licensing in Canada",
      url: "https://www.canadianveterinarians.net/"
    }
  ];

  const filteredPrograms = programs.filter(program => {
    const matchesSearch = program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = selectedCountry === "" || program.country === selectedCountry;
    return matchesSearch && matchesCountry;
  });

  const countries = [
    {
      name: "United Kingdom",
      code: "UK",
      image: "https://images.unsplash.com/photo-1659019479789-4dd5dbdc2cb1",
      highlights: ["RCVS Registration", "CertAVP Programs", "NHS Opportunities"]
    },
    {
      name: "United States",
      code: "USA",
      image: "https://images.pexels.com/photos/6075005/pexels-photo-6075005.jpeg",
      highlights: ["NAVLE Examination", "MATCH Program", "State Licensing"]
    },
    {
      name: "Canada",
      code: "Canada",
      image: "https://images.unsplash.com/photo-1629280301895-a098bd9c4a67",
      highlights: ["Provincial Licensing", "CVMA Resources", "Rural Opportunities"]
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">🇺🇸 United States</h3>
                    <ul className="space-y-3">
                      <li><a href="https://www.aavsb.org/navle/" className="text-blue-600 hover:text-blue-800">NAVLE Examination</a></li>
                      <li><a href="https://www.virmp.org/" className="text-blue-600 hover:text-blue-800">MATCH Program</a></li>
                      <li><a href="https://www.avma.org/" className="text-blue-600 hover:text-blue-800">AVMA Resources</a></li>
                    </ul>
                  </div>
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">🇬🇧 United Kingdom</h3>
                    <ul className="space-y-3">
                      <li><a href="https://www.rcvs.org.uk/" className="text-blue-600 hover:text-blue-800">RCVS Registration</a></li>
                      <li><a href="https://www.rcvs.org.uk/lifelong-learning/pdp/" className="text-blue-600 hover:text-blue-800">RCVS PDP</a></li>
                      <li><a href="https://www.rvc.ac.uk/" className="text-blue-600 hover:text-blue-800">RVC CertAVP</a></li>
                      <li><a href="https://www.bsava.com/" className="text-blue-600 hover:text-blue-800">BSAVA Courses</a></li>
                    </ul>
                  </div>
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">🇨🇦 Canada</h3>
                    <ul className="space-y-3">
                      <li><a href="https://www.canadianveterinarians.net/" className="text-blue-600 hover:text-blue-800">CVMA Resources</a></li>
                      <li><a href="https://www.cvbc.ca/" className="text-blue-600 hover:text-blue-800">BC Veterinary College</a></li>
                      <li><a href="https://www.ovc.uoguelph.ca/" className="text-blue-600 hover:text-blue-800">Ontario Veterinary College</a></li>
                    </ul>
                  </div>
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">📚 Additional Resources</h3>
                    <ul className="space-y-3">
                      <li><a href="https://www.liverpool.ac.uk/veterinary-science/" className="text-blue-600 hover:text-blue-800">University of Liverpool</a></li>
                      <li><a href="https://www.worldvet.org/" className="text-blue-600 hover:text-blue-800">World Veterinary Association</a></li>
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
                        <ul className="space-y-2">
                          {country.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-center text-gray-700">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
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