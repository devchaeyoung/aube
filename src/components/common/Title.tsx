import styles from "./Title.module.css";

interface TitleHeaderProps {
  title: string;
  subTitle: string;
}
export default function TitleHeader({ title, subTitle }: TitleHeaderProps) {
  return (
    <div className={styles.titleContainer}>
      <h2 className={styles.title}>{title}</h2>
      <h3 className={styles.subTitle}>{subTitle}</h3>
    </div>
  );
}
