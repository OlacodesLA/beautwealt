"use client";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import StaggerChildren, { childVariants } from "@/animations/staggerChildren";
import { AnimatePresence, motion } from "framer-motion";
import { StaggerText } from "@/animations/staggerText";
import { useEffect, useState } from "react";

export default function Home() {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPulse(true);
    }, 7000);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <main className={pulse ? "animate-pulse" : ""}>
        <StaggerChildren className="flex flex-col w-screen  h-screen items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
            }}
            exit={{ opacity: 0 }}
          >
            <img
              className="object-cover w-40"
              src="/logo.png"
              alt="Beautwealt Logo"
            />
          </motion.div>
          <motion.div
            variants={childVariants}
            className="relative w-[200px] h-[30px]"
          >
            <div className="absolute bg-blue-950 skew-x-12 w-[200px] h-[30px]"></div>
            <div className="absolute flex justify-center w-full h-full">
              <StaggerText
                once
                text="Coming soon..."
                el="p"
                className="italic font-bold text-white mt-[1.8px]"
              />
            </div>
          </motion.div>

          <ul className="mt-2 flex justify-center w-full items-center space-x-2">
            {socials.map((social, i) => (
              <motion.li
                key={i}
                initial={{
                  opacity: 0,
                  translateY: 100,
                }}
                animate={{
                  opacity: 1,
                  translateY: 0,
                }}
                transition={{
                  duration: 0.3,
                  delay: i * 0.2 + 2,
                }}
                className="text-base text-center cursor-pointer text-blue-950"
              >
                <Link target="_blank" href={social.href}>
                  {social.icon}
                </Link>
              </motion.li>
            ))}
          </ul>
        </StaggerChildren>
      </main>
    </AnimatePresence>
  );
}

export const socials = [
  {
    id: 1,
    icon: <Facebook />,
    href: "https://web.facebook.com/groups/2230605173831215/",
  },
  {
    id: 2,
    icon: <Twitter />,
    href: "https://twitter.com/BeautWealt_?s=08",
  },
  {
    id: 3,
    icon: <Instagram />,
    href: "https://www.instagram.com/beautwealt_electronics/",
  },
];
