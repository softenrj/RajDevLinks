"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { ContactSheet } from "./ContactSheet";
import ConstructionBanner from "./ConstructionBanner";

export default function Heading() {
  const [open,setOpen] = React.useState<boolean>(false);
  const handleClose = () => setOpen(false)
  const [openBanner, setOpenBanner] = React.useState<boolean>(false);
  const handleCloseBanner = () => setOpenBanner(false)

  return (
    <>
    <div className="relative flex w-full flex-col items-center justify-center min-h-[80vh] z-10 p-10 pt-[60%]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center text-center mb-12"
      >
        <span className="text-yellow-500/80 font-mono text-sm tracking-[0.3em] uppercase mb-4">
          Connect with
        </span>

        <h1 className="text-white text-6xl md:text-9xl font-serif tracking-tighter italic opacity-90 drop-shadow-2xl">
          Raj Sharma
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="flex gap-8 mb-16"
      >
        <a href="https://www.instagram.com/raj_s.e?igsh=YjZqZmVsd3kwNWsx">
          <VintageIcon icon="skill-icons:instagram" />
        </a>
        <a href="https://www.facebook.com/share/1BeSWL4QxY/">
          <VintageIcon icon="logos:facebook" />
        </a>
        <a href="https://www.linkedin.com/in/raj-sharma-23447527b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <VintageIcon icon="skill-icons:linkedin" />
        </a>
        <a href="https://wa.me/918360206237">
          <VintageIcon icon="logos:whatsapp-icon" />
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="flex flex-col md:flex-row gap-6 w-full max-w-2xl justify-center items-center"
      >
        <a href="https://github.com/" className="w-full" target="_blank">
          <VintageButton text="GitHub" />
        </a>
        <VintageButton text="Portfolio" primary onClick={() => setOpenBanner(true)} />
        <VintageButton text="Contact" onClick={() => setOpen(true)} />
      </motion.div>
    </div>
    <ContactSheet open={open} onClose={handleClose} />
    <ConstructionBanner open={openBanner} onClose={handleCloseBanner} /></>
  );
}

function VintageIcon({ icon }: { icon: string }) {
  return (
    <div className="group relative cursor-pointer">
      <Icon
        icon={icon}
        width={24}
        height={24}
        className="text-gray-400 filter grayscale brightness-150 contrast-125 transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110 opacity-70 group-hover:opacity-100"
      />
    </div>
  );
}

function VintageButton({ text, primary = false, ...attributes }: { text: string, primary?: boolean } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...attributes} className={`
      relative group overflow-hidden px-8 py-3 w-full md:w-auto min-w-40 cursor-pointer
      font-mono text-sm tracking-[0.2em] uppercase border transition-all duration-500
      ${primary
        ? "border-white text-black bg-white hover:bg-transparent hover:text-white"
        : "border-gray-600 text-gray-300 hover:border-white hover:text-white"
      }
    `}>
      <span className="relative z-10">{text}</span>

      {!primary && (
        <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left -z-0" />
      )}
      {!primary && (
        <span className="absolute inset-0 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-center justify-center">
          {text}
        </span>
      )}
    </button>
  );
}