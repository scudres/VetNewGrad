import React from "react";

const SearchBar = ({
  searchTerm,
  setSearchTerm,
  selectedCountry,
  setSelectedCountry,
  selectedCategory,
  setSelectedCategory,
  isSearchFocused,
  setIsSearchFocused,
}) => (
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
);

export default SearchBar;
