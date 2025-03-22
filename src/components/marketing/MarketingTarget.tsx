"use client";

import Image from "next/image";
import styles from "./MarketingTarget.module.css";

export function MarketingTarget() {
  return (
    <section className={styles.container}>
      <div className={styles.titleSection}>
        <h2>상위 노출 선점, 지금뿐입니다</h2>
        <p className={styles.subtitle}>동일 과목은 받지 않습니다</p>
      </div>

      <div className={styles.darkSection}>
        <div className={styles.contentWrapper}>
          <div className={styles.messageBox}>
            <h3 className={styles.subTitle}>오직 한 병원만을 위한 전략적인 마케팅</h3>
            <p className={styles.description}>
              오늘의 브랜딩은 한 지역, 한 병원과 계약한다는 원칙을 갖고 있습니다.
              <br />
              따라서 동일 과목은 받지 않습니다.
            </p>
          </div>

          <div className={styles.pinImageContainer}>
            <div className={styles.speechBubble}>
              <p>정형 병원과 중복 계약하지 않는 이유가 뭔가요?</p>
            </div>
            <div className={`${styles.speechBubble} ${styles.response}`}>
              <p>
                한 병원의 성공에 집중하기 위해서 입니다.
                <br />
                오늘의 브랜딩은 신뢰를 최우선으로 합니다.
              </p>
            </div>
            <div className={styles.pinImage}>
              <Image src="/assets/map.webp" alt="Location Pin" width={245} height={365} />
            </div>
          </div>
        </div>
      </div>

      {/* <div className={styles.darkSection}>
        <div className={styles.darkContent}>
          <h3 className={styles.subTitle}>오직 한 병원만을 위한 전략적인 마케팅</h3>
          <p className={styles.description}>
            오늘의 브랜딩은 한 지역, 한 병원과 계약한다는 원칙을 갖고 있습니다.
            <br />
            따라서 동일 과목은 받지 않습니다.
          </p>

          <div className={styles.compareBox}>
            <div className={styles.compareItem}>
              <h4>A병원, B병원, C병원</h4>
              <p>모두 동일한 광고 진행</p>
            </div>
            <div className={`${styles.compareItem} ${styles.highlight}`}>
              <h4>단독 병원만을 위한</h4>
              <p>맞춤형 광고 전략 진행</p>
            </div>
          </div>

          <div className={styles.bottomText}>
            <h3>오직 한 병원만을 위한 차별화된 마케팅</h3>
            <p>
              모두 동일한 광고를 원다면 과연 매출이 오를까요?
              <br />
              병원의 과목, 지역, 원장님의 스타일 등에 따라 차별화된 전략이 필요합니다.
              <br />
              우리 병원만을 위한 맞춤 마케팅이 곧 성공의 열쇠입니다.
            </p>
            <p>오늘의 브랜딩, 오직 원장님 병원의 매출 상승을 위한 전략으로 준비되어 있습니다.</p>
          </div>
        </div>
      </div> */}
    </section>
  );
}
