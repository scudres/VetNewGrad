import React from "react";

const CountryCard = ({ country }) => (
  <div className="group">
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
);

export default CountryCard;
