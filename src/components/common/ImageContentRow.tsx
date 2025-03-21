"use client";

import Image from "next/image";
import styles from "./ImageContentRow.module.css";
import { motion } from "framer-motion";

interface ImageContentRowProps {
  imageUrl: string;
  title: string;
  description: string;
  isReversed?: boolean;
  imageAlt?: string;
}

export function ImageContentRow({
  imageUrl,
  title,
  description,
  isReversed = false,
  imageAlt = "설명 이미지",
}: ImageContentRowProps) {
  return (
    <motion.div
      className={`${styles.row} ${isReversed ? styles.reversed : ""}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.imageContainer}>
        <Image src={imageUrl} alt={imageAlt} width={500} height={300} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </motion.div>
  );
}
