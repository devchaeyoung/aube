"use client";
import styles from "./SalesSection.module.css";

export function SalesSection() {
  return (
    <section className={styles.sales}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h2>마케팅, 이미 해봤는데</h2>
          <h3>매출은 그대로이신가요?</h3>
        </div>

        <div className={styles.contentBox}>
          <div className={styles.textContent}>
            <p>
              많은 업체에서 상위 노출만을 강조합니다.
              <br />
              하지만 <strong>중요한 것은 결국 매출</strong>입니다.
              <br />
              <strong>우리 병원을 선택하고 싶게끔 만드는 것이 핵심입니다.</strong>
            </p>
          </div>

          <div className={styles.circleContainer}>
            <div className={styles.circle}>
              <p>노출 ≠ 매출</p>
            </div>
            <div className={`${styles.circle} ${styles.highlight}`}>
              <div>
                <p>노출 × 전환율</p>
                <p className={styles.result}>매출</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
