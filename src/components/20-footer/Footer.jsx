import "./footer.scss";

// Import logo
import logo from "../../../public/Images/logosmarketing-T1.png";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import { useLanguage } from "../../contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
function Footer() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const history = useNavigate();

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer className="footer-section" dir={language === "ar" ? "rtl" : "ltr"}>
      <h5>{t("disclaimer")}</h5>
      <div className="footer-boxes">
        <div className="footer-box footer-box-left">
          <h6>{t("google_title")}</h6>
          <p>{t("google_description")}</p>
        </div>
        <div className="footer-box footer-box-right">
          <h6>{t("facebook_title")}</h6>
          <p>{t("facebook_description")}</p>
        </div>
      </div>
      <p>{t("disclaimer_p1")}</p>
      <p>{t("disclaimer_p2")}</p>
      <p>{t("disclaimer_p3")}</p>
      <p>{t("disclaimer_p4")}</p>
      <p>{t("disclaimer_p5")}</p>
      <p>{t("disclaimer_p6")}</p>
      <p>{t("disclaimer_p7")}</p>

      <div className="footer-down-box">
        <button
          className="logo_image"
          onClick={() => {
            history("/Software");
            handleLinkClick()
          }}
        >
          <img src={logo} alt="Logo" loading="lazy" />
        </button>
        <ul>
          <Link to="Software/Privacy_Policy" onClick={handleLinkClick}>
            <li>{t("privacy_policy")}</li>
          </Link>
          <Link to="Software/terms_service" onClick={handleLinkClick}>
            <li>{t("terms_of_service")}</li>
          </Link>
          <Link to="Software/disclaimer" onClick={handleLinkClick}>
            <li>{t("Disclaimer")}</li>
          </Link>
          <Link to="Software/cookie_policy" onClick={handleLinkClick}>
            <li>{t("cookies_policy")}</li>
          </Link>
          <Link to="Software/support" onClick={handleLinkClick}>
            <li>{t("support")}</li>
          </Link>
        </ul>
      </div>
      <hr />
      <p className="copy-right">{t("copy_right")}</p>
    </footer>
  );
}

export default Footer;
