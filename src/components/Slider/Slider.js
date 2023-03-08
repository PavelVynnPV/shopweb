import React, { useState } from "react";
import styles from "./Slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Slider.module.css";

export default function Slider() {
  const [slide, setSlide] = useState("");
  return (
    <>
      <div className={styles.slider__inner}>
        <div className={styles.slider}>
          <Swiper className="mySwiper">
            <SwiperSlide>
              {" "}
              <img
                className={styles.slide_img}
                src={
                  slide === ""
                    ? "https://content.rozetka.com.ua/files/images/original/290610548.jpg"
                    : slide
                }
                alt="main-slider"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={styles.mini__slider}>
          <span className={styles.headpphones_slide}></span>
          <span className={styles.iphone_slide}></span>
          <span className={styles.laptop_slide}></span>
        </div>
      </div>
    </>
  );
}
