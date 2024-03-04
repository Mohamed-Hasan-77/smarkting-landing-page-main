import { useTranslation } from "react-i18next";

import "./privacyPolicy.scss";
import { Container } from "@mui/material";
import { Header } from "../../components";

import { useLanguage } from "../../contexts/LanguageContext";

function PrivacyPolicy() {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <div
      className="privacy-policy-container"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <Header />
      <Container maxWidth="lg">
        <h1>{t("privacy_policy_title")}</h1>
        <p>{t("last_updated")}</p>
        <p>{t("privacy_policy_description")}</p>
        <p>{t("external_links_disclaimer")}</p>
        <p>{t("disclosure_to_law_enforcement")}</p>
        <p>{t("affiliation_disclaimer")}</p>
        <h3>{t("section_information_collection")}</h3>
        <p>{t("automatic_collection_tracking")}</p>
        <ol>
          <li>{t("web_page_http_headers")}</li>
          <li>{t("provided_information_through_forms")}</li>
          <li>
            {t("user_specific_or_aggregate_information")}
          </li>
          <li>
            {t("email_addresses_communicate_with_us")}
          </li>
        </ol>
        <h3>{t("section_use_of_collected_data")}</h3>
        <p>
          {t("use_of_collected_data")}
        </p>
        <h3>{t("section_data_disclosure_to_third_parties")}</h3>
        <p>
          {t("personal_information_usage")}
        </p>
        <ol>
          <li>{t("consideration_for_product")}</li>
          <li>{t("compliance_with_legal_requirements")}</li>
          <li>
            {t("marketing_products_and_services")}
          </li>
        </ol>
        <h3>{t("section_opt_out_rights")}</h3>
        <p>
          {t("opt_out_instructions")}
        </p>
        <h3>{t("section_data_collection_from_children")}</h3>
        <p>
          {t("children_data_collection_policy")}
        </p>
        <h3>{t("section_contact_account_status")}</h3>
        <p>
          {t("contact_account_status")}
        </p>
        <h3>{t("section_policy_changes")}</h3>
        <p>
          {t("policy_update_notification")}
        </p>
        <h3>{t("section_contact_information")}</h3>
        <p>
          {t("privacy_statement_contact")}
        </p>
        <h3>{t("section_anti_spam_policy")}</h3>
        <p>
          {t("anti_spam_policy")}
        </p>
        <p>
          {t("conclusion_message")}
        </p>
      </Container>
    </div>
  );
}

export default PrivacyPolicy;
