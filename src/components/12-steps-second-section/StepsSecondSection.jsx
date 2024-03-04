import "./stepsSecondSection.scss";

// Import images
import smarketingBook from "../../../public/Images/software_SMARKETING.png";

import { useTranslation } from "react-i18next";
import { useLanguage } from "../../contexts/LanguageContext";
import VideoIframe from "../small-components/VideoIframe";

// Import images

import step1 from "../../../public/Images/step_second_section/1.png";
import step2 from "../../../public/Images/step_second_section/2.png";
import step3 from "../../../public/Images/step_second_section/3.png";

function StepsSecondSection() {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <div
      className="steps-second-section"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="steps-second-section__first__box">
        <div className="steps-second-section__first__box__image">
          <img src={smarketingBook} alt="Not Found" loading="lazy" />
        </div>
        <div className="steps-second-section__first__box__textarea">
          <h2>
            <span>{t("nextGeneration")}</span>
            {" "}
            <span>{t("profitableLocalLead")}</span>
            {" "}
            <span>{t("generationHasArrived")}</span>
          </h2>
          <h3>{t("introducingSmarketing")}</h3>
          {/* <div className="steps-second-section__first__box__textarea__image">
            <img
              src="https://leadsgorilla.io/founders-special-o/assets/images/2.0.png"
              alt="Not Found"
              loading="lazy"
            />
          </div> */}
        </div>
      </div>
      <div className="steps-second-section__second__box">
        <h2>
          {t("findNextPayingClient")}{" "}
          <span>{t("sixtySecondsThreeSteps")}</span>
        </h2>
        <div className="steps-second-section__second__box__steps__container">
          <div className="steps step1">
            <h3>{t("step1")}</h3>
            <p>
              {t("chooseBusinessCategory")} <br /> {t("keywordAndOrLocation")}
            </p>
            <div className="steps__image__container">
              <img src={step1} alt="NOt Found" loading="lazy" />
            </div>
          </div>
          <div className="steps step2">
            <h3>{t("step2")}</h3>
            <p>
              {t("selectLeadsYouWant")} <br /> {t("generateDetailedClientReport")}
            </p>
            <div className="steps__image__container">
              <img src={step2} alt="NOt Found" loading="lazy" />
            </div>
          </div>
          <div className="steps step3">
            <h3>{t("step3")}</h3>
            <p>{t("extractLeadsFormPostPages")}</p>
            <div className="steps__image__container">
              <img src={step3} alt="NOt Found" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
      <div className="steps-second-section__third__box" id="demo-video">
        <h2>{t("demoVideo")}</h2>
        <div
          className="video-container"
          style={{
            maxWidth: "100%",
            marginTop: "0rem",
            display: "flex",
            justifyContent: "center",
            position: "relative",
            paddingBottom: "56.25%" /* 16:9 aspect ratio (height/width) */,
            margin: "auto",
            borderRadius: "20px",
            height: "fit-content",
          }}
        >
          <VideoIframe />
        </div>
      </div>
    </div>
  );
}

export default StepsSecondSection;
