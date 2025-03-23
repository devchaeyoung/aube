"use client";

import { motion } from "framer-motion";
import styles from "./MarketingSection.module.css";
import Image from "next/image";

export function MarketingSection() {
  return (
    <section className={styles.marketing}>
      <div className={styles.titleContainer}>
        <h2>그거 아세요?</h2>
        <h3>병원 마케팅, 끝난 뒤가 진짜 시작입니다</h3>
      </div>

      <div className={styles.cardContainer}>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.cardHeader}>
            <span className={styles.checkLabel}>Check 01</span>
            <h3>방문자 수 관리</h3>
          </div>
          <p>
            소비자는 많은 사람들에게 공유되는 정보를 신뢰합니다.
            <br />
            오늘의 브랜딩은 <strong>방문자들이 유입</strong>되는 포스팅을 합니다.
          </p>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className={styles.cardHeader}>
            <span className={styles.checkLabel}>Check 02</span>
            <h3>소비자 모니터링</h3>
          </div>
          <p>
            어떤 글이 반응이 좋았는지 매일 더를 체크하며
            <br />
            <strong>소비자 니즈 분석</strong>을 통한 맞춤 포스팅을 진행합니다.
          </p>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className={styles.cardHeader}>
            <span className={styles.checkLabel}>Check 03</span>
            <h3>월간 보고서 제공</h3>
          </div>
          <p>
            월간, 주간 반영 지수를 보며 <strong>월간 보고서</strong>를 작성하여
            <br />
            마케팅 진행 상황을 공유합니다.
          </p>
        </motion.div>

        <div className={styles.polygon}>
          <svg width="68" height="54" viewBox="0 0 68 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M42.0737 49.0971C38.079 54.5632 29.921 54.5632 25.9263 49.0971L2.31914 16.795C-2.50949 10.1879 2.20935 0.894532 10.3929 0.894532L57.6072 0.894537C65.7907 0.894537 70.5095 10.1879 65.6809 16.795L42.0737 49.0971Z"
              fill="#62FDE3"
            />
          </svg>
        </div>
        <motion.div
          className={styles.highlightCard}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3>매출 전략 강화</h3>
          <p>
            매 월 첫 째주 회의를 통해 월간 그래프를 분석하여
            <br />
            앞으로의 전략과 방향을 제시하고 실행합니다.
          </p>
        </motion.div>

        <motion.div
          className={styles.imageContainer}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Image
            src="/assets/marketingSection/image-group.png"
            alt="마케팅 전략 이미지"
            width={800}
            height={400}
            className={styles.groupImage}
          />
        </motion.div>
      </div>
    </section>
  );
}
