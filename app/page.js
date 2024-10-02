"use client";
import Banner from "@/components/Banner/Banner";
import Header from "@/components/headerComponents/Header";
import { StateProvider } from "@/utils/context/StateContext";
import Lenis from "lenis";
import { useEffect } from "react/";
export default function Home() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    // Scroll event listener
    lenis.on("scroll", (e) => {
      // You can add custom scroll behavior here if needed
    });

    // RAF loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    // Start the animation loop
    requestAnimationFrame(raf);
  });

  return (
    <div className="font-charlie h-auto w-full">
      <StateProvider>
        <Header />
      </StateProvider>
      <Banner />
    </div>
  );
}
