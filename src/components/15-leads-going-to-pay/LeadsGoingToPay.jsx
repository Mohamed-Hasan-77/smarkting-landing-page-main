import "./leadsGoingToPay.scss";



import { useTranslation } from "react-i18next";
import { useLanguage } from "../../contexts/LanguageContext";


function LeadsGoingToPay() {

  const { t } = useTranslation();
  const { language } = useLanguage();



  return (
    <div className="leads-going-to-pay-section" dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="leads-going-to-pay-section__container">
        <h2>
          {t("These")} <span>{t("leads_going_to_pay")}</span> {t("someone_to_help")}
        </h2>
        <h3>
          {t("do_not_let_them")}
        </h3>

        <div className="leads-going-to-pay-section__container__box">
          <div className="box__image__container">
            <img
              src="https://leadsgorilla.io/founders-special-o/assets/images/going-pay.png"
              alt="Not Found"
              loading="lazy"
            />
          </div>
          <div className="box__textarea">
            <p>
              {t("leads_going_to_pay_p1")}
            </p>
            <br />
            <p>
              {t("leads_going_to_pay_p2")}
            </p>
            <br />
            <p>
              {t("leads_going_to_pay_p3")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeadsGoingToPay;
