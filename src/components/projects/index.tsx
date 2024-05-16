import Image from "next/image";
import { HorizontalCarousel } from "./horizontalCarousel";
import { useRef, useState } from "react";
import { stagger, useAnimate, motion } from "framer-motion";

export const Projects = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  const [hover, setHover] = useState(false);

  const [scope, animate] = useAnimate();

  const onButtonHover = () => {
    setHover(true);
    animate([
      [
        ".button",
        {
          scaleX: 1.1,
        },
        { duration: 0.7, delay: stagger(0.05) },
      ],
      [".bg", { x: 0 }, { duration: 0.7, delay: stagger(0.05), at: "<" }],
    ]);
  };

  const onButtonLeave = () => {
    setHover(false);
    animate([
      [".button", { scaleX: 1 }, { duration: 0.7, delay: stagger(0.05) }],
      [".bg", { x: 160 }, { duration: 0.7, delay: stagger(0.05) }],
    ]);
  };

  return (
    <div ref={targetRef} className="h-[200vh]">
      <div className="sticky top-28 h-screen items-center">
        <div ref={scope} className="flex justify-between px-12 pb-28">
          <h3 className="text-white text-3xl font-syne font-semibold leading-normal">
            Handpicked Featured Portofolio
          </h3>
          <button
            onMouseEnter={onButtonHover}
            onMouseLeave={onButtonLeave}
            className="button text-base font-syne font-bold relative z-10 flex items-center overflow-hidden justify-center gap-2 px-7 py-2.5 text-black  bg-white outline outline-offset-2 outline-white/50 rounded-full"
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
                className="circle w-4 h-4 rounded-full bg-[#FF000D]"
              ></motion.span>
            )}
            See All Projects
          </button>
        </div>
        <HorizontalCarousel targetRef={targetRef} />
      </div>
    </div>
  );
};
