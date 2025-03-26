"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import styles from "./BrandingSection.module.css";
import "swiper/css";
import "swiper/css/pagination";
import TitleHeader from "../common/Title";
const brandingData = [
  {
    title: "더 잘합니다",
    description: "블로그 상위 노출은 기본,<br/>차별화된 체계적인 시스템으로<br/>단기간 성장률을 보장합니다.",
  },
  {
    title: "더 자랍니다",
    description:
      "마케팅 업력 10년,<br/>잘 하는 것은 더 잘하고<br/>트렌드에 민감하게 반응하며 <br/>오늘의 브랜딩은 늘 성장합니다.",
  },
  {
    title: "다 잘합니다",
    description: "온라인·오프라인 광고, 인쇄물,<br/>홈페이지 등 오늘의 브랜딩 안에서<br/>한번에 해결할 수 있습니다.",
  },
];

export function BrandingSection() {
  return (
    <section className={styles.branding}>
      <div className={styles.titleContainer}>
        <TitleHeader title="오늘의 브랜딩은" subTitle="[ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ] 합니다" />
      </div>

      <div className={styles.cardContainer}>
        {/* 데스크톱 뷰 */}
        <div className={styles.desktopCards}>
          {brandingData.map((item, index) => (
            <div key={index} className={styles.card} data-aos="fade-up" data-aos-delay={index * 200}>
              <h3>{item.title}</h3>
              <div className={styles.divider} />
              <p dangerouslySetInnerHTML={{ __html: item.description }} />
            </div>
          ))}
        </div>

        {/* 모바일 뷰 */}
        <div className={styles.mobileCards} data-aos="fade-up">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={true}
            loop={false}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className={styles.swiper}
            initialSlide={0}
          >
            {brandingData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className={styles.mobileCardWrapper}>
                  <div className={styles.card}>
                    <h3>{item.title}</h3>
                    <div className={styles.divider} />
                    <p dangerouslySetInnerHTML={{ __html: item.description }} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
