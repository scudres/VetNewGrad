import React from "react";

const HeroSection = ({
  searchTerm,
  setSearchTerm,
  selectedCountry,
  setSelectedCountry,
  selectedCategory,
  setSelectedCategory,
  isSearchFocused,
  setIsSearchFocused,
}) => (
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
          Your Veterinary Career Guide
          <span className="block text-blue-300">Starts Here</span>
        </h2>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
          Comprehensive guidance for veterinary graduates with less than 5 years experience.
          Discover training programs, licensing information, and career opportunities across the UK, USA, and Canada.
        </p>
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
);

export default HeroSection;
