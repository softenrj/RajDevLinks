"use client";

import { Icon } from "@iconify/react";
import { motion } from "motion/react";
import type { Variants } from "motion/react";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "../ui/sheet";
import React from "react";


const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
    },
  },
};

export function ContactSheet({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [result, setResult] = React.useState("");

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("access_key", import.meta.env.VITE_WEB3_ACCESS_KEY);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.success) {
      setResult("Message sent successfully!");
      e.target.reset();
    } else {
      setResult("Something went wrong. Try again.");
    }
  };

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent
        side="bottom"
        className="h-[85vh] md:h-[60vh] bg-white border-t border-neutral-200 p-0 text-neutral-900"
      >
        <div className="h-full w-full overflow-y-auto bg-white">
          <motion.div
            className="max-w-4xl mx-auto px-6 py-12 md:py-16"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <SheetHeader className="mb-12 text-center space-y-4">
              <motion.div variants={itemVariants}>
                <SheetTitle className="text-4xl md:text-6xl font-serif text-neutral-900 tracking-tight italic">
                  Get in Touch
                </SheetTitle>
              </motion.div>
              <motion.div variants={itemVariants}>
                <SheetDescription className="text-amber-600 font-mono tracking-[0.2em] uppercase text-xs">
                  Reach out anytime.
                </SheetDescription>
              </motion.div>
            </SheetHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <motion.div className="space-y-8" variants={itemVariants}>
                <h3 className="text-xl font-serif text-neutral-900 border-b border-neutral-200 pb-4">
                    Social Links
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <SocialCard
                    icon="mdi:github"
                    label="GitHub"
                    handle="softenrj"
                    href="https://github.com/softenrj"
                  />
                  <SocialCard
                    icon="mdi:linkedin"
                    label="LinkedIn"
                    handle="Raj-Sharma"
                    href="https://www.linkedin.com/in/raj-sharma-23447527b"
                  />
                  <SocialCard
                    icon="mdi:instagram"
                    label="Instagram"
                    handle="raj_s.e"
                    href="https://www.instagram.com/raj_s.e"
                  />
                  <SocialCard
                    icon="hugeicons:leetcode"
                    label="Email"
                    handle="Rjsh"
                    href="https://leetcode.com/u/Rajse/"
                  />
                  <SocialCard
                    icon="mdi:email-outline"
                    label="Email"
                    handle="rjsharmase@gmail.com"
                    href="mailto:rjsharmase@gmail.com"
                    fullWidth
                  />
                </div>
              </motion.div>
              <motion.div className="space-y-8" variants={itemVariants}>
                <h3 className="text-xl font-serif text-neutral-900 border-b border-neutral-200 pb-4">
                  Send a Message
                </h3>

                <form className="space-y-8" onSubmit={onSubmit}>
                  <MinimalInput 
                    label="Name" 
                    name="name"
                    placeholder="John Doe" 
                  />

                  <MinimalInput 
                    label="Email" 
                    name="email"
                    placeholder="john@example.com" 
                  />
                  
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                      Message
                    </label>
                    <textarea 
                      name="message"
                      required
                      className="w-full bg-transparent border-b border-neutral-300 text-neutral-900 font-serif text-lg py-2 focus:outline-none focus:border-amber-500 transition-colors resize-none placeholder:text-neutral-400"
                      rows={3}
                      placeholder="Write your message here..."
                    />
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 mt-4 bg-neutral-900 text-white hover:bg-neutral-800 font-mono tracking-[0.2em] uppercase transition-colors"
                  >
                    <span>Transmit Message</span>
                  </motion.button>

                  {result && (
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`text-sm ${result.includes("success") ? "text-green-600" : "text-red-500"}`}
                    >
                      {result}
                    </motion.p>
                  )}
                </form>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function MinimalInput({ label, name, placeholder }: { label: string; name: string; placeholder: string }) {
  return (
    <div className="space-y-2 group">
      <label className="text-xs font-mono text-neutral-500 uppercase tracking-widest group-focus-within:text-amber-600 transition-colors">
        {label}
      </label>
      <input 
        name={name}
        required
        type="text" 
        className="w-full bg-transparent border-b border-neutral-300 text-neutral-900 font-serif text-xl py-2 focus:outline-none focus:border-amber-500 transition-colors placeholder:text-neutral-400"
        placeholder={placeholder}
      />
    </div>
  );
}

function SocialCard({ icon, label, handle, fullWidth = false, href }: { icon: string; label: string; handle: string; fullWidth?: boolean; href: string }) {
  return (
    <motion.a 
      href={href} 
      target="_blank"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
      className={`
        group flex items-center gap-4 p-4 
        border border-neutral-200 bg-neutral-50/50 hover:bg-neutral-100 
        transition-colors cursor-pointer
        ${fullWidth ? "col-span-2" : "col-span-1"}
      `}
    >
      <div className="p-2 bg-white rounded-full border border-neutral-200 group-hover:border-amber-500/50 transition-colors shadow-sm">
        <Icon icon={icon} className="text-neutral-400 group-hover:text-amber-500 transition-colors" width={20} height={20} />
      </div>

      <div className="flex flex-col">
        <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">{label}</span>
        <span className="text-sm font-serif text-neutral-800 group-hover:text-black transition-colors max-w-38 text-ellipsis overflow-hidden">
          {handle}
        </span>
      </div>
    </motion.a>
  );
}