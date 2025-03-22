"use client";

import Image from "next/image";
import styles from "./MarketingProcess.module.css";

export function MarketingProcess() {
  return (
    <section className={styles.container}>
      <div className={styles.titleSection}>
        <h2>A-Z 까지 필요한건 다 준비했습니다</h2>
        <p className={styles.subtitle}>원장님은 진료만 보세요</p>
      </div>

      <div className={styles.contentSection}>
        <div className={styles.contentWrapper}>
          <div className={styles.leftContent}>
            <div className={styles.contentBox}>
              <div className={styles.imageBox}>
                <div className={`${styles.imageWrapper} ${styles.alignLeft}`}>
                  <Image
                    src="/assets/marketingProcess/image1.png"
                    alt="타사 블로그 포스팅"
                    width={280}
                    height={220}
                    className={styles.image}
                  />
                </div>

                <div className={styles.textContent}>
                  <h3>타사</h3>
                  <p>일반적인 정보 전달형 포스팅</p>
                </div>
              </div>

              <div className={`${styles.imageBox} ${styles.largeImage}`}>
                <div className={`${styles.imageWrapper} ${styles.alignRight}`}>
                  <Image
                    src="/assets/marketingProcess/image2.png"
                    alt="오늘의 브랜딩"
                    width={380}
                    height={260}
                    className={styles.image}
                  />
                </div>
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
              <h2>BLOG POSTING</h2>
              <p>
                오늘의 브랜딩은 의료인의 직접 시술이나 의료 서비스에 대한 전문 지식을 포스팅 합니다. 신뢰감을 바탕으로
                제작된 블로그 관리를 시작해보세요.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.processSection}>
        <div className={styles.processBox}>
          <div className={styles.processContent}>
            <div className={styles.processText}>
              <h3>재진율을 올려주는 컨텐츠 시스템</h3>
              <h2>PLACE MARKETING</h2>
              <p>
                검색 시 보이는 이미지는 우리 병원의 첫인상입니다.
                <br />
                고객의 선택에 가장 많은 비중을 차지하는 플레이스부터
                <br />
                인테리어 이미지까지, 오늘의 브랜딩은 신뢰감을 주는 첫인상을 만들어 드립니다.
              </p>
            </div>
            <div className={styles.processImage}>
              <Image
                src="/assets/marketingProcess/place-marketing.png"
                alt="플레이스 마케팅"
                width={500}
                height={400}
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
