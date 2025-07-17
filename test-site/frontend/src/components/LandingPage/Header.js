import React from "react";

const Header = ({ activeTab, setActiveTab }) => (
  <header className="bg-white shadow-lg sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-xl">V</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">VetNextStep</h1>
            <p className="text-sm text-gray-600">Your Veterinary Career Guide</p>
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
);

export default Header;
