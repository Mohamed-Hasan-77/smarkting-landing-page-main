import "./support.scss";

import { Container } from "@mui/material";
import { Header } from "../../components";

// Import logo
import logo from "../../../public/Images/logosmarketing-T1.png";
import contactImage from "../../../public/Images/support.svg";
import { useEffect, useState } from "react";

// FormSpree
import { useForm, ValidationError } from "@formspree/react";

import { useTranslation } from "react-i18next";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import { useLanguage } from "../../contexts/LanguageContext";

function Support() {
  const { t } = useTranslation();
  const { language } = useLanguage();


  const [state, handleSubmit] = useForm("xyyrwjky");
  // Define state to store the selected option
  const [selectedOption, setSelectedOption] = useState("");
  const [showThanksMessage, setShowThanksMessage] = useState(false);

  // Function to handle option selection
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // handle form sumbition
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await handleSubmit(event); // Wait for form submission to complete
    console.log(state.succeeded);
    if (state.succeeded) {
      setShowThanksMessage(true);
      setTimeout(() => {
        setShowThanksMessage(false);
      }, 3000); // Hide the thanks message after 3 seconds
    }
  };

  // Inside your component
  useEffect(() => {
    if (state.succeeded) {
      setShowThanksMessage(true);
      setTimeout(() => {
        setShowThanksMessage(false);
      }, 3000); // Hide the thanks message after 3 seconds
    }
  }, [state.succeeded]);

  // Handle WhatsApp Click
  function handleWhatsAppClick() {
    // Replace '123456789' with the actual WhatsApp number
    const phoneNumber = "+971557480115";

    // Open the WhatsApp chat in a new window or tab
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  }


  return (
    <div className="support-container" dir={language === "ar" ? "rtl" : "ltr"}>
      <Header />
      <Container maxWidth="lg">
        <div className="support_image_container">
          <img src={logo} alt="logo" loading="lazy" />
        </div>

        <h1>{t("open_ticket")}</h1>
        <p>
          {t("contact_support")}
        </p>

        <div className="contact-box">
          <div className="left_image">
            <img src={contactImage} alt="contact_image" loading="lazy" />
          </div>
          <form className="form" onSubmit={handleFormSubmit}>
            <input
              type="text"
              name="Name"
              id="name"
              placeholder={t("full_name")}
              required
            />
            <input
              type="email"
              name="Email"
              id="email"
              placeholder={t("email")}
              required
            />
            <ValidationError
              prefix="Email"
              field="Email"
              errors={state.errors}
            />
            <select
              name="Help"
              id="help"
              value={selectedOption}
              onChange={handleOptionChange}
            >
              <option value="">{t("help_question")}</option>
              <option value="Settings">{t("settings")}</option>
              <option value="Billing">{t("billing")}</option>
              <option value="Bugs">{t("bugs")}</option>
              <option value="Others">{t("others")}</option>
            </select>
            <textarea
              name="Message"
              id="message"
              cols="30"
              rows="7"
              placeholder="Message"
              required
            ></textarea>
            <ValidationError
              prefix="Message"
              field="Message"
              errors={state.errors}
            />

            <button type="submit" disabled={state.submitting}>
              {state.submitting ? t("Sending...") : t("Send")}
            </button>

            {showThanksMessage && <h2>{t("thanks_for_joining")}</h2>}
          </form>
        </div>
        <button className="contact-button" onClick={handleWhatsAppClick}>
          {t("contact_whatsapp")}
          <WhatsAppIcon className="whatsapp-icon" />
        </button>
      </Container>
    </div>
  );
}

export default Support;
