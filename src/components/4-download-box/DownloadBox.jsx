import "./downloadBox.scss";

import { useTranslation } from "react-i18next";
import { useLanguage } from "../../contexts/LanguageContext";
import { Container } from "@mui/material";

// Import Icons
import masterCard from "../../../public/Icons/download-box/card.png";
import visa from "../../../public/Icons/download-box/visa.png";
import paypal from "../../../public/Icons/download-box/paypal.png";
import discover from "../../../public/Icons/download-box/discover.png";
import amex from "../../../public/Icons/download-box/amex.png";


// Import Images
import programImage from "../../../public/Images/smarketing_program_image.png"

function DownloadBox() {
  const { t } = useTranslation();
  const { language } = useLanguage();

  const prevPrice = 37;
  const currentPrice = 17;
  const discountPercentage = 46;
  return (
    <div className="download_box_container">
      <Container maxWidth="lg">
        <div className="download-box" dir={language === "ar" ? "rtl" : "ltr"}>
          <div className="image-section">
            <img
              src={programImage}
              alt="download-box-image"
              loading="lazy"
            />
          </div>
          <div className="content-section">
            <span className="name">Smarketing</span>
            <span className="prev-price">
              {t("normal_price")} ${prevPrice}/{t("frequency")}
            </span>
            <span className="discount">
              {discountPercentage}
              {t("discount")}
            </span>
            <h2>
              {t("price")}
              {currentPrice}
            </h2>
            <p>
              <span style={{ fontWeight: "bold", display: "inline" }}>
                {t("members")}
              </span>{" "}
              {t("can_not_be_wrong")}
            </p>
            <p className="cancel">{t("cancel")}</p>
            <button
              onClick={() => {
                // Scroll to the specified section after the navigation
                setTimeout(() => {
                  const section = document.getElementById(
                    "pricing_big_container"
                  );
                  if (section) {
                    window.scrollTo({
                      top: section.offsetTop,
                      behavior: "smooth",
                    });
                  }
                }, 100);
              }}
            >
              {t("access")}
            </button>
            <div className="pay_card_container">
              <img src={visa} alt="visa card" loading="lazy" />
              <img src={paypal} alt="paypal card" loading="lazy" />
              <img src={masterCard} alt="master card" loading="lazy" />
              <img src={discover} alt="discover card" loading="lazy" />
              <img src={amex} alt="amex card" loading="lazy" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default DownloadBox;
