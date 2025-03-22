"use client";

import Image from "next/image";
import styles from "./MarketingProcess.module.css";

interface ContentCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

function ContentCard({ imageUrl, title, description }: ContentCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={imageUrl} alt={title} width={300} height={200} className={styles.cardImage} />
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
}

export function MarketingProcess() {
  return (
    <section className={styles.container}>
      <div className={styles.titleSection}>
        <h2>A-Z 까지 필요한건 다 준비했습니다</h2>
        <p className={styles.subtitle}>원장님은 진료만 보세요</p>
      </div>

      <div className={styles.contentSection}>
        <div className={styles.leftContent}>
          <div className={styles.contentBox}>
            <div className={styles.imageBox}>
              <Image
                src="/assets/marketingProcess/image1.png"
                alt="타사 블로그 포스팅"
                width={280}
                height={220}
                className={styles.image}
              />
              <div className={styles.textContent}>
                <h3>타사</h3>
                <p>일반적인 정보 전달형 포스팅</p>
              </div>
            </div>

            <div className={`${styles.imageBox} ${styles.largeImage}`}>
              <Image
                src="/assets/marketingProcess/image2.png"
                alt="오늘의 브랜딩"
                width={380}
                height={260}
                className={styles.image}
              />
              <div className={styles.textContent}>
                <h3>오늘의 브랜딩</h3>
                <p>전문지식이 접목된 칼럼형 포스팅</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.rightContent}>
          <div className={styles.rightBox}>
            <h3>신뢰가 느껴지는 전문 지식 컬럼 포스팅</h3>
            <p>
              오늘의 브랜딩은 의료인의 직접 시술이나 의료 서비스에 대한 전문 지식을 포스팅 합니다. 신뢰감을 바탕으로
              제작된 블로그 관리를 시작해보세요.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
