"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import styles from "./MarketingBranding.module.css";

const brandingData = [
  {
    title: "N포털 상위노출",
    description: "'oo 역 정형외과', 'oo 역 안과' 노출의 양에 따라 찾아오는 고객의 수가 확연하게 차이 납니다.",
  },
  {
    title: "블로그 포스팅의 힘",
    description: "전문적인 정보성 포스팅으로 환자들에게 우리 병원의 신뢰도를 높이고, 친근한 접근이 가능하게 합니다.",
  },
  {
    title: "눈길이 가는 디자인",
    description: "결국엔 우리 병원이 선택되도록, 기술적으로 높은 퀄리티의 호감 가는 디자인을 진행합니다.",
  },
];

export function MarketingBranding() {
  return (
    <section className={styles.branding}>
      <div className={styles.titleContainer}>
        <h3>그렇기 때문에, 오늘의 브랜딩</h3>
        <h2>오늘의 브랜딩은 접근 방식부터 다릅니다</h2>
      </div>

      <div className={styles.cardContainer}>
        {/* 데스크톱 뷰 */}
        <div className={styles.desktopCards}>
          {brandingData.map((item, index) => (
            <div key={index} className={styles.card}>
              <h3>{item.title}</h3>
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
                  <p>{item.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <p className={styles.footer}>
        잘 되는 병원을 더 잘 되게 만드는 건 쉽습니다.
        <br />
        하지만 저희는 마케팅에 실망 한 원장님들께 제대로 된 마케팅 효과를 선물하고 싶습니다.
      </p>
    </section>
  );
}
