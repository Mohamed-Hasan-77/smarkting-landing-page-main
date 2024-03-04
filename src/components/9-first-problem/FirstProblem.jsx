import "./firstProblem.scss";

// import image
import yourHelp from "../../../public/Images/your-help2.png";

import { useTranslation } from "react-i18next";
import { useLanguage } from "../../contexts/LanguageContext";
import { Container } from "@mui/material";

function FirstProblem() {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <div className="first_problem_section_container">
      <Container maxWidth="lg">
        <section
          className="first__problem__section"
          dir={language === "ar" ? "rtl" : "ltr"}
        >
          <h1>
            <span>{t("first_problem_span")} </span>
            {t("first_problem_header")}
            <span> {t("first_problem_span2")}</span>
          </h1>
      
          <div className="first__problem__section__box">
            <div className="first__problem__section__box__textarea">
              <p>{t("first_problem_p1")}</p>
              <p>{t("first_problem_p2")}</p>
              <p>{t("first_problem_p3")}</p>
            </div>
            <div className="first__problem__section__box__image">
              <img src={yourHelp} alt="Not Found" loading="lazy" />
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}

export default FirstProblem;
