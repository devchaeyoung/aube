"use client";

import Image from "next/image";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <>
      <section className={styles.hero}>
        <Image src="/background/banner.webp" alt="배경 이미지" fill priority className={styles.backgroundImage} />
        <Image
          src="/background/banner_mobile.webp"
          alt="배경 이미지 모바일"
          fill
          priority
          className={styles.backgroundImageMobile}
        />
        <div className={styles.heroContent} data-aos="fade-up">
          <h1 className={styles.title} data-aos="fade-up" data-aos-delay="200">
            병원 전문 마케팅의 대표
            <span className={styles.brandName}>AUBE</span>
          </h1>
          <p className={styles.description} data-aos="fade-up" data-aos-delay="400">
            오브는 의료 산업의 특수성을 고려하여
            <br />
            환자와 의료진에게 신뢰받는 맞춤형 브랜딩 솔루션을 제공하는 전문 기업입니다.
          </p>
        </div>
      </section>
      <div className={styles.line} data-aos="fade-up" data-aos-delay="600">
        <svg width="12" height="179" viewBox="0 0 12 179" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.00001 167.667C3.05449 167.667 0.666674 170.054 0.666674 173C0.666674 175.946 3.05449 178.333 6.00001 178.333C8.94553 178.333 11.3333 175.946 11.3333 173C11.3333 170.054 8.94553 167.667 6.00001 167.667ZM5 4.37114e-08L5.00001 173L7.00001 173L7 -4.37114e-08L5 4.37114e-08Z"
            fill="white"
          />
        </svg>
      </div>
    </>
  );
}
