
"use client";

import React, { useState, useEffect } from "react";

interface TyperProps {
  messages: string[];
  typingSpeed?: number;
  pauseTime?: number;
  loop?: boolean;
  textColour?: string;
  className?: string;
}

const Typer: React.FC<TyperProps> = ({
  messages,
  typingSpeed = 40,
  pauseTime = 1500,
  loop = true,
  textColour = "text-white",
  className = "",
}) => {
  const [displayed, setDisplayed] = useState<string>("");
  const [msgIndex, setMsgIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(false);

  useEffect(() => {
    if (msgIndex >= messages.length) return;

    // typing each character
    if (charIndex < messages[msgIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + messages[msgIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }

    // pause at the end
    if (!paused) {
      setPaused(true);
      const timeout = setTimeout(() => {
        setPaused(false);
        setDisplayed(""); // clear
        setCharIndex(0);

        setMsgIndex((prev) => {
          if (loop) return (prev + 1) % messages.length;
          return prev + 1;
        });
      }, pauseTime);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, msgIndex, paused, messages, typingSpeed, pauseTime, loop]);

  return (
    <div className="flex items-center">
      <span
        className={`text-sm md:text-base ${textColour} ${className}`}
      >
        {displayed}
      </span>
    </div>
  );
};

export default Typer;
