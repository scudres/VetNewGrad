import React from "react";

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">V</span>
            </div>
            <h3 className="text-xl font-bold">VetNextStep</h3>
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
            <li><a href="https://www.avma.org/education/foreign/information-foreign-veterinary-graduates-working-veterinarian-us" className="hover:text-white">AVMA Foreign Guide</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2025 VetNextStep. Empowering veterinary careers worldwide.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
