import "./stepsFirstSection.scss";

// MUI Component
import UpdateIcon from "@mui/icons-material/Update";

import { useTranslation } from "react-i18next";
import { useLanguage } from "../../contexts/LanguageContext";



// import image
import search from "../../../public/Icons/steps/search.png"
import document from "../../../public/Icons/steps/document.png"
import message from "../../../public/Icons/steps/message.png"







function StepsFirstSection() {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <div className="steps-container" dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="steps-header">
        <UpdateIcon />
        <h1>
          {t("find_customer")}<br />
          <span>{t("seconds")}</span> {t("steps")}
        </h1>
        <p>
          {t("leads")} <br /> {t("dashboard")}
        </p>
      </div>
      <div className="steps">
        <div className="step">
          <div>
            <div className="icon-background">
              <img src={search} alt="Step 1" loading="lazy" />
            </div>
            <h3>{t("qualified_leads")}</h3>
            <p>
              {t("instructions")}
            </p>
          </div>
          <div className="step-number step-one">{t("Step1")}</div>
        </div>
        <div className="step">
          <div>
            <div className="icon-background">
              <img src={document} alt="Step 2" loading="lazy" />
            </div>
            <h3>{t("reportGeneration")}</h3>
            <p>
              {t("identifyLeads")}
            </p>
          </div>
          <div className="step-number step-two">{t("Step2")}</div>
        </div>
        <div className="step">
          <div>
            <div className="icon-background">
              <img src={message} alt="Step 3" loading="lazy" />
            </div>
            <h3>{t("contactClients")}</h3>
            <p>{t("customProposal")}</p>
          </div>
          <div className="step-number step-three">{t("Step3")}</div>
        </div>
      </div>
    </div>
  );
}

export default StepsFirstSection;
