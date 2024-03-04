import "./badForThemGreatForYou.scss";

import manLaptop from "../../../public/Images/man-with-laptop.jpg";

// Import Icons
import megaphone from "../../../public/Icons/badGreat/megaphone.png";
import dart from "../../../public/Icons/badGreat/dart-board.png";
import cloud_server from "../../../public/Icons/badGreat/cloud-server.png";
import optimizing from "../../../public/Icons/badGreat/optimizing.png";
import whatsapp from "../../../public/Icons/badGreat/whatsapp.png";
import growing_plant from "../../../public/Icons/badGreat/sapling.png";
import chart from "../../../public/Icons/badGreat/bar-chart.png";
import videoMarketing from "../../../public/Icons/badGreat/vedio-marketing.png";
import tech_support from "../../../public/Icons/badGreat/live-chat.png";
import updates from "../../../public/Icons/badGreat/updates.png";
import responsive from "../../../public/Icons/badGreat/responsive.png";
import cost from "../../../public/Icons/badGreat/cost.png";

import { useTranslation } from "react-i18next";
import { useLanguage } from "../../contexts/LanguageContext";

function BadForThemGreatForYou() {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <section
      className="bad-for-them-section"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <h1>{t("bad_great_header")}</h1>

      <div className="bad-for-them-section__mid">
        <div className="textarea">
          <p>{t("bad_great_p1")}</p>
          <p>{t("bad_great_p2")}</p>
          <p>{t("bad_great_p3")}</p>
          <p>{t("bad_great_p4")}</p>
          <p>{t("bad_great_p5")}</p>
        </div>
        <div className="image-area">
          <img src={manLaptop} alt="man with laptop" loading="lazy" />
        </div>
      </div>

      <div className="bad-for-them-section__down">
        <h2>{t("bad_snippets_header")}</h2>
        <ul>
          <div className="first__li__Group">
            <li>
              <img src={megaphone} alt="Not Found" loading="lazy" />
              <p>{t("bad_snippets_p1")}</p>
            </li>
            <li>
              <img src={dart} alt="Not Found" loading="lazy" />
              <p>{t("bad_snippets_p2")}</p>
            </li>
            <li>
              <img src={cloud_server} alt="Not Found" loading="lazy" />
              <p>{t("bad_snippets_p3")}</p>
            </li>
            <li>
              <img src={optimizing} alt="Not Found" loading="lazy" />
              <p>{t("bad_snippets_p4")}</p>
            </li>
            <li>
              <img src={whatsapp} alt="Not Found" loading="lazy" />
              <p>{t("bad_snippets_p5")}</p>
            </li>
            <li>
              <img src={growing_plant} alt="Not Found" loading="lazy" />
              <p>{t("bad_snippets_p6")}</p>
            </li>
          </div>
          <div className="second__li__Group">
            <li>
              <img src={chart} alt="Not Found" loading="lazy" />
              <p>{t("bad_snippets_p7")}</p>
            </li>
            <li>
              <img src={videoMarketing} alt="Not Found" loading="lazy" />
              <p>{t("bad_snippets_p8")}</p>
            </li>
            <li>
              <img src={tech_support} alt="Not Found" loading="lazy" />
              <p>{t("bad_snippets_p9")}</p>
            </li>
            <li>
              <img src={updates} alt="Not Found" loading="lazy" />
              <p>{t("bad_snippets_p10")}</p>
            </li>
            <li>
              <img src={responsive} alt="Not Found" loading="lazy" />
              <p>{t("bad_snippets_p11")}</p>
            </li>
            <li>
              <img src={cost} alt="Not Found" loading="lazy" />
              <p>{t("bad_snippets_p12")}</p>
            </li>
          </div>
        </ul>
      </div>
    </section>
  );
}

export default BadForThemGreatForYou;
