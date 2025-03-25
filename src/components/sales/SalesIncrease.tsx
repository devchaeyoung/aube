"use client";

import styles from "./SalesIncrease.module.css";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

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
    src: "/assets/scrollImages/scroll-image8.webp",
    alt: "이미지1",
  },
  {
    src: "/assets/scrollImages/scroll-image9.webp",
    alt: "이미지2",
  },
  {
    src: "/assets/scrollImages/scroll-image10.webp",
    alt: "이미지3",
  },
  {
    src: "/assets/scrollImages/scroll-image11.webp",
    alt: "이미지4",
  },
];

export function Counter({ value, isInView, type }: { value: string; isInView: boolean; type: "sales" | "percent" }) {
  const [count, setCount] = useState(0);
  const targetValue = parseInt(value.replace(/,/g, ""));

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const step = Math.ceil(targetValue / 50);
      const timer = setInterval(() => {
        start += step;
        if (start > targetValue) {
          setCount(targetValue);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 20);

      return () => clearInterval(timer);
    }
  }, [isInView, targetValue]);

  return <span>{type === "sales" ? count.toLocaleString() + "만원" : count + "%"}</span>;
}

function SalesCard({ item, index }: { item: (typeof salesData)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div ref={ref} className={styles.card} data-aos="fade-up" data-aos-delay={index * 200}>
      <div className={styles.hospitalName}>
        <span>{item.name}</span>
      </div>
      <div className={styles.salesInfo}>
        <span className={styles.label}>월 매출</span>
        <span className={styles.amount}>
          <Counter value={item.initialSales} isInView={isInView} type="sales" />
        </span>
      </div>
      <div className={styles.arrow}>
        <Image src="/assets/arrow.png" alt="화살표" width={40} height={40} />
      </div>
      <div className={styles.peridBox}>
        <div className={styles.period}>
          <span>{item.period}</span>
        </div>
        <div className={styles.finalSales}>
          <Counter value={item.finalSales} isInView={isInView} type="sales" />
        </div>
      </div>

      <div className={styles.increase}>
        <Counter value={item.increase} isInView={isInView} type="percent" />
      </div>
    </div>
  );
}

export function SalesIncrease() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <section className={styles.salesIncrease}>
        <div className={styles.container}>
          {salesData.map((item, index) => (
            <SalesCard key={index} item={item} index={index} />
          ))}
        </div>
      </section>
      <div className={styles.imageScroll} data-aos="fade-up" ref={scrollRef}>
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
