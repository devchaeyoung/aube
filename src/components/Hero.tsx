"use client";

import Image from "next/image";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <Image src="/background/banner.webp" alt="배경 이미지" fill priority className={styles.backgroundImage} />
      <Image
        src="/background/banner_mobile.jpg"
        alt="배경 이미지 모바일"
        fill
        priority
        className={styles.backgroundImageMobile}
      />
      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          병원 전문 마케팅의 대표
          <span className={styles.brandName}>AUBE</span>
        </h1>
        <p className={styles.description}>
          오늘날 의료 산업의 특수성을 고려하여
          <br />
          환자와 의료진에게 신뢰받는 맞춤형 브랜딩 솔루션을 제공하는 전문 기업입니다.
        </p>
      </div>
    </section>
  );
}
