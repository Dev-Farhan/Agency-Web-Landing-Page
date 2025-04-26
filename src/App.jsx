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

function App() {
  const location = useLocation();
  return (
    <div className="AppWrapper">
      <ScrollToTop />
      <Navbar />
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
  );
}

export default App;
