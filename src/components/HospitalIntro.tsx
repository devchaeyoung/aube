"use client";

import styles from "./HospitalIntro.module.css";

export function HospitalIntro() {
  return (
    <section className={styles.intro}>
      <div className={styles.content}>
        <div className={styles.questionBox}>
          <h2 className={styles.question}>원장님, 병원을 운영하면서 가장 큰 고민이 무엇인가요?</h2>
          <div className={styles.answerBox}>
            <p className={styles.answer}>
              환자가 줄어들까 봐, 매출이 떨어질까 봐, 제대로 된 마케팅을 해야 하는데 방법을 몰라서...
              <br />
              하루에도 수십 번 고민하셨을 겁니다.
            </p>
            <div className={styles.details}>
              <p>물리치료사로 수십은 환자를 만나며 환자가 병원을 선택하는 이유를 알게 되었고,</p>
              <p>병원 관리와 오픈병원을 경험하면서 성공하는 병원과 실패하는 병원의 차이를 눈으로도 배웠습니다.</p>
              <p>광고 하나로 환자가 늘어나는 병원은 없습니다.</p>
              <p>병원의 운영을 이해하고, 환자가 신뢰할 수 있도록 돕는 마케팅이 필요합니다.</p>
            </div>
          </div>
        </div>

        <div className={styles.highlightBox}>
          <h3>마케팅은 환자와 병원을 이어주는 가장 중요한 다리입니다.</h3>
          <p>
            병원은 단순한 &apos;비즈니스&apos;가 아닙니다.
            <br />
            환자를 살리는 공간이며, 원장님의 사명과 꿈이 담긴 곳입니다.
          </p>
          <p>
            저는 원장님과 같은 시선으로 병원을 바라봅니다.
            <br />
            그리고 진짜 필요한 환자들이 원장님을 찾을 수 있도록 돕는 것이 제가 해야 할 일이라고 믿습니다.
          </p>
        </div>

        <div className={styles.pointsBox}>
          <div className={styles.point}>
            그냥 광고를 집행하는 것에서 끝나는 게 아니라, 병원의 브랜드를 만들겠습니다.
          </div>
          <div className={styles.point}>원장님의 철학과 진료 가치를 환자들이 느낄 수 있도록 기획하겠습니다.</div>
          <div className={styles.point}>
            병원이 단기적인 마케팅에 흔들리지 않도록, 지속적인 성장을 만들어 드리겠습니다.
          </div>
        </div>

        <div className={styles.signature}>
          <span>대표</span>
          <span className={styles.name}>안준성</span>
        </div>
      </div>
    </section>
  );
}
