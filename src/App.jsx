import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import AddBooks from './pages/AddBooks';
import About from './pages/About';
import Contact from './pages/Contact';
import RegistrationForm from "./Components/RegistrationForm";
import Login from "./pages/Login";
import SavedBooks from "./pages/SavedBooks";
import SearchBooks from "./pages/SearchBooks";
import ProtectedRoute from "./Components/ProtectedRoute";
import GuestRoute from "./Components/GuestRoute";
import Signup from "./pages/Signup";


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          {/* Protected Routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/AddBooks"
            element={
              <ProtectedRoute>
                <AddBooks />
              </ProtectedRoute>
            }
          />
          <Route
            path="/saved-books"
            element={
              <ProtectedRoute>
                <SavedBooks />
              </ProtectedRoute>
            }
          />
          <Route
            path="/search-books"
            element={
              <ProtectedRoute>
                <SearchBooks />
              </ProtectedRoute>
            }
          />

          {/* Public Routes */}
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/register" element={<RegistrationForm />} />

          {/* Guest Routes */}
          <Route path="/login" element={<GuestRoute><Login /></GuestRoute>} />
          <Route path="/signup" element={<GuestRoute><Signup /></GuestRoute>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
