import "./mainSection.scss";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../contexts/LanguageContext";

// Mui Icons
import UpdateIcon from "@mui/icons-material/Update";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import VideoIframe from "../small-components/VideoIframe";
function MainSection() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  return (
    <div className="promotional-banner" dir={language === "ar" ? "rtl" : "ltr"}>
      <h1 className="promotional-banner__title">{t("headline")}</h1>
      <p className="promotional-banner__subtitle">{t("subheadline")}</p>
      <p className="promotional-banner__timeframe">
        <span>
          <UpdateIcon />
        </span>{" "}
        {t("time")}
      </p>
      <ul className="promotional-banner__features">
        <div className="promotional-banner__features__up">
          <li>
            <TaskAltIcon />
            <p>{t("message")}</p>
          </li>
          <li>
            <TaskAltIcon />
            <p>{t("full_edition")}</p>
          </li>
        </div>
        <li>
          <TaskAltIcon />
          <p>{t("No_Skills")}</p>
        </li>
      </ul>
      <div
        className="video-container"
        style={{
          width: "100%",
          marginTop: "0rem",
          display: "flex",
          justifyContent: "center",
          position: "relative",
          paddingBottom: "56.25%" /* 16:9 aspect ratio (height/width) */,
        }}
      >
        <VideoIframe />
      </div>
    </div>
  );
}

export default MainSection;
