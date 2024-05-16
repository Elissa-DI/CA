import { motion } from "framer-motion";
import { FC, useState } from "react";

type ButtonProps = {
  label: string;
  onButtonHover: () => void;
  onButtonLeave: () => void;
  hover: boolean;
};

export const Button: FC<ButtonProps> = ({
  label,
  hover,
  onButtonHover,
  onButtonLeave,
}) => {
  return (
    <button
      onMouseEnter={onButtonHover}
      onMouseLeave={onButtonLeave}
      className="relative z-10 flex font-syne font-semibold text-lg items-center overflow-hidden justify-center gap-2 px-7 py-2.5 text-black bg-white outline outline-offset-2 outline-[#FFFFFF80] rounded-full"
    >
      <span
        className={`bg absolute -z-10 w-full rounded-full h-full ${
          hover
            ? "bg-gradient-to-r from-[rgb(206,204,204)] to-[rgb(116,113,113)]"
            : "bg-white"
        }`}
      ></span>
      {hover && (
        <motion.span
          animate={{ scale: [1, 1.5, 1] }}
          transition={{
            duration: 0.7,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeatDelay: 0.5,
          }}
          className="w-4 h-4 rounded-full bg-[#FF000D]"
        ></motion.span>
      )}
      {label}
    </button>
  );
};
