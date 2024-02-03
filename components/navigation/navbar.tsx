"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
// import { perspective, slideIn } from "./anim";
import { footerLinks } from "./data";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav>
      <div className="flex flex-col items-start justify-between pt-[100px] px-[40px] pb-[50px] h-full box-border">
        <div className="flex gap-3 justify-start items-start flex-col"></div>
        <motion.div className="flex flex-wrap">
          {footerLinks.map((link, i) => {
            const { title, href } = link;
            return (
              <motion.a
                // variants={slideIn}
                custom={i}
                initial="initial"
                animate="enter"
                exit="exit"
                key={`f_${i}`}
                className="w-1/2 m"
              >
                {title}
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
