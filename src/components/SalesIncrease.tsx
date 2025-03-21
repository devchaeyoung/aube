"use client";

import styles from "./SalesIncrease.module.css";
import Image from "next/image";

const salesData = [
  {
    name: "●● 병원",
    initialSales: "8,707",
    period: "5개월 후",
    finalSales: "36,569",
    increase: "320",
  },
  {
    name: "■■ 병원",
    initialSales: "3,782",
    period: "5개월 후",
    finalSales: "13,917",
    increase: "268",
  },
  {
    name: "●● 병원",
    initialSales: "3,590",
    period: "3개월 후",
    finalSales: "8,723",
    increase: "143",
  },
  {
    name: "●● 병원",
    initialSales: "3,952",
    period: "2개월 후",
    finalSales: "7,390",
    increase: "87",
  },
];
const scrollImages = [
  {
    src: "/assets/scrollImages/scroll-image1.webp",
    alt: "이미지1",
  },
  {
    src: "/assets/scrollImages/scroll-image2.webp",
    alt: "이미지2",
  },
  {
    src: "/assets/scrollImages/scroll-image3.webp",
    alt: "이미지3",
  },
  {
    src: "/assets/scrollImages/scroll-image4.webp",
    alt: "이미지4",
  },
  {
    src: "/assets/scrollImages/scroll-image5.webp",
    alt: "이미지5",
  },
  {
    src: "/assets/scrollImages/scroll-image6.webp",
    alt: "이미지6",
  },
  {
    src: "/assets/scrollImages/scroll-image7.webp",
    alt: "이미지7",
  },
];

export function SalesIncrease() {
  return (
    <>
      <section className={styles.salesIncrease}>
        <div className={styles.container}>
          {salesData.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.hospitalName}>
                <span>{item.name}</span>
              </div>
              <div className={styles.salesInfo}>
                <span className={styles.label}>월 매출</span>
                <span className={styles.amount}>{item.initialSales}만원</span>
              </div>
              <div className={styles.arrow} />

              <div className={styles.peridBox}>
                <div className={styles.period}>
                  <span>{item.period}</span>
                </div>
                <div className={styles.finalSales}>
                  <span>{item.finalSales}만원</span>
                </div>
              </div>

              <div className={styles.increase}>
                <span>{item.increase}%</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className={styles.imageScroll}>
        <div className={styles.scrollTrack}>
          {[...scrollImages, ...scrollImages].map((image, index) => (
            <div key={index} className={styles.imageWrapper}>
              <Image
                src={image.src}
                alt={image.alt}
                width={0}
                height={0}
                sizes="100vw"
                className={styles.scrollImage}
                style={{
                  width: "auto",
                  height: "400px",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
