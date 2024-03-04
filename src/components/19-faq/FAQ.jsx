import QuestionAccordion from "../small-components/QuestionAccordion"
import "./faq.scss"


// Translations
import { useTranslation } from "react-i18next";

import { useLanguage } from "../../contexts/LanguageContext";



function Faq() {
  const { t } = useTranslation();
    const { language } = useLanguage();

  return (
    <section className="faq-section" dir={language === "ar" ? "rtl" : "ltr"}>
      <h1>{t("FAQ")}</h1>
      <div className="accordion-box">
        <QuestionAccordion />
      </div>
    </section>
  )
}

export default Faq