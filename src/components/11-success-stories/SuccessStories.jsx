import "./successStories.scss";

import { useTranslation } from "react-i18next";
import { useLanguage } from "../../contexts/LanguageContext";
import { Container } from "@mui/material";
import ClientsReviews from "../17-clients-reviews/ClientsReviews";

function SuccessStories() {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <div className="success_stories_section_container">
      <Container maxWidth="lg">
        <div
          className="success-stories-section"
          dir={language === "ar" ? "rtl" : "ltr"}
        >
          <h1>{t("success_stories_header")}</h1>
          <p>{t("success_stories_paragraph")}</p>
          <h3>{t("success_stories_h3")}</h3>
      
          {/* <div className="success-stories-section__image__boxes">
            <img
              src="https://leadsgorilla.io/founders-special-o/assets/images/testfull.png"
              alt="Not Found"
              loading="lazy"
            />
          </div> */}

          <ClientsReviews />
        </div>
      </Container>
    </div>
  );
}

export default SuccessStories;
