"use client";

import { useState } from "react";
import Image from "next/image";
import Navigation from "./Navigation";
import { AnimatePresence, motion } from "motion/react";

export default function HamburgerButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="sm:hidden z-50 relative flex items-center text-neutral-400 hover:text-white"
      >
        <Image
          src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
          alt="toggle"
          width={24}
          height={24}
          className="w-6 h-6"
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-full left-0 z-40 w-full bg-primary/90 sm:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <nav className="px-6 py-8">
              <Navigation />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
