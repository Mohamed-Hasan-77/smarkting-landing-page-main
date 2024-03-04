import BusinessBox from "../small-components/BusinessBox";
import "./businessCanBenefit.scss";

// import icons
import digitalMarketing from "../../../public/Icons/business-can-benefit/digital-marketing.png";
import wifi from "../../../public/Icons/business-can-benefit/wifi.png";
import coaches from "../../../public/Icons/business-can-benefit/coach.png";
import b2b from "../../../public/Icons/business-can-benefit/b2b.png";
import ownership from "../../../public/Icons/business-can-benefit/ownership.png";
import startup from "../../../public/Icons/business-can-benefit/rocket.png";

import { useTranslation } from "react-i18next";
import { useLanguage } from "../../contexts/LanguageContext";
import { Container } from "@mui/material";

function BusinessCanBenefit() {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <div className="business_can_benefit_section_container">
      <Container maxWidth="lg">
        <div
          className="business-can-benefit-section"
          dir={language === "ar" ? "rtl" : "ltr"}
        >
          <h3>
            {t("business_benefit_header")} <br />
            <span>{t("SMarketing")}</span>
          </h3>
          <div className="business-can-benefit-section__boxes_container">
            <BusinessBox
              src={digitalMarketing}
              title={t("business_box1_title")}
              subtitle={t("business_box1_subtitle")}
            />
            <BusinessBox
              src={wifi}
              title={t("business_box2_title")}
              subtitle={t("business_box2_subtitle")}
            />
            <BusinessBox
              src={coaches}
              title={t("business_box3_title")}
              subtitle={t("business_box3_subtitle")}
            />
            <BusinessBox
              src={b2b}
              title={t("business_box4_title")}
              subtitle={t("business_box4_subtitle")}
            />
            <BusinessBox
              src={ownership}
              title={t("business_box5_title")}
              subtitle={t("business_box5_subtitle")}
            />
            <BusinessBox
              src={startup}
              title={t("business_box6_title")}
              subtitle={t("business_box6_subtitle")}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default BusinessCanBenefit;
