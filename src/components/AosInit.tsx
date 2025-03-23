"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AosInit() {
  useEffect(() => {
    AOS.init({
      offset: 50,
      duration: 1000,
      once: false,
      easing: "ease",
      throttleDelay: 100,
      disableMutationObserver: true,
    });
  }, []);

  return null;
}
