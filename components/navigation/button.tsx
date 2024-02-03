"use client";
import { motion } from "framer-motion";

const Button = ({ isActive, toggleMenu }) => {
  return (
    <div className="absolute top-0 w-[100px] h-[40px] cursor-pointer rounded-[40px] overflow-hidden">
      <motion.div
        className="relative w-full h-full"
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <div
          className="group w-full h-full bg-[#c9fd74]"
          onClick={() => {
            toggleMenu();
          }}
        >
          <PerspectiveText label="Menu" />
        </div>
        <div
          className="bg-black"
          onClick={() => {
            toggleMenu();
          }}
        >
          <PerspectiveText label="Close" />
        </div>
      </motion.div>
    </div>
  );
};
export default Button;

function PerspectiveText({ label }) {
  return (
    <div className="group-hover:rotate-90">
      <p className="m-0 group-hover:-translate-y-[100px] opacity-0">{label}</p>
      <p className="m-0 text-[#c9fd74] group-hover:opacity-100">{label}</p>
    </div>
  );
}
