import "./pricing.scss";

// import icons
import plane from "../../../public/Icons/pricing/plane.png";
import rocket from "../../../public/Icons/pricing/rocket.png";
import correct from "../../../public/Icons/pricing/correct.png";

import { useTranslation } from "react-i18next";
import { useLanguage } from "../../contexts/LanguageContext";
import { Container } from "@mui/material";

// React Router
import { useNavigate } from "react-router-dom";

function Pricing() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const history = useNavigate();

  return (
    <div className="pricing_big_container" id="pricing_big_container">
      <Container maxWidth="lg">
        <section
          className="pricing-section"
          dir={language === "ar" ? "rtl" : "ltr"}
        >
          <div className="pricing_box starter">
            <h1 className="starter-title">{t("starter")}</h1>
            <div className="pricing_image_container_and_header">
              <img src={plane} alt="starter icon " loading="lazy" />
              <h1 className="starter_header">{t("smarketing_starter")}</h1>
            </div>
            <ul className="pricing_checklist">
              <li>
                <img src={correct} alt="correct" loading="lazy" />
                <p>{t("find_leads_on_demand")}</p>
              </li>
              <li>
                <img src={correct} alt="correct" loading="lazy" />
                <p>{t("lead_management_access")}</p>
              </li>
              <li>
                <img src={correct} alt="correct" loading="lazy" />
                <p>{t("contact_leads_access")}</p>
              </li>
              <li>
                <img src={correct} alt="correct" loading="lazy" />
                <p>{t("video_training")}</p>
              </li>
              <li>
                <img src={correct} alt="correct" loading="lazy" />
                <p>{t("find_claimed_unclaimed_businesses")}</p>
              </li>
              <li>
                <img src={correct} alt="correct" loading="lazy" />
                <p>{t("ai_powered_lead_scoring")}</p>
              </li>
              <li>
                <img src={correct} alt="correct" loading="lazy" />
                <p>{t("support_team_24_7")}</p>
              </li>
              <li>
                <img src={correct} alt="correct" loading="lazy" />
                <p>{t("works_in_any_language")}</p>
              </li>
              <li>
                <img src={correct} alt="correct" loading="lazy" />
                <p>{t("points_3000")}</p>
              </li>
              <li>
                <p className="normal_price">{t("normal_pricing")}</p>
              </li>
            </ul>
            
            <div className="pricing_current_price">
              <span>17$</span>
              <div className="discount">{t("discount_percent_off")}</div>
            </div>
            <button
              className="buy_now"
              onClick={() => {
                history("/Software/payment_form"); // Navigate to home page
                setTimeout(() => {
                  const section = document.getElementById("WebsiteHeader");
                  if (section) {
                    window.scrollTo({
                      top: section.offsetTop,
                      behavior: "smooth",
                    });
                  }
                }, 100);
              }}
            >
              {t("buy_now")}
            </button>
          </div>
          <div className="pricing_box premium">
            <h1 className="starter-title">{t("premium")}</h1>
            <div className="pricing_image_container_and_header">
              <img src={rocket} alt="starter icon " loading="lazy" />
              <h1 className="starter_header">
                {t("smarketing_premium_full_edition")}
              </h1>
            </div>
            <ul className="pricing_checklist">
              <li>
                <img src={correct} alt="correct" loading="lazy" />
                <p>{t("find_leads_on_demand")}</p>
              </li>
              <li>
                <img src={correct} alt="correct" loading="lazy" />
                <p>{t("lead_management_access")}</p>
              </li>
              <li>
                <img src={correct} alt="correct" loading="lazy" />
                <p>{t("contact_leads_access")}</p>
              </li>
              <li>
                <img src={correct} alt="correct" loading="lazy" />
                <p>{t("video_training")}</p>
              </li>
              <li>
                <img src={correct} alt="correct" loading="lazy" />
                <p>{t("find_claimed_unclaimed_businesses")}</p>
              </li>
              <li>
                <img src={correct} alt="correct" loading="lazy" />
                <p>{t("ai_powered_lead_scoring")}</p>
              </li>
              <li>
                <img src={correct} alt="correct" loading="lazy" />
                <p>{t("premium_24_7_support_team")}</p>
              </li>
              <li>
                <img src={correct} alt="correct" loading="lazy" />
                <p>{t("works_in_any_language")}</p>
              </li>
              <li>
                <img src={correct} alt="correct" loading="lazy" />
                <p>{t("local_genius_training")}</p>
              </li>
              <li>
                <img src={correct} alt="correct" loading="lazy" />
                <p>{t("video_training_access")}</p>
              </li>
              <li>
                <img src={correct} alt="correct" loading="lazy" />
                <p>{t("support_country")}</p>
              </li>
              <li>
                <img src={correct} alt="correct" loading="lazy" />
                <p>{t("create_companies")}</p>
              </li>
              <li>
                <img src={correct} alt="correct" loading="lazy" />
                <p>{t("filter_scale")}</p>
              </li>
              <li>
                <img src={correct} alt="correct" loading="lazy" />
                <p>{t("engagement_scale")}</p>
              </li>
              <li>
                <img src={correct} alt="correct" loading="lazy" />
                <p>{t("local_businesses_scraper")}</p>
              </li>
              <li>
                <img src={correct} alt="correct" loading="lazy" />
                <p>{t("wp_sender_pro")}</p>
              </li>
              <li>
                <img src={correct} alt="correct" loading="lazy" />
                <p>{t("search_unlimited_leads")}</p>
              </li>
              <li>
                <img src={correct} alt="correct" loading="lazy" />
                <p>{t("commercial_license")}</p>
              </li>
              <li>
                <img src={correct} alt="correct" loading="lazy" />
                <p>{t("points_10000")}</p>
              </li>
              <li>
                <p className="normal_price">{t("normal_price2")}</p>
              </li>
            </ul>
            
            <div className="pricing_current_price">
              <span>{t("price_37")}</span>
              <div className="discount">{t("discount_53_percent_off")}</div>
            </div>
            <button
              className="buy_now"
              onClick={() => {
                history("/Software/payment_form"); // Navigate to home page
                setTimeout(() => {
                  const section = document.getElementById("WebsiteHeader");
                  if (section) {
                    window.scrollTo({
                      top: section.offsetTop,
                      behavior: "smooth",
                    });
                  }
                }, 100);
              }}
            >
              {t("buy_now")}
            </button>
          </div>
        </section>
      </Container>
    </div>
  );
}

export default Pricing;
