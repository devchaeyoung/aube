import type { Metadata } from "next";
import "./globals.css";
import "swiper/css";
import "swiper/css/pagination";

export const metadata: Metadata = {
  title: "오늘의브랜딩 | 병원 전문 마케팅의 대표 AUBE",
  description:
    "오늘의브랜딩은 의료 산업의 특수성을 고려하여 환자와 의료진에게 신뢰받는 맞춤형 브랜딩 솔루션을 제공하는 전문 기업입니다.",
  keywords: "병원마케팅, 의료마케팅, 병원브랜딩, SNS마케팅, 플레이스마케팅, 예약부도방지, 초진환자관리, 재진율관리",
  authors: [{ name: "안준성" }],
  creator: "오늘의브랜딩",
  publisher: "오늘의브랜딩",
  formatDetection: {
    telephone: true,
    email: true,
  },
  openGraph: {
    title: "오늘의브랜딩 | 병원 전문 마케팅의 대표 AUBE",
    description:
      "오늘의브랜딩은 의료 산업의 특수성을 고려하여 환자와 의료진에게 신뢰받는 맞춤형 브랜딩 솔루션을 제공하는 전문 기업입니다.",
    url: "https://www.todaysbranding.com",
    siteName: "오늘의브랜딩",
    locale: "ko_KR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
