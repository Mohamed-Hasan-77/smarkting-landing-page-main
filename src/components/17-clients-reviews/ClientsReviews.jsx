import "./clientsReviews.scss";

// MUI Components
import Rating from "@mui/material/Rating";

// Translations
// import { useTranslation } from "react-i18next";

// ======== Data ========
import { englishReviews, arabicReview } from "../../assets/data/reviews";

// ======== Swiper =========
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

import PropTypes from "prop-types";

import { useLanguage } from "../../contexts/LanguageContext";

function ClientsReviews() {
  // const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <section
      className="reviews-container"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      {/* <h1>{t("what_clients_say")}</h1> */}
      <div className="slider">
        <Swiper
          dir="ltr"
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={true}
          modules={[Navigation, Pagination]}
          grabCursor={true} // Enable grab cursor
          className="swiper-container"
          freeMode={true} // Enable free mode for dragging
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            // when window width is <= 768px
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }}
        >
          {language === "en"
            ? englishReviews?.map((item) => (
                <SwiperSlide key={item.id} className="swiper-slide">
                  <div className="box">
                    <Rating
                      dir="ltr"
                      className="rating"
                      name="half-rating-read"
                      defaultValue={4.5}
                      precision={0.5}
                      readOnly
                    />
                    <span className="review-title">{item.title}</span>
                    <span className="review-description">{item.comment}</span>
                    <div className="user-time">
                      <span className="user">{item.name}{", "}</span>
                      <span className="time">{item.date}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            : arabicReview?.map((item) => (
                <SwiperSlide key={item.id} className="swiper-slide" dir="rtl">
                  <div className="box">
                    <Rating
                      dir="ltr"
                      className="rating"
                      name="half-rating-read"
                      defaultValue={4.5}
                      precision={0.5}
                      readOnly
                    />
                    <span className="review-title">{item.title}</span>
                    <span className="review-description">{item.comment}</span>
                    <div className="user-time">
                      <span className="user">{item.name}{"، "}</span>
                      <span className="time">{item.date}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </Swiper>
      </div>
    </section>
  );
}

export default ClientsReviews;

ClientsReviews.propTypes = {
  language: PropTypes.string,
};
