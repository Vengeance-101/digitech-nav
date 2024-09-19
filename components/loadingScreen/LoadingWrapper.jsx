// app/components/LoadingWrapper.js
"use client"; // Make this a client-side component

import { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen";
export default function LoadingWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ensure the loading screen is shown until the entire DOM content is loaded
    const handleLoad = () => {
      setLoading(false); // Hide loading screen once all DOM content is loaded
    };

    if (document.readyState === "complete") {
      handleLoad(); // Handle case where the page is already fully loaded
    } else {
      window.addEventListener("load", handleLoad); // Wait for the 'load' event
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      <div className={`${loading && "opacity-100"}`}>
        <LoadingScreen />
      </div>
      {/* Show loading screen while loading */}
      <div className={`${!loading ? "block" : "hidden"} `}>{children}</div>
      {/* Render children once loading is complete */}
    </>
  );
}
