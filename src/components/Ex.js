import { Swiper, SwiperSlide } from "swiper/react";
import dogData from "../assets/DB/dogData";
import { useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import React from "react";
import style from "./Ex.module.css";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

import { FiAlignLeft } from "react-icons/fi";

const Ex = () => {
  const path = process.env.PUBLIC_URL;
  const [data, setData] = useState(dogData);

  return (
    <>
      <header>
        <h1>로고</h1>
        <div className={style.toggle}>
          <FiAlignLeft />
        </div>
        <div className={style.globalMenu}>
          <menu>
            <li>home</li>
            <li>about</li>
            <li>products</li>
            <li>contact</li>
          </menu>
        </div>
      </header>

      <div className={style.title}>
        <h1>
          we are <br /> creative <br /> agency
        </h1>
        <p>working with brands all over the world</p>
      </div>

      <div className={style.box}>
        <div className={style.img}>
          <div className={style.img1}></div>
          <div className={style.img2}></div>
        </div>

        <div className={style.txt}>
          leading digital agency with solid design and <br /> development
          expertise we focus on building <br /> webflow websites
        </div>
      </div>

      <div className={style.box}>
        <div className={style.img}>
          <div className={style.img1}></div>
          <div className={style.img2}></div>
        </div>

        <div className={style.txt}>
          leading digital agency with solid design and <br /> development
          expertise we focus on building <br /> webflow websites
        </div>
      </div>

      <div className={style.swiperCom}>
        <Swiper
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {data.map((img) => (
            <SwiperSlide key={img.id}>
              <img src={path + img.image} alt={img.name} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={style.txt}>Types of clients we want to work</div>
      </div>

      <footer>
        madeByProxymaDesign 2023. Web Design italy company Plva <br />
        02130380385 all rights reserved privacy policy
      </footer>
    </>
  );
};

export default Ex;
