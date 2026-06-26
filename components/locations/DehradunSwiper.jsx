"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function DehradunSwiper() {
  return (

    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
    //   pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <Image
          alt="swiper-img"
          src="/assets/images/office/clients/zandu.jpg"
          width={410}
          height={295}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          alt="swiper-img"
          src="/assets/images/office/clients/bridcul.jpg"
          width={410}
          height={295}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          alt="swiper-img"
          src="/assets/images/office/clients/beetel.jpg"
          width={410}
          height={295}
        />
      </SwiperSlide>
      
      <SwiperSlide>
        <Image
          alt="swiper-img"
          src="/assets/images/office/clients/kreditbee.jpg"
          width={410}
          height={295}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          alt="swiper-img"
          src="/assets/images/office/clients/snapdeal.jpg"
          width={410}
          height={295}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          alt="swiper-img"
          src="/assets/images/office/clients/thomas-cook.jpg"
          width={410}
          height={295}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          alt="swiper-img"
          src="/assets/images/office/clients/CM-helpline.jpg"
          width={410}
          height={295}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          alt="swiper-img"
          src="/assets/images/office/clients/mobikwik.jpg"
          width={410}
          height={295}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          alt="swiper-img"
          src="/assets/images/office/clients/logo-1.jpg"
          width={410}
          height={295}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          alt="swiper-img"
          src="/assets/images/office/clients/UKPC.jpg"
          width={410}
          height={295}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          alt="swiper-img"
          src="/assets/images/office/clients/UK-van.jpg"
          width={410}
          height={295}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          alt="swiper-img"
          src="/assets/images/office/clients/saathi.jpg"
          width={410}
          height={295}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          alt="swiper-img"
          src="/assets/images/office/clients/logo-2.jpg"
          width={410}
          height={295}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          alt="swiper-img"
          src="/assets/images/office/clients/logo-3.jpg"
          width={410}
          height={295}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          alt="swiper-img"
          src="/assets/images/office/clients/paytm.jpg"
          width={410}
          height={295}
        />
      </SwiperSlide>

    </Swiper>
  );
}
