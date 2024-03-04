import { Container } from "@mui/material";
import { Header } from "../../components";
import "./disclaimer.scss";

import { useTranslation } from "react-i18next";
import { useLanguage } from "../../contexts/LanguageContext";

function Disclaimer() {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <div
      className="disclaimer-container"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <Header />
      <Container maxWidth="lg">
        <h1>{t("disclaimer")}</h1>
        <p>{t("disclaimer_page_thank_you")}</p>
        <ol>
          <li>
            <strong>{t("general_purpose")}</strong>{" "}
            {t("smarketing_description")}
          </li>
          <li>
            <strong>{t("information_and_data")}</strong>{" "}
            {t("customer_and_user_data_usage_policy")}
          </li>
          <li>
            <strong>{t("communication_with_customers")}</strong>{" "}
            {t("communication_means_with_customers")}
          </li>
          <li>
            <strong>{t("personal_use")}</strong>{" "}
            {t("smarketing_personal_use_policy")}
          </li>
          <li>
            <strong>{t("liability")}</strong>{" "}
            {t("smarketing_liability_disclaimer")}
          </li>
          <li>
            <strong>{t("updates_and_changes")}</strong>{" "}
            {t("disclaimer_updates_notice")}
          </li>
        </ol>
        <p>{t("contact_disclaimer_inquiries")}</p>
        <p>{t("smarketing_terms_agreement")}</p>
        <p>{t("regards")}</p>
      </Container>
    </div>
  );
}

export default Disclaimer;
