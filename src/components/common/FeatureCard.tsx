"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Dot } from "lucide-react";
import { useState, useEffect } from "react";
import BioSection from "./BioSection";

function FeatureCard() {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleTap = () => {
    if (isMobile) {
      setIsActive(!isActive);
    }
  };

  const handleHoverStart = () => {
    if (!isMobile) setIsActive(true);
  };

  const handleHoverEnd = () => {
    if (!isMobile) setIsActive(false);
  };

  return (
    <div className="w-full bg-white z-10 flex flex-col justify-center items-center">
      <div className="flex w-full h-32 items-center justify-center bg-white overflow-hidden">
        <AnimatePresence>
          <Dot className={`${isActive ? "block" : "hidden"} text-pink-500`} />
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={isActive ? { width: "25%", opacity: 1 } : "rest"}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="h-0.5 mr-5 bg-black rounded-full"
          />
        </AnimatePresence>
        <motion.div
          className="relative cursor-pointer"
          animate={isActive ? "active" : "rest"}
          onTap={handleTap}
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
          initial="rest"
        >
          <motion.div
            className="absolute inset-0 border border-dashed border-gray-400 rounded-lg"
            variants={{
              rest: { rotate: 12, scale: 1.1, opacity: 0.5 },
              active: { rotate: 45, scale: 1.25, opacity: 0.8 },
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 15,
              mass: 1.5,
            }}
          />

          <motion.div
            className="relative h-16 w-16 border border-gray-900 bg-gray-50 p-1 z-10"
            variants={{
              rest: { rotate: -6 },
              active: { rotate: 0, scale: 1.1 },
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <motion.div
              className="absolute top-1/2 left-[-15%] right-[-15%] h-px bg-gray-900/30 pointer-events-none z-20"
              variants={{
                active: { scaleX: 1.2, opacity: 0.6 },
                rest: { scaleX: 1, opacity: 0.3 },
              }}
            />
            <motion.div
              className="absolute left-1/2 top-[-15%] bottom-[-15%] w-px bg-gray-900/30 pointer-events-none z-20"
              variants={{
                active: { scaleY: 1.2, opacity: 0.6 },
                rest: { scaleY: 1, opacity: 0.3 },
              }}
            />

            <div className="h-full w-full overflow-hidden bg-white">
              <motion.img
                src="/p.JPG"
                alt="image"
                className="h-full w-full object-cover"
                variants={{
                  rest: { filter: "grayscale(100%)", scale: 1 },
                  active: { filter: "grayscale(0%)", scale: 1.1 },
                }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-gray-900" />
            <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-gray-900" />
          </motion.div>
        </motion.div>
        <AnimatePresence>
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={isActive ? { width: "25%", opacity: 1 } : "rest"}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="h-0.5 ml-5 bg-black rounded-full"
          />
          <Dot className={`${isActive ? "block" : "hidden"} text-pink-500`} />
        </AnimatePresence>
      </div>
      <h2 className="scroll-m-20 text-center -mt-4 text-2xl font-extrabold tracking-tight text-balance">
        Hello
      </h2>
      <h2 className="scroll-m-20 text-center text-3xl font-extrabold tracking-tight text-balance">
        I am <span className="text-yellow-400">Raj</span>
      </h2>
      <BioSection>I build scalable applications, optimized backend systems, and full-stack solutions with a focus on performance and clean engineering.</BioSection>
    </div>
  );
}

export default FeatureCard;