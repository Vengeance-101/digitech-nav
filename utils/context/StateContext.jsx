"use client";

import { createContext, useContext, useState } from "react";
const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [activeSub, setactiveSub] = useState("Development Training");
  const [slider, setslider] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleActiveLink = (link) => {
    setactiveSub(link);
  };
  const handleSlider = () => {
    setslider(!slider);
  };
  const [toggle, settoggle] = useState(false);
  const handleToggle = () => {
    settoggle(!toggle);
  };
  return (
    <StateContext.Provider
      value={{
        activeSub,
        setactiveSub,
        slider,
        setslider,
        isScrolled,
        setIsScrolled,
        handleActiveLink,
        handleSlider,
        toggle,
        settoggle,
        handleToggle,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useData = () => useContext(StateContext);
