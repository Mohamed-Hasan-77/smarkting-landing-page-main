import "./ourClients.scss";

import { useTranslation } from "react-i18next";
// ====== Swiper =======
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";

// ========== import images ==========
import { ourClientsSlider } from "../../assets/data/ourClientsSlider";

function OurClients() {
  const { t } = useTranslation();


  return (
    <section className="our-clients-section">
      <h1>{t("Our Clients")}</h1>
      <div className="img-slider" dir="ltr">
        <Swiper
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation]}
          className="swiper-container"
          grabCursor={true} // Enable grab cursor
          freeMode={true} // Enable free mode for dragging
          spaceBetween={20}
          loop={true}
          slidesPerView={1}
          breakpoints={{
            // when window width is <= 768px
            450: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 4,
            },
          }}
        >
          {ourClientsSlider?.map((item) => (
            <SwiperSlide key={item.id}>
              <img className={"small-photo"} src={item.src} alt={item.name} loading="lazy"/>
            </SwiperSlide>
          ))}
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </Swiper>
      </div>
    </section>
  );
}

export default OurClients;
