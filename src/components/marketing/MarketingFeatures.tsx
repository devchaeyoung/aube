"use client";

import { ImageContentRow } from "../common/ImageContentRow";
import styles from "./MarketingFeatures.module.css";

const features = [
  {
    imageUrl: "/assets/marketing/feature1.webp",
    title: "전문적인 블로그 포스팅",
    description: "신뢰감을 바탕으로 제작된 블로그 관리로 전문성을 어필합니다.",
  },
  {
    imageUrl: "/assets/marketing/feature2.webp",
    title: "플레이스 마케팅",
    description:
      "고객의 선택에 가장 많은 비중을 차지하는 플레이스 성내원부터 인테리어 이미지까지, 오늘의 브랜딩은 신뢰감을 주는 첫인상을 만들어 드립니다.",
    isReversed: true,
  },
  // 추가 피처들...
];

export function MarketingFeatures() {
  return (
    <section className={styles.features}>
      <h2 className={styles.sectionTitle}>A-Z 까지 필요한건 다 준비했습니다</h2>
      <h2 className={styles.sectionTitle}>원장님은 진료만 보세요</h2>
      <div className={styles.featureList}>
        {features.map((feature, index) => (
          <ImageContentRow key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}
