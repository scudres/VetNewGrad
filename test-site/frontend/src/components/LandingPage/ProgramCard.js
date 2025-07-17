import React from "react";

const ProgramCard = ({ program }) => (
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
);

export default ProgramCard;
