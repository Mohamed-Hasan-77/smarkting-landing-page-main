import { useEffect, useState } from "react";
import "./whyScrape.scss";

// Import Icons
import reliability from "../../../public/Icons/why-scrape/reliability.png";
import technology from "../../../public/Icons/why-scrape/technology.png";
import updates from "../../../public/Icons/why-scrape/updates.png";
import speed from "../../../public/Icons/why-scrape/speed.png";
import cloudeScraping from "../../../public/Icons/why-scrape/cloud-scraping.png";
import limitless from "../../../public/Icons/why-scrape/limitless.png";

import { useTranslation } from "react-i18next";
import { useLanguage } from "../../contexts/LanguageContext";

function WhyScrape() {
  const { t } = useTranslation();
  const { language } = useLanguage();



  // Generate a 9-digit number from the current Unix timestamp
  const generateInitialNumber = () => {
    const timeString = Date.now().toString();
    return Number(timeString.substr(-6));
  };

  console.log(Date.now().toString())
  const [count, setCount] = useState(generateInitialNumber());

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + Math.floor(Math.random() * 1) + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="why-scrape-section" dir={language === "ar" ? "rtl" : "ltr"}>
      <h3>
        {t("why_scrape_with_header")} <br />
        <span>{t("SMarketing")}{t("?")}</span>
      </h3>
      <div className="why-scrape-section__boxes_container">
        <div className="boxes_container_box">
          <div className="icon-container">
            <img src={reliability} alt="reliability" loading="lazy" />
          </div>
          <h4>{t("why_scrape_with_box1_title")}</h4>
          <p>
            {t("why_scrape_with_box1_descrption")}
          </p>
        </div>
        <div className="boxes_container_box">
          <div className="icon-container">
            <img src={technology} alt="technology" loading="lazy" />
          </div>
          <h4>{t("why_scrape_with_box2_title")}</h4>
          <p>
            {t("why_scrape_with_box2_descrption")}
          </p>
        </div>
        <div className="boxes_container_box">
          <div className="icon-container">
            <img src={updates} alt="updates" loading="lazy" />
          </div>
          <h4>{t("why_scrape_with_box3_title")}</h4>
          <p>
            {t("why_scrape_with_box3_descrption")}
          </p>
        </div>
        <div className="boxes_container_box">
          <div className="icon-container">
            <img src={speed} alt="speed" loading="lazy" />
          </div>
          <h4>{t("why_scrape_with_box4_title")}</h4>
          <p>
            {t("why_scrape_with_box4_descrption")}
          </p>
        </div>
        <div className="boxes_container_box">
          <div className="icon-container">
            <img src={cloudeScraping} alt="cloudeScraping" loading="lazy" />
          </div>
          <h4>{t("why_scrape_with_box5_title")}</h4>
          <p>
            {t("why_scrape_with_box5_descrption")}
          </p>
        </div>
        <div className="boxes_container_box">
          <div className="icon-container">
            <img src={limitless} alt="limitless" loading="lazy" />
          </div>
          <h4>{t("why_scrape_with_box6_title")}</h4>
          <p>
            {t("why_scrape_with_box6_descrption")}
          </p>
        </div>
      </div>
      <div className="counter">
        <div className="number">{count.toLocaleString()}</div>
        <div className="text">{t("tasks_extracted")}</div>
      </div>
    </section>
  );
}

export default WhyScrape;
