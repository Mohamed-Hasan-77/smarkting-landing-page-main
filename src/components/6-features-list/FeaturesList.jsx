import "./featuresList.scss";

// Import Icons

import megaphone from "../../../public/Icons/features/mega-phone.png";
import chart from "../../../public/Icons/features/bar-chart.png";
import eye from "../../../public/Icons/features/eye.png";
import location from "../../../public/Icons/features/location.png";
import newMessage from "../../../public/Icons/features/message.png";
import person from "../../../public/Icons/features/user.png";
import puzzle from "../../../public/Icons/features/puzzle.png";

import { useTranslation } from "react-i18next";
import { useLanguage } from "../../contexts/LanguageContext";
import { Container } from "@mui/material";


// Import images
import smarketingBook from "../../../public/Images/software_SMARKETING.png"

function FeaturesList() {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <div className="feature_list_big_container">
      <Container maxWidth="lg">
        <div
          className="feature-list-container"
          id="features-section"
          dir={language === "ar" ? "rtl" : "ltr"}
        >
          <h1>{t("SMarketing")}</h1>
          <p>{t("programDescription")}</p>
      
          <div className="features-list-box">
            <div className="feature-image">
              <img
                src={smarketingBook}
                alt="Features List Image"
                loading="lazy"
              />
            </div>
            <div className="feature-list">
              <ul>
                <li>
                  <img src={megaphone} alt="Not Found" loading="lazy" />
                  <p>
                    <strong>{t("custom_campaing_title")}</strong>{" "}
                    {t("custom_campaing_description")}
                  </p>
                </li>
                <li>
                  <img src={chart} alt="Not Found" loading="lazy" />
                  <p>
                    <strong>{t("extraction_feature_title")}</strong>{" "}
                    {t("extraction_feature_description")}
                  </p>
                </li>
                <li>
                  <img src={eye} alt="Not Found" loading="lazy" />
                  <p>
                    <strong>{t("accessing_feature_title")}</strong>{" "}
                    {t("accessing_feature_description")}
                  </p>
                </li>
                <li>
                  <img src={location} alt="Not Found" loading="lazy" />
                  <p>
                    <strong>{t("extraction_business_feature_title")}</strong>{" "}
                    {t("extraction_business_feature_description")}
                  </p>
                </li>
                <li>
                  <img src={newMessage} alt="Not Found" loading="lazy" />
                  <p>
                    <strong>{t("communication_feature_title")}</strong>{" "}
                    {t("communication_feature_description")}
                  </p>
                </li>
                <li>
                  <img src={person} alt="Not Found" loading="lazy" />
                  <p>
                    <strong>{t("suitable_feature_title")}</strong>{" "}
                    {t("suitable_feature_description")}
                  </p>
                </li>
                <li>
                  <img src={puzzle} alt="Not Found" loading="lazy" />
                  <p>
                    <strong>{t("integrated_feature_title")}</strong>{" "}
                    {t("integrated_feature_description")}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default FeaturesList;
