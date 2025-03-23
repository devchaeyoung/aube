"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Contact.module.css";

interface FormData {
  businessName: string;
  name: string;
  phone: string;
  message: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    businessName: "",
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 폼 제출 로직 구현
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header} data-aos="fade-up">
          <h2>죄송합니다. 현재 문의 연락이 많습니다.</h2>
          <h3>
            지역별 <strong style={{ color: "#62fde3" }}>선착순 단 1곳만 계약 가능</strong> 합니다.
          </h3>
        </div>

        <div className={styles.content}>
          <div className={styles.left} data-aos="fade-right">
            <div className={styles.contactInfo}>
              <div className={styles.infoItem}>
                <h3>오늘의 브랜딩은</h3>
                <h3>오늘이 가장 유리합니다.</h3>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.contactLink}>
                  <Image src="/assets/contact.png" alt="phone" width={40} height={40} className={styles.icon} />
                  <a href="tel:010-3018-1144">010 . 3018 . 1144</a>
                </div>
                <div className={styles.contactLink}>
                  <Image src="/assets/message.png" alt="email" width={40} height={40} className={styles.icon} />
                  <a href="mailto:aube_korea@naver.com">aube_korea@naver.com</a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.right} data-aos="fade-left">
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label>
                  상호명 <span className={styles.required}>*</span>
                </label>
                <input type="text" name="businessName" value={formData.businessName} onChange={handleChange} required />
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>
                    성함 <span className={styles.required}>*</span>
                  </label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className={styles.formGroup}>
                  <label>
                    연락처 <span className={styles.required}>*</span>
                  </label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label>
                  상담 내용 및 필요 서비스를 입력해 주세요 <span className={styles.required}>*</span>
                </label>
                <textarea name="message" value={formData.message} onChange={handleChange} required />
              </div>
              <button type="submit" className={styles.submitButton}>
                문의하기
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
