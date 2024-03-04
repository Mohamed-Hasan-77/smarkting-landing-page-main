import "./form.scss";

// Icons
import { FaUserAlt } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";

// Hooks
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

// MUI Components
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import AlertComponent from "../small-components/AlertComponent";

import PropTypes from "prop-types";

// import {useNavigate} from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";

function Form() {
  // ======== Variables And States ========
  // const history = useNavigate();
  const { language } = useLanguage();
  // ==== For Total Price ====
  const price = 94;
  const [total, setTotal] = useState(null);
  const [offerPrice, setOfferPrice] = useState(null);
  // // Assuming you have a state variable to store the row count
  // const [rowCount, setRowCount] = useState(0);

  // For Translation
  const { t } = useTranslation();

  // ==== For Put Data ====
  const [formData, setFormData] = useState({
    Name: "",
    WhatsappNumber: "",
    Email: "",
    Plan: "",
  });
  const [selectedOption, setSelectedOption] = useState("");

  // For Submition Process
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  const [validationAlert, setValidationAlert] = useState(false);
  const [showFillAlert, setShowFillAlert] = useState(false);

  // ================ Functions ================

  // for Radio button
  const getCircleStyles = () => {
    const baseStyles = {
      height: "20px",
      width: "20px",
      borderRadius: "50%",
      border: "3px solid var(--black-color)",
      display: "block",
      position: "absolute",
      left: "0",
      top: "0",
    };

    if (language === "ar") {
      // Adjust position for Arabic language
      baseStyles.left = "auto";
      baseStyles.right = "0";
    }

    return baseStyles;
  };

  const getPseudoElementStyles = () => {
    const baseStyles = {
      content: "''",
      height: "10px",
      width: "10px",
      backgroundColor: "var(--primary-color)",
      display: "block",
      position: "absolute",
      left: "51%",
      top: "51%",
      transform: "translate(-50%, -50%) scale(0)",
      borderRadius: "50%",
      transition: "300ms ease-in-out 0s",
    };

    if (language === "ar") {
      // Adjust position for Arabic language
      baseStyles.left = "49%";
    }

    return baseStyles;
  };

  // ==== For Selected Options ====
  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  // ==== For change input Field ====

  const isFormValid = (currentSelectedOption) => {
    // Validate all fields except Plan
    const isOtherFieldsValid = Object.entries(formData).every(
      ([key, value]) => {
        if (key === "Plan") return true; // Skip Plan for now
        return value.trim() !== "";
      }
    );

    // Validate Plan based on currentSelectedOption
    const isPlanValid = currentSelectedOption !== "";

    return isOtherFieldsValid && isPlanValid;
  };

  // const handleLinkClick = () => {
  //   window.scrollTo(0, 0);
  // };

  function handleInputChange(e) {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    isFormValid();
  }

  // ==== For Submitions ====

  function submit(e) {
    e.preventDefault();
    console.log("submitted");
    setLoading(true);

    // Check if selectedOption is not empty
    if (selectedOption !== "") {
      // If not empty, set Plan to selectedOption value
      setFormData((prevData) => ({
        ...prevData,
        Plan: selectedOption,
      }));
    }

    if (!isFormValid(selectedOption)) {
      // Show alert if the form is not valid
      setShowFillAlert(true);
      setTimeout(() => {
        setShowFillAlert(false);
      }, 3000);
      setLoading(false);
      return;
    }

    // Capture current date in YYYY-MM-DD format
    const currentDate = new Date().toISOString().split("T")[0]; // This will give you a string in the format of "YYYY-MM-DD"

    // Append current date to form data before submission
    const formEle = document.querySelector("form");
    const updatedFormData = new FormData(formEle);
    updatedFormData.append("Date", currentDate);

    // ==== For Form Data ====
    // const formEle = document.querySelector("form");
    // const formDataObj = new FormData(formEle);

    fetch("https://sheetdb.io/api/v1/dy1hl6pg2h2qr", {
      method: "POST",
      body: updatedFormData,
    })
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
        // Clear input fields after successful submission
        setFormData({
          Name: "",
          WhatsappNumber: "",
          Email: "",
          Plan: "",
        });
        setSelectedOption("");
        // Show success alert
        setShowSuccessAlert(true);
        setLoading(false);
        // Hide success alert after 3 seconds (adjust as needed)
        setTimeout(() => {
          setShowSuccessAlert(false);
          // Change the location after successful submission
          // handleLinkClick();
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  // Calculate total whenever Plan or selectedOption changes
  useMemo(() => {
    const plan = parseFloat(formData.Plan) || 0;
    if (!selectedOption) {
      setTotal(plan * price);
    } else {
      setTotal(offerPrice);
    }
  }, [formData.Plan, selectedOption]);

  const validatePhone = () => {
    const phoneRegex = /^(\+?\d{0,14})?$/; // Change this regex according to your phone number format

    if (!phoneRegex.test(formData.WhatsappNumber)) {
      // Invalid phone number format
      // You can set an error state or handle it as needed
      console.log("Invalid phone number format");
      setValidationAlert(true);
      setTimeout(() => {
        setValidationAlert(false);
      }, 3000);
    } else {
      setValidationAlert(false);
    }
  };

  return (
    <div className="form-container">
      <div className="form_header">{t("Get_Your_Package_Now")}</div>

      {/* ============ Start Form ============ */}
      <form className="form" onSubmit={(e) => submit(e)} autoComplete="off">
        {/* ==== Name Input Field ====*/}
        <div className="form-group">
          <div className="icon">
            <FaUserAlt fontSize={20} />
          </div>
          <input
            type="text"
            id="name"
            placeholder={t("name_field")}
            name="Name"
            value={formData.Name}
            onChange={(e) => handleInputChange(e)}
            autoComplete="off"
          />
        </div>

        {/* ==== Phone Input Field ====*/}
        <div className="form-group" dir="ltr">
          <div className="icon">
            <FaPhoneFlip fontSize={20} />
          </div>
          <input
            type="tel"
            id="phone"
            placeholder={t("whatsapp_number_field")}
            name="WhatsappNumber"
            value={formData.WhatsappNumber}
            onChange={(e) => {
              handleInputChange(e);
              validatePhone();
            }}
            autoComplete="off"
          />
          {validationAlert && (
            <AlertComponent type={"error"} message={"Number is Not Valid"} />
          )}
        </div>

        {/* ==== Email Input Field ====*/}

        <div className="form-group">
          <div className="icon">
            <MdMarkEmailRead fontSize={20} />
          </div>
          <input
            type="email"
            id="email"
            placeholder={t("email_address")}
            name="Email"
            value={formData.Email}
            onChange={(e) => handleInputChange(e)}
            autoComplete="off"
          />
        </div>

        {/* ====== Start Selection Options ====== */}
        <div className="form-group spans">
          {/* ======= First Option ======= */}
          <label htmlFor="onePiece" className="custom-radio-label">
            <input
              id="onePiece"
              type="radio"
              name="Plan"
              value="SMarketing Starter for 17 $"
              checked={selectedOption === "SMarketing Starter for 17 $"}
              onChange={() => {
                handleOptionChange("SMarketing Starter for 17 $");
                setTotal(17);
                setOfferPrice(17);
              }}
              className="custom-radio-input"
              autoComplete="off"
            />
            <span>{t("SMarketing_Starter")}</span>
            <div className="circle" style={getCircleStyles()}>
              {/* Pseudo-element */}
              <div
                className="pseudo-element"
                style={getPseudoElementStyles()}
              ></div>
            </div>
          </label>

          {/* ======= Second Option ======= */}
          <label htmlFor="twoPiece" className="custom-radio-label">
            <input
              id="twoPiece"
              type="radio"
              name="Plan"
              value="SMarketing Premium FULL EDITION for 37 AED"
              checked={
                selectedOption === "SMarketing Premium FULL EDITION for 37 AED"
              }
              onChange={() => {
                handleOptionChange(
                  "SMarketing Premium FULL EDITION for 37 AED"
                );
                setTotal(37);
                setOfferPrice(37);
              }}
              className="custom-radio-input"
              autoComplete="off"
            />
            <span>{t("SMarketing_Premium")}</span>
            <div className="circle" style={getCircleStyles()}>
              {/* Pseudo-element */}
              <div
                className="pseudo-element"
                style={getPseudoElementStyles()}
              ></div>
            </div>
          </label>

          {/* ======= Calc Total ======= */}
          <div className="total">
            {t("total_title")}: {total} {t("$")}
          </div>
        </div>
        {/* ====== End Selection Options ====== */}
        {/* ========================================================================================================== */}
        {/* ====== Start Buttons Area ====== */}
        <div className="submit-area">
          <button
            type="submit"
            className={`submit-button ${loading ? "loading" : ""}`}
            disabled={loading}
          >
            {loading ? (
              <CircularProgress color="inherit" size={20} />
            ) : (
              `${t("send_button")}`
            )}
          </button>
        </div>
      </form>
      {/* ============ End Form ============ */}

      {/* ============ Start Successfull Showing Alert ============ */}

      {showSuccessAlert && (
        <Alert className="alert" severity="success">
          {t("form_submission_success")}
        </Alert>
      )}
      {/* ============ End Successfull Showing Alert ============ */}
      {showFillAlert && (
        <AlertComponent type="error" message={t("PleaseFillInputs")} />
      )}
    </div>
  );
}

export default Form;

Form.propTypes = {
  language: PropTypes.string,
};
