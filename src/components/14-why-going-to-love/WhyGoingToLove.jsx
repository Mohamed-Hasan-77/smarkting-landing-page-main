import "./whyGoingToLove.scss";

// MUI Icons
import TaskAltIcon from "@mui/icons-material/TaskAlt";

// Import Image
import manlaptop2 from "../../../public/Images/man-with-laptop2.jpg";

import { useTranslation } from "react-i18next";
import { useLanguage } from "../../contexts/LanguageContext";
import { Container } from "@mui/material";

function WhyGoingToLove() {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <div className="why_going_to_love_section_container">
      <Container maxWidth="lg">
        <div
          className="why-going-to-love-section"
          dir={language === "ar" ? "rtl" : "ltr"}
        >
          <h3>
            {t("why_going_h3")}{" "}
            {language === "en" ? <span>{t("SMarketing")}...</span> : ""}
          </h3>
          <h4>{t("why_going_h4")}</h4>
      
          <div className="why-going-to-love-section__box">
            <div className="why-going-to-love-section__box__image__container">
              <img src={manlaptop2} alt="Not Found" loading="lazy" />
            </div>
            <div className="why-going-to-love-section__box__textarea">
              <p>{t("why_going_big_p")}</p>
              <p>{t("why_going_big_p2")}</p>
      
              <ul className="why-going-to-love-section__box__textarea__checkList">
                <li>
                  <TaskAltIcon className="checkList__icon" />
                  <p>{t("why_going_checklist_li1")}</p>
                </li>
                <li>
                  <TaskAltIcon className="checkList__icon" />
                  <p>{t("why_going_checklist_li2")}</p>
                </li>
                <li>
                  <TaskAltIcon className="checkList__icon" />
                  <p>{t("why_going_checklist_li3")}</p>
                </li>
                <li>
                  <TaskAltIcon className="checkList__icon" />
                  <p>{t("why_going_checklist_li4")}</p>
                </li>
                <li>
                  <TaskAltIcon className="checkList__icon" />
                  <p>{t("why_going_checklist_li5")}</p>
                </li>
      
                <h2>{t("why_going_h2")}</h2>
                <li>
                  <TaskAltIcon className="checkList__icon" />
                  <p>{t("why_going_checklist_li6")}</p>
                </li>
                <li>
                  <TaskAltIcon className="checkList__icon" />
                  <p>{t("why_going_checklist_li7")}</p>
                </li>
                <li>
                  <TaskAltIcon className="checkList__icon" />
                  <p>{t("why_going_checklist_li8")}</p>
                </li>
                <li>
                  <TaskAltIcon className="checkList__icon" />
                  <p>{t("why_going_checklist_li9")}</p>
                </li>
                <li>
                  <TaskAltIcon className="checkList__icon" />
                  <p>{t("why_going_checklist_li10")}</p>
                </li>
              </ul>
            </div>
            <p className="why_going_down_p">
              <span>{t("why_going_down_p_span")}</span>
              <br />
              {t("why_going_down_p")}
            </p>
            <p className="why_going_down_p2">{t("why_going_down_p2")}</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default WhyGoingToLove;
