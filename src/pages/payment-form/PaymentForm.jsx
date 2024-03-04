import "./paymentForm.scss";

import { Container } from "@mui/material";

import { Header } from "../../components";

import { useTranslation } from "react-i18next";
import { useLanguage } from "../../contexts/LanguageContext";

// Import Component
import Form from "../../components/23-form/Form";
// Import logo
import logo from "../../../public/Images/logosmarketing-T1.png";

// Import Images
import programImage from "../../../public/Images/smarketing_program_image.png"

function PaymentForm() {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <section className="payment_form_container" dir={language === "ar" ? "rtl" : "ltr"}>
      <Header />
      <Container maxWidth="lg">
        <div className="payment_form_container_big_box">
          <div className="payment_form_container_big_box_left">
            <img src={logo} alt="logo" className="logo_image" loading="lazy"/>
            <img
              src={
                programImage
              }
              alt="Program Image"
              className="program_image"
              loading="lazy"
            />
            <p>
              <span>{t("find_customer")} {t("seconds")} {t("steps")}</span> <br /> {t("leads")} {t("dashboard")}
            </p>
          </div>
          <div className="payment_form_container_big_box_right">
            <Form />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default PaymentForm;
