import { Route, Router, Routes, useLocation } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ServicePage from "./pages/ServicePage";
import BlogPage from "./pages/BlogPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SubscribeBox from "./components/SubscribeBox";
import ScrollToTop from "./components/ScrollToTop";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";

function App() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Simulate loading
    }, 3000); // 3 seconds
  }, []);

  // Check if there's a saved theme in localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  // Apply dark mode class to the <html> tag and save preference to localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="AppWrapper dark:bg-primary-dark">
          <ScrollToTop />
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          {location.pathname !== "/contact" && <SubscribeBox />}
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
