import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/about-me";
import Resume from "./pages/resume";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
import Navbar from "./components/Navbar";
import Footer from  "./components/footer"
import "./App.css"; // Make sure your preloader styles are in here

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (or remove when data is fetched)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading && (
        <div className="preloader">
          <div className="preloader-animation">
            <div className="preloader-spinner"></div>
          </div>
        </div>
      )}
      {!loading && (
        <>
         <div className="main-wrapper">
         <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about-me" element={<About />} />
            <Route path="resume" element={<Resume />} />
            <Route path="contact" element={<Contact />} />
            <Route path="portfolio" element={<Portfolio />} />
          </Routes>
          <Footer />
         </div>
        </>
      )}
    </Router>
  );
};

export default App;
