import { useState, useEffect } from "react";


// MUI Icons
import KeyboardDoubleArrowUpOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowUpOutlined";

// ====== Import Components ======
import { Footer } from "./components";
import LandingComponents from "./components/1-landing-page/LandingComponents";

// React Router
import { Route, Routes } from "react-router-dom";

// Import Pages
import PrivacyPolicy from "./pages/privacy-policy/PrivacyPolicy";
import TermsOfService from "./pages/terms-of-service/TermsOfService";
import Disclaimer from "./pages/disclaimer/Disclaimer";
import Support from "./pages/support/Support";
import CookiesPolicy from "./pages/cookies-policy/CookiesPolicy";
// import { useTranslation } from "react-i18next";
import PaymentForm from "./pages/payment-form/PaymentForm";

import { useLanguage } from "./contexts/LanguageContext";

function App() {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Your existing useEffect hooks and other logic...

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Simulate a loading process, e.g., fetching data or waiting for components to mount
    const timer = setTimeout(() => {
      setIsLoading(false); // Step 2: Update loading state after content is ready
    }, 4000); // Simulate a 2-second loading process

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loader_container">
        <span className="loader"></span>
        <div className="loading">
          Loading
          <span className="dot">.</span>
          <span className="dot">.</span>
          <span className="dot">.</span>
        </div>
      </div>
    ); // Display a loading indicator or a custom loading component
  }

  return (
    <div dir={language === "ar" ? "rtl" : "ltr"} className="app">
      <Routes>
        <Route path="/Software" element={<LandingComponents />} />
        <Route path="Software/privacy_policy" element={<PrivacyPolicy />} />
        <Route path="Software/terms_service" element={<TermsOfService />} />
        <Route path="Software/disclaimer" element={<Disclaimer />} />
        <Route path="Software/support" element={<Support />} />
        <Route path="Software/cookie_policy" element={<CookiesPolicy />} />
        <Route path="Software/payment_form" element={<PaymentForm />} />
      </Routes>
      <div className="footer">
        <Footer />
      </div>

      <button
        className={`scroll-to-top-button ${isVisible ? "show" : "hide"}`}
        onClick={scrollToTop}
      >
        <KeyboardDoubleArrowUpOutlinedIcon />
      </button>
    </div>
  );
}

export default App;
