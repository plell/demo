"use client";

import useData from "@/app/store/useData";
import { useEffect } from "react";

const ClickDetector = () => {
  const setMouseDown = useData((s) => s.setMouseDown);

  const handleMouseDown = () => {
    setMouseDown(true);
  };

  const handleMouseUp = () => {
    setMouseDown(false);
  };

  useEffect(() => {
    window.addEventListener("pointerdown", handleMouseDown);
    window.addEventListener("pointerup", handleMouseUp);

    return () => {
      window.removeEventListener("pointerdown", handleMouseDown);
      window.removeEventListener("pointerup", handleMouseUp);
    };
  }, [handleMouseDown, handleMouseUp]);

  return null;
};

export default ClickDetector;
