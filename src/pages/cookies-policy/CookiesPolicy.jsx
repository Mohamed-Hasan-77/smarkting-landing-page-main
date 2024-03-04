import "./cookiesPolicy.scss";

import { Container } from "@mui/material";
import { Header } from "../../components";

import { useTranslation } from "react-i18next";
import { useLanguage } from "../../contexts/LanguageContext";
function CookiesPolicy() {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <div
      className="cookies-policy-container"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <Header />
      <Container maxWidth="lg">
        <h1>{t("SMARKETING_Cookie_Policy")}</h1>
        <p>
          {t("welcome_message")}{" "}
          <a href="https://smarketing.llc">smarketing.llc</a>{" "}
          {t("purpose_message")}
        </p>

        <h2>{t("what_are_cookies")}</h2>
        <p>{t("cookies_description")}</p>

        <h2>{t("howDoesSmarketingUseCookies")}</h2>
        <p>{t("cookieUsage")}</p>
        <ul>
          <li>
            <strong>{t("data_analysis_and_performance")}</strong>{" "}
            {t("improve_services_usage")}
          </li>
          <li>
            <strong>{t("personalization")}</strong>{" "}
            {t("personalized_experience")}
          </li>
          <li>
            <strong>{t("targeted_marketing")}</strong>{" "}
            {t("advertising_campaigns_based_on_preferences")}
          </li>
          <li>
            <strong>{t("communication")}</strong>{" "}
            {t("direct_communication_with_customers_and_leads")}
          </li>
        </ul>

        <h2>{t("control_cookies")}</h2>
        <p>{t("manage_cookies_freedom")}</p>

        <h2>{t("cookie_policy_updates")}</h2>
        <p>{t("update_cookie_policy")}</p>

        <h2>{t("contact_us")}</h2>
        <p>
          {t("cookie_policy_questions_contact")}{" "}
          <a href="mailto:info@smarketing.llc">info@smarketing.llc</a>.
        </p>

        <p>{t("thank_you_for_trusting_smarketing")}</p>
      </Container>
    </div>
  );
}

export default CookiesPolicy;
