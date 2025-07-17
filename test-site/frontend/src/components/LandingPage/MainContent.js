import React from "react";
import CategoryTile from "./CategoryTile";
import CountryCard from "./CountryCard";
import ProgramCard from "./ProgramCard";

const MainContent = ({
  activeTab,
  categories,
  countries,
  filteredPrograms,
  navigate,
}) => (
  <main className="py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {activeTab === "overview" && (
        <div className="space-y-16">

          {/* Categories Section */}
          <section>
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              Explore Career Opportunities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {categories.map((category, index) => (
                <CategoryTile key={index} category={category} />
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
            {/* ... You can split resource cards into another component if you wish ... */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* USA */}
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
              {/* UK */}
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
              {/* Canada */}
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

      {activeTab === "countries" && (
        <div className="space-y-12">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Choose Your Destination
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {countries.map((country, index) => (
              <CountryCard key={index} country={country} />
            ))}
          </div>
          {/* ...Visa/licensing sections omitted for brevity; you can break those into their own files if needed... */}
        </div>
      )}

      {activeTab === "programs" && (
        <div className="py-12 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Programs ({filteredPrograms.length} found)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPrograms.map((program, index) => (
                <ProgramCard key={index} program={program} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  </main>
);

export default MainContent;
