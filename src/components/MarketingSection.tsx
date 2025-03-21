"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import styles from "./MarketingSection.module.css";
import "swiper/css";
import "swiper/css/pagination";

const marketingData = [
  {
    title: "관심 영역",
    description: "병원을 내원하기 전에 99%의 고객은 검색을 통해 정보를 수집합니다.",
    image: "/assets/marketingSection/image1.webp",
    highlight: "첫 페이지에 우리 병원이 보이도록, 방문하는 고객의 수 증가",
  },
  {
    title: "비교 영역",
    description: "나에게 유리한 병원은 어디지 선택 기준을 정하여 수집된 정보를 비교합니다.",
    image: "/assets/marketingSection/image2.webp",
    highlight: "전문적인 정보성 포스팅과 신뢰감이 드는 디자인으로 확신",
  },
  {
    title: "행동 영역",
    description: "최종 선택한 병원을 방문합니다.",
    image: "/assets/marketingSection/image3.webp",
    highlight: "마지막까지 고객을 놓치지 않도록, 편리한 예약시스템 마련",
  },
];

export function MarketingSection() {
  return (
    <section className={styles.marketing}>
      <div className={styles.header}>
        <h2>마케팅 광고 1위 업체</h2>
        <h3>왜 이렇게 많아?</h3>
        <p>
          서로가 1등이라고 하는데 막상 어떤 기준으로 골라야 할지 고민되시죠?
          <br />
          지금은 &apos;의료 쇼핑 시대&apos;
          <br />
          고객이 어떻게 이동하는지 파악할 줄 아는 마케팅 업체를 선택하셔야 합니다.
        </p>
      </div>

      {/* 데스크톱 뷰 */}
      <div className={styles.desktopContent}>
        {marketingData.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardHeader}>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
            <div className={styles.imageWrapper}>
              <Image src={item.image} alt={item.title} width={300} height={300} />
            </div>
            <p className={styles.highlight}>{item.highlight}</p>
          </div>
        ))}
      </div>

      {/* 모바일 뷰 */}
      <div className={styles.mobileContent}>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className={styles.swiper}
        >
          {marketingData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
                <div className={styles.imageWrapper}>
                  <Image src={item.image} alt={item.title} width={300} height={300} />
                </div>
                <p className={styles.highlight}>{item.highlight}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={styles.footer}>
        <p>고객은 나에게 유리한 병원을 선택하기 위해 다양한 단계를 거칩니다.</p>
        <p>오늘의 브랜딩은 정확한 나즈 분석으로 우리 병원이 선택될 수밖에 없도록 설계합니다.</p>
      </div>
    </section>
  );
}
