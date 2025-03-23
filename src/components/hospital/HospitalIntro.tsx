"use client";

import Image from "next/image";
import styles from "./HospitalIntro.module.css";
import { Sign } from "./Sign";

export function HospitalIntro() {
  return (
    <section className={styles.intro}>
      <div className={styles.circleWrapper} data-aos="fade-right">
        <Image src="/assets/circle.png" alt="원" width={339} height={1100} />
      </div>
      <div className={styles.content}>
        <div className={styles.questionBox} data-aos="fade-up">
          <div className={styles.imageWrapper}>
            <Image src="/assets/frame.png" alt="따옴표" width={180} height={140} />
          </div>
          <h2 className={styles.question}>
            원장님, 병원을 운영하면서 <br />
            가장 큰 고민이 무엇인가요?
          </h2>
          <div className={styles.answerBox}>
            <p className={styles.answer} data-aos="fade-up" data-aos-delay="200">
              환자가 줄어들까 봐, 매출이 떨어질까 봐, 제대로 된 마케팅을 해야 하는데 방법을 몰라서...
              <br />
              하루에도 수십 번 고민하셨을 겁니다.
            </p>
            <div className={styles.details} data-aos="fade-up" data-aos-delay="400">
              <p>
                <strong>물리치료사로 수많은 환자를 만나며</strong> 환자가 병원을 선택하는 이유를 알게 되었고,
              </p>
              <p>병원 관리와 오픈병원을 경험하면서 성공하는 병원과 실패하는 병원의 차이를 눈으로도 배웠습니다.</p>
              <p style={{ paddingTop: "1rem" }}>광고 하나로 환자가 늘어나는 병원은 없습니다.</p>
              <p>병원의 운영을 이해하고, 환자가 신뢰할 수 있도록 돕는 마케팅이 필요합니다.</p>
            </div>
          </div>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.highlightBox} data-aos="fade-up" data-aos-delay="600">
            <h3 className={styles.highlightTitle}>
              마케팅은 환자와 병원을 이어주는 <br />
              가장 중요한 다리입니다.
            </h3>
            <p>
              <strong>병원은 단순한 &apos;비즈니스&apos;가 아닙니다.</strong>
              <br />
              <strong>환자를 살리는 공간이며, 원장님의 사명과 꿈이 담긴 곳입니다.</strong>
            </p>
            <p>
              저는 원장님과 같은 시선으로 병원을 바라봅니다.
              <br />
              그리고 진짜 필요한 환자들이 원장님을 찾을 수 있도록 돕는 것이 제가 해야 할 일이라고 믿습니다.
            </p>
          </div>

          <div className={styles.pointsBox} data-aos="fade-up" data-aos-delay="800">
            <div className={styles.point}>
              그냥 광고를 집행하는 것에서 끝나는 게 아니라,
              <strong>병원의 브랜드를 만들겠습니다.</strong>
            </div>
            <div className={styles.point}>
              <strong>원장님의 철학과 진료 가치</strong>를 환자들이 느낄 수 있도록 기획하겠습니다.
            </div>
            <div className={styles.point}>
              병원이 단기적인 마케팅에 흔들리지 않도록,
              <strong>지속적인 성장</strong>을 만들어 드리겠습니다.
            </div>
          </div>
        </div>

        <div className={styles.signature} data-aos="fade-up" data-aos-delay="1000">
          <Sign />
        </div>
      </div>
    </section>
  );
}
