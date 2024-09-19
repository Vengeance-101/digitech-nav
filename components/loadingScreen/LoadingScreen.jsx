// app/components/LoadingScreen.js
"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

export default function LoadingScreen() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const loadingScreenRef = useRef(null);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setLoadingProgress((oldProgress) => {
        if (oldProgress >= 100) {
          gsap.to(loadingScreenRef.current, {
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
          });
          return 100;
        }
        return oldProgress + 1;
      });
    }, 10); // Control the speed of the counter
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={loadingScreenRef}
      className="fixed  w-full h-full  pointer-events-none flex items-center justify-center bg-black text-white z-[999999] transition-opacity "
    >
      <div className="w-full h-2 overflow-hidden mt-4">
        {/* Dynamic Progress Bar */}
        <div
          className="h-full bg-[red]  w-full transition-all duration-300 ease-out"
          style={{ width: `${loadingProgress}%` }} // Dynamically set width
        ></div>
      </div>
      <div className="text-6xl absolute right-[5%] bottom-[10%] font-bold">
        {loadingProgress}%
      </div>
    </div>
  );
}
