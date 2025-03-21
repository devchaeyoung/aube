"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import styles from "./BrandingSection.module.css";
import "swiper/css";
import "swiper/css/pagination";

const brandingData = [
  {
    title: "더 잘합니다",
    description: "블로그 상위 노출은 기본, 차별화된 체계적인 시스템으로 단기간 성장을 보장합니다.",
  },
  {
    title: "더 자랍니다",
    description: "마케팅 업력 10년, 잘 하는 것은 더 전문적으로 트렌드에 맞춰 인정하게 만듭니다.",
  },
  {
    title: "다 잘합니다",
    description: "온라인·오프라인 광고, 인세플, 홈페이지 등 오늘날 병원 마케팅 전반에서 해결할 수 있습니다.",
  },
];

export function BrandingSection() {
  return (
    <section className={styles.branding}>
      <h2 className={styles.title}>
        오늘의 브랜딩은
        <br />
        <span className={styles.highlight}>[ AUBE ]</span>
        입니다
      </h2>

      <div className={styles.cardContainer}>
        {/* 데스크톱 뷰 */}
        <div className={styles.desktopCards}>
          {brandingData.map((item, index) => (
            <div key={index} className={styles.card}>
              <h3>{item.title}</h3>
              <div className={styles.divider} />
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        {/* 모바일 뷰 */}
        <div className={styles.mobileCards}>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className={styles.swiper}
          >
            {brandingData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className={styles.card}>
                  <h3>{item.title}</h3>
                  <div className={styles.divider} />
                  <p>{item.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
