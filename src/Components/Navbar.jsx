import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("bg-gray-800", "text-white");
      document.body.classList.remove("bg-gray-100", "text-black");
    } else {
      document.body.classList.add("bg-gray-100", "text-black");
      document.body.classList.remove("bg-gray-800", "text-white");
    }
  }, [darkMode]);

  const toggleMode = () => {
    setDarkMode((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/login");
    // We need to force a re-render or have a global state to update other components
    // For now, a page reload on logout can ensure consistency.
    // A better approach would be using Context API or Redux.
    window.location.reload();
  };

  return (
    <nav
      className={`flex justify-between items-center px-8 py-4 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black shadow-md"
      }`}
    >
      {/* Left side - Logo / Links */}
      <ul className="flex gap-6 text-lg font-semibold">
        <li>
          <Link to="/" className="hover:underline hover:bg-red-200 px-2 py-1 rounded">
            Home
          </Link>
        </li>
        <li>
          <Link to="/AddBooks" className="hover:underline px-2 py-1 rounded">
            AddBooks
          </Link>
        </li>
        {isAuthenticated && (
          <li>
            <Link to="/saved-books" className="hover:underline px-2 py-1 rounded">
              My Books
            </Link>
          </li>
        )}
        {isAuthenticated && (
          <li>
            <Link to="/search-books" className="hover:underline px-2 py-1 rounded">Search Online</Link>
          </li>
        )}
        <li>
          <Link to="/About" className="hover:underline px-2 py-1 rounded">
            About
          </Link>
        </li>
        <li>
          <Link to="/Contact" className="hover:underline px-2 py-1 rounded">
            Contact
          </Link>
        </li>
      </ul>

      {/* Right side - Dark Mode + Auth Buttons */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleMode}
          className="bg-blue-400 hover:bg-blue-500 text-white px-3 py-1 rounded"
        >
          {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
        </button>

        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
          >
            Logout
          </button>
        ) : (
          <>
            <Link
              to="/login"
              className="bg-green-400 hover:bg-green-500 text-white px-3 py-1 rounded"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 rounded"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;