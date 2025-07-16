import React, { useState } from "react";
import { Link } from "react-router-dom";

// --- Conference Data ---
const conferences = [
  { title: "BVA Live", date: "Jun 12–13, 2025", country: "UK", location: "UK", url: "https://bvalive.vetshow.com/", speciality: "General" },
  { title: "BSAVA Alba Scotland", date: "Sep 26–27, 2025", country: "UK", location: "UK", url: "https://www.bsavaalba.com/", speciality: "General" },
  { title: "London Vet Show", date: "Nov 20–21, 2025", country: "UK", location: "UK", url: "https://london.vetshow.com/", speciality: "General" },
  { title: "International Cat Care", date: "Jun 27–29, 2025", country: "UK", location: "UK", url: "https://icatcare.org/events/world-feline-congress-2025?gad_source=1&gad_campaignid=20892467661&gbraid=0AAAAABNrI4UxGbivld1Nu4RArehJPjVp4&gclid=Cj0KCQjwm93DBhD_ARIsADR_DjHggdbCpevicX_O-TiRFk2_Ey8IMgYLpwMDFLMSqQWUMZjqiIbzU90aAqNZEALw_wcB", speciality: "Feline" },
  { title: "EBVS Congress", date: "Apr 2–4, 2025", country: "Europe", location: "Europe", url: "https://ebvs.eu/news-events/ebvs-congress", speciality: "General" },
  { title: "WSAVA Congress", date: "Sep 25–27, 2025", country: "Global", location: "Global", url: "https://wsava-congress.org/", speciality: "General" },
  { title: "VMX", date: "Jan 25–29, 2025", country: "North America", location: "North America", url: "https://navc.com/vmx/", speciality: "General" },
  { title: "ACVIM Forum 2025", date: "Jun 18–21, 2025", country: "North America", location: "North America", url: "https://www.acvim.org/education/acvim-forum", speciality: "General" },
  { title: "ACVIM Forum 2026", date: "Jun 10–13, 2026", country: "North America", location: "North America", url: "https://www.acvim.org/education/acvim-forum", speciality: "General" },
  { title: "Ontario Veterinary Medical Association Conference", date: "Jan 30–Feb 1, 2025", country: "North America", location: "Canada", url: "https://www.ovma.org/events/ovma-conference-and-tradeshow", speciality: "General" },
  { title: "Mid West Veterinary Conference", date: "Feb 20–22, 2025", country: "North America", location: "North America", url: "https://www.mvcinfo.org/", speciality: "General" },
  { title: "WVC Annual Conference", date: "Mar 2–5, 2025", country: "North America", location: "North America", url: "https://www.viticusgroup.org/", speciality: "General" },
  { title: "35th Annual ECVIM‑CA Congress", date: "18–20 Sep 2025", country: "Europe", location: "Maastricht", url: "https://www.ecvimcongress.org/", speciality: "ECVIM-CA" },
  { title: "Future ECVIM‑CA", date: "10–12 Sep 2026", country: "Europe", location: "Berlin", url: "https://www.ecvimcongress.org/", speciality: "ECVIM-CA" },
  { title: "ESVD/ECVD Dermatology", date: "11–13 Sep 2025", country: "Europe", location: "Bilbao, Spain", url: "https://esvd-ecvdcongress.com/", speciality: "Dermatology" },
  { title: "ECVIM‑CA", date: "18–20 Sep 2025; 10–12 Sep 2026", country: "Europe", location: "Maastricht; Berlin", url: "https://www.ecvimcongress.org/", speciality: "ECVIM-CA" },
  { title: "ESVN‑ECVN", date: "19–20 Sep 2025", country: "UK", location: "Bristol, UK", url: "https://ecvnbristol2025.org/", speciality: "Neurology" },
  { title: "EVDI/ECVDI", date: "17–20 Sep 2025", country: "Europe", location: "Sitges, Spain", url: "https://evdi-congress.eu/", speciality: "EVDI" },
  { title: "ECVS", date: "3–5 Jul 2025; 9–11 Jul 2026", country: "Europe", location: "Antwerp; Liverpool", url: "https://www.ecvs.org/", speciality: "ECVS" },
  { title: "ECVO Ophthalmology", date: "22–25 May 2025", country: "UK", location: "Edinburgh, UK", url: "https://www.ecvoconference.org/2025", speciality: "Ophthalmology" },
  { title: "European School for Advanced Veterinary Studies Courses", date: "Various dates", country: "Europe", location: "Various EU cities", url: "https://www.esavs.org/", speciality: "ESAVS (Various)" }
];

// --- Month helper: always returns full month name in English for any format ---
const monthToName = (monthRaw) => {
  if (!monthRaw) return "";
  const months = {
    jan: "January", feb: "February", mar: "March", apr: "April",
    may: "May", jun: "June", jul: "July", aug: "August",
    sep: "September", sept: "September", oct: "October",
    nov: "November", dec: "December",
    "1": "January", "01": "January",
    "2": "February", "02": "February",
    "3": "March", "03": "March",
    "4": "April", "04": "April",
    "5": "May", "05": "May",
    "6": "June", "06": "June",
    "7": "July", "07": "July",
    "8": "August", "08": "August",
    "9": "September", "09": "September",
    "10": "October",
    "11": "November",
    "12": "December",
  };
  const cleaned = monthRaw.trim().toLowerCase().replace(/\./g, "");
  return months[cleaned] || monthRaw;
};

// --- Filter extraction (months always as words!) ---
const getUnique = (key) => {
  let all = conferences.map((c) => {
    if (key === "month") {
      const matches = Array.from(
        c.date.matchAll(/\b([A-Za-z]{3,9}|[0-9]{1,2})\b/g)
      );
      return matches
        .map((m) => monthToName(m[1]))
        .filter((m) =>
          [
            "January","February","March","April","May","June","July","August","September","October","November","December"
          ].includes(m)
        );
    } else {
      return c[key];
    }
  });
  if (key === "month") all = all.flat();
  return Array.from(new Set(all)).filter(Boolean).sort(
    (a, b) =>
      [
        "January","February","March","April","May","June","July","August","September","October","November","December"
      ].indexOf(a) -
      [
        "January","February","March","April","May","June","July","August","September","October","November","December"
      ].indexOf(b)
  );
};

const specialities = ["All Specialities", ...getUnique("speciality")];
const months = ["All Months", ...getUnique("month")];
const countries = ["All Countries", ...getUnique("country")];

const CPDConferences = () => {
  const [selectedSpeciality, setSelectedSpeciality] = useState("All Specialities");
  const [selectedMonth, setSelectedMonth] = useState("All Months");
  const [selectedCountry, setSelectedCountry] = useState("All Countries");

  // --- Filter logic (matches only by word months) ---
  const filteredConfs = conferences.filter(conf => {
    const specOK = selectedSpeciality === "All Specialities" || conf.speciality === selectedSpeciality;
    const countryOK = selectedCountry === "All Countries" || conf.country === selectedCountry;
    const monthsList = Array.from(conf.date.matchAll(/\b([A-Za-z]{3,9}|[0-9]{1,2})\b/g))
      .map((m) => monthToName(m[1]))
      .filter((m) =>
        [
          "January","February","March","April","May","June","July","August","September","October","November","December"
        ].includes(m)
      );
    const monthOK =
      selectedMonth === "All Months" ||
      monthsList.includes(selectedMonth);
    return specOK && countryOK && monthOK;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">VetNextStep</h1>
                <p className="text-sm text-gray-600">Your Veterinary Career Guide</p>
              </div>
            </Link>
            <Link
              to="/"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200 flex items-center"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Veterinary CPD Conferences & Courses</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Upcoming conferences and international CPD events for all veterinary professionals.<br />
              <span className="text-blue-600 font-medium">Filter by speciality, month, or country.</span>
            </p>
          </div>
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-10 justify-center">
            <select
              value={selectedSpeciality}
              onChange={e => setSelectedSpeciality(e.target.value)}
              className="px-4 py-2 rounded-lg border border-blue-300 focus:ring-2 focus:ring-blue-500"
            >
              {specialities.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <select
              value={selectedMonth}
              onChange={e => setSelectedMonth(e.target.value)}
              className="px-4 py-2 rounded-lg border border-blue-300 focus:ring-2 focus:ring-blue-500"
            >
              {months.map(m => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
            <select
              value={selectedCountry}
              onChange={e => setSelectedCountry(e.target.value)}
              className="px-4 py-2 rounded-lg border border-blue-300 focus:ring-2 focus:ring-blue-500"
            >
              {countries.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          {/* Conferences List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredConfs.map((conf, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-blue-900">{conf.title}</h3>
                  <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {conf.country}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-2 text-gray-500 text-sm">
                  <span>
                    <strong>Date:</strong> {conf.date}
                  </span>
                  {conf.location && (
                    <span className="pl-2">
                      <strong>Location:</strong> {conf.location}
                    </span>
                  )}
                </div>
                <span className="inline-block bg-gray-100 text-gray-700 rounded-full px-3 py-1 mb-4 text-xs font-medium">
                  {conf.speciality}
                </span>
                <a
                  href={conf.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 mt-auto"
                >
                  Conference Website
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
          {!filteredConfs.length && (
            <div className="text-center text-gray-500 py-12">
              No conferences found for this filter.
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default CPDConferences;
