import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import "./dataScraper.scss";

import { useTranslation } from "react-i18next";
import { useLanguage } from "../../contexts/LanguageContext";
import { Container } from "@mui/material";

function DataScraper() {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <div className="data_scraper_section_container">
      <Container maxWidth="lg">
        <section
          className="data-scraper-section"
          dir={language === "ar" ? "rtl" : "ltr"}
        >
          <div className="content-section">
            <h2>{t("google_maps_header")}</h2>
            <p>{t("google_maps_p1")}</p>
            <p>{t("google_maps_p2")}</p>
            <p>{t("google_maps_p3")}</p>
          </div>
          <div className="image-section">
            <ReactCompareSlider
              itemOne={
                <ReactCompareSliderImage
                  src="https://mlbtlwqqirbfngxpwtno.supabase.co/storage/v1/object/public/mapleadscraper/web/images/data-csv-file-page.png"
                  srcSet="https://mlbtlwqqirbfngxpwtno.supabase.co/storage/v1/object/public/mapleadscraper/web/images/data-csv-file-page.png"
                  alt="Image one"
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src="https://mlbtlwqqirbfngxpwtno.supabase.co/storage/v1/object/public/mapleadscraper/web/images/google-maps-page.png"
                  srcSet="https://mlbtlwqqirbfngxpwtno.supabase.co/storage/v1/object/public/mapleadscraper/web/images/google-maps-page.png"
                  alt="Image two"
                />
              }
            />
          </div>
        </section>
      </Container>
    </div>
  );
}

export default DataScraper;
