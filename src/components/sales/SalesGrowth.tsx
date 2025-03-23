"use client";

import styles from "./SalesGrowth.module.css";
import Image from "next/image";

export function SalesGrowth() {
  return (
    <section className={styles.salesGrowth}>
      <div className={styles.header} data-aos="fade-up">
        <h2>오늘의 브랜딩이 약속합니다</h2>
        <h3>매출 상승</h3>
      </div>

      <div className={styles.container}>
        <div className={styles.content} data-aos="fade-right">
          <div className={styles.highlight}>
            <h4>신규 개원 병원 3개월 만에 200% 달성</h4>
            <p>고객 수치를 분석하여 매출증대 방법을 제안합니다.</p>
          </div>
        </div>

        <div className={styles.graph} data-aos="fade-left">
          <Image
            src="/assets/sales/graph.webp"
            alt="매출 상승 그래프"
            width={600}
            height={400}
            className={styles.graphImage}
          />
        </div>
      </div>

      <div className={styles.details} data-aos="fade-up">
        <p>지속적인 경기 불황으로 오늘의 브랜딩에 마케팅 의뢰를 맡긴 사례입니다.</p>
        <p>oo 병원 1차 목표 8천 만원, 3개월 만에 목표 이상을 달성했습니다.</p>
        <p>1차 목표 매출을 달성 후 새로운 목표를 재설정 하여 지속적인 매출 증가가 이루어지고 있습니다.</p>
      </div>
    </section>
  );
}
