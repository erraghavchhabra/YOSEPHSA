import React, { useState, useEffect } from "react";
import logo from "../assets/img/Yosephicon.png";
import packageJson from '../../package.json';
import { Link } from "react-router-dom";
const BASE_URL = packageJson.apiUrl;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [categories, setCategories] = useState([]);

  // Fetch categories from the API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/category/list`
        );
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

  // Handle scroll position
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar m-navbar navbar-expand-lg navbar-light bg-light ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo}  className="img-fluid h-logo" alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto ul-right">
            <li className="nav-item active">
              <a className="nav-link" href="resume">
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact">
                Contact
              </a>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
