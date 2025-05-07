import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/Yosephicon.png";
import packageJson from "../../package.json";
import ThemeToggle from "./ThemeToggle";

const BASE_URL = packageJson.apiUrl;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [categories, setCategories] = useState([]);
  const [isNavOpen, setIsNavOpen] = useState(false); // 👈 custom toggle state

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${BASE_URL}/category/list`);
        const data = await response.json();
        if (data.success) {
          setCategories(data.data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle function
  const toggleNavbar = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <nav
      className={`navbar m-navbar navbar-expand-lg navbar-light bg-light ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} className="img-fluid h-logo" alt="logo" />
        </Link>

        <button
          className="navbar-toggler edit-navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto ul-right">
            <li className="nav-item">
              <Link className="nav-link" to="/resume" onClick={() => setIsNavOpen(false)}>
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio" onClick={() => setIsNavOpen(false)}>
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={() => setIsNavOpen(false)}>
                Contact
              </Link>
            </li>
            <li className="nav-item d-flex align-items-center">
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
