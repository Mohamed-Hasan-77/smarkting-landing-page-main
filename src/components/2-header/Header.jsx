import "./header.scss";

// ============= React Hooks =============
import { useState, useEffect } from "react";

// Import logo
import logo from "../../../public/Images/logosmarketing-T1.png";

// ============= MUI Icons =============
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";

// React Router
import { useNavigate } from "react-router-dom";

// import Context
import { useLanguage } from "../../contexts/LanguageContext";

import { useTranslation } from "react-i18next";

function Header() {
  const { i18n, language, changeLanguage } = useLanguage();
  const { t } = useTranslation();
  const history = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [navOpen, setNavOpen] = useState(false);

  // Effect to toggle the body class based on navOpen state
  useEffect(() => {
    if (navOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [navOpen]); // Depend on navOpen state

  const toggleNav = () => {
    setNavOpen(!navOpen); // Toggle the navOpen state
  };

  const handleHeaderLinkClick = (linkName) => {
    setActiveLink(linkName); // Update the active link
  };

  return (
    <header className="header" id="WebsiteHeader" dir={language === "ar" ? "rtl" : "ltr"}>
      <div
        className="header__logo"
        onClick={() => {
          history("/Software"); // Navigate to home page
        }}
      >
        <img src={logo} alt="Leads Gorilla" loading="lazy" />
      </div>
      <nav className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}>
        <button
          className="close-menu"
          onClick={() => {
            setIsMenuOpen(false);
            toggleNav();
          }}
        >
          <CloseIcon className="close-menu-icon" />
        </button>
        <span
          onClick={() => {
            handleHeaderLinkClick("home");
            setNavOpen(false);
            setIsMenuOpen(false);
            history("/Software"); // Navigate to home page
          }}
          className={`header__link ${activeLink === "home" ? "clicked" : ""}`}
        >
          {t("Home")}
        </span>
        <span
          onClick={() => {
            handleHeaderLinkClick("demo");
            setNavOpen(false);
            setIsMenuOpen(false);

            history("/Software"); // Navigate to home page
            // Scroll to the specified section after the navigation
            setTimeout(() => {
              const section = document.getElementById("demo-video");
              if (section) {
                window.scrollTo({
                  top: section.offsetTop,
                  behavior: "smooth",
                });
              }
            }, 100);
          }}
          className={`header__link ${activeLink === "demo" ? "clicked" : ""}`}
        >
          {t("Demo_video")}
        </span>
        <span
          onClick={() => {
            handleHeaderLinkClick("features");
            setNavOpen(false);
            setIsMenuOpen(false);

            history("/Software"); // Navigate to home page
            // Scroll to the specified section after the navigation
            setTimeout(() => {
              const section = document.getElementById("features-section");
              if (section) {
                window.scrollTo({
                  top: section.offsetTop,
                  behavior: "smooth",
                });
              }
            }, 100);
          }}
          className={`header__link ${
            activeLink === "features" ? "clicked" : ""
          }`}
        >
          {t("Features")}
        </span>
        <div className="language-btn">
          {i18n.language === "en" && (
            <button
              onClick={() => {
                changeLanguage("ar");
                setIsMenuOpen(false);
              }}
            >
              عربي
            </button>
          )}
          {i18n.language === "ar" && (
            <button
              onClick={() => {
                changeLanguage("en");
                setIsMenuOpen(false);
              }}
            >
              EN
            </button>
          )}
        </div>
        <span
          onClick={() => {
            setNavOpen(false);
            setIsMenuOpen(false);

            history("/Software/payment_form"); // Navigate to home page
            // Scroll to the specified section after the navigation
            setTimeout(() => {
              const section = document.getElementById("pricing_big_container");
              if (section) {
                window.scrollTo({
                  top: section.offsetTop,
                  behavior: "smooth",
                });
              }
            }, 100);
          }}
          className="header__cta"
        >
          <ShoppingCartIcon />
          {t("Get_Started")}
        </span>
      </nav>
      <div className="lang_btn2_and_burger">
        <div className="language-btn2">
            {i18n.language === "en" && (
              <button
                onClick={() => {
                  changeLanguage("ar");
                  setIsMenuOpen(false);
                }}
              >
                عربي
              </button>
            )}
            {i18n.language === "ar" && (
              <button
                onClick={() => {
                  changeLanguage("en");
                  setIsMenuOpen(false);
                }}
              >
                EN
              </button>
            )}
          </div>
        <button
          className="header__burger"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
            toggleNav();
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
