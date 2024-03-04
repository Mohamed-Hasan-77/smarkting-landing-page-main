import "./termsOfService.scss"

import { Container } from "@mui/material";
import { Header } from "../../components";

// Translation
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../contexts/LanguageContext";

function TermsOfService() {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <div className="terms-of-service-container" dir={language === "ar" ? "rtl" : "ltr"}>
      <Header />
      <Container maxWidth="lg">
        <h1>{t("terms_of_service_smarketing")}</h1>
        <p>
          {t("welcome_to")} <span>SMARKETING</span> {t("service_description")}
        </p>
        <ol>
          <li>
            <strong>{t("agreement_to_terms")}</strong> {t("service_usage_agreement")}
          </li>
          <li>
            <strong>{t("personal_use2")}</strong> {t("service_usage_guidelines")}
          </li>
          <li>
            <strong>{t("data_and_privacy")}</strong> {t("privacy_consent")}
          </li>
          <li>
            <strong>{t("liability2")}</strong> {t("liability_disclaimer")}
          </li>
          <li>
            <strong>{t("updates_and_modifications")}</strong> {t("terms_change_policy")}
          </li>
          <li>
            <strong>{t("pricing_and_payment")}</strong> {t("payment_terms")}
          </li>
          <li>
            <strong>{t("cancellation_and_refund")}</strong> {t("cancellation_refund_policy")}
          </li>
          <li>
            <strong>{t("waivers")}:</strong> {t("waiver_agreement")}
          </li>
        </ol>
        <p>
          {t("continuing_usage_agreement")}
        </p>
        <p>
          {t("contact_support2")}
        </p>
        <p>{t("thank_you")}</p>
      </Container>
    </div>
  );
}

export default TermsOfService;
