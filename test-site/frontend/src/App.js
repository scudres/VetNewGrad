import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TrainingPrograms from "./components/TrainingPrograms";
import InternshipsResidencies from "./components/InternshipsResidencies";
import PostgraduateCertificates from "./components/PostgraduateCertificates";
import VeterinaryCareerHub from "./components/VeterinaryCareerHub";
import CPDConferences from "./components/CPDConferences";
import JobOpportunities from "./components/jobopportunities";
import ScrollToTop from "./components/ScrollToTop";


import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<VeterinaryCareerHub />} />
          <Route path="/training-programs" element={<TrainingPrograms />} />
          <Route path="/internships-residencies" element={<InternshipsResidencies />} />
          <Route path="/postgraduate-certificates" element={<PostgraduateCertificates />} />
          <Route path="/cpd-conferences" element={<CPDConferences />} />
          <Route path="/job-opportunities" element={<JobOpportunities />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
