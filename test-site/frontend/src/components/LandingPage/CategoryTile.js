import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryTile = ({ category }) => {
  const navigate = useNavigate();
  return (
    <div className="group cursor-pointer h-full" onClick={() => navigate(category.route)}>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full min-h-[420px]">
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
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.title}</h3>
          <p className="text-gray-600 mb-4 flex-1">{category.description}</p>
          <div className="flex items-center text-blue-600 font-medium">
            <span>Click to explore</span>
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryTile;
