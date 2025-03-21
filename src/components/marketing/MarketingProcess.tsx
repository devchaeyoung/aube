"use client";

import { ImageContentRow } from "../common/ImageContentRow";
import styles from "./MarketingProcess.module.css";

export function MarketingProcess() {
  return (
    <section className={styles.container}>
      <div className={styles.titleSection}>
        <h2>A-Z 까지 필요한건 다 준비했습니다</h2>
        <p className={styles.subtitle}>원장님은 진료만 보세요</p>
      </div>

      <div className={styles.contentSection}>
        <ImageContentRow
          imageUrl="/assets/marketing/blog-posting.webp"
          title="타사 블로그 포스팅"
          description="일반적인 정보 전달형 포스팅으로 고객에게 신뢰를 주기 어렵습니다."
        />

        <ImageContentRow
          imageUrl="/assets/marketing/our-posting.webp"
          title="오늘의 브랜딩"
          description="전문지식이 접목된 칼럼형 포스팅으로 고객에게 전문성과 신뢰감을 전달합니다."
          isReversed
        />
      </div>
    </section>
  );
}
