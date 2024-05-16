import { Button } from "@components/button";
import { stagger, useAnimate, motion } from "framer-motion";
import { useState } from "react";

export const Agency = () => {
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
      [".button", { scaleX: 0.9 }, { duration: 0.7, delay: stagger(0.05) }],
      [".bg", { x: 160 }, { duration: 0.7, delay: stagger(0.05) }],
    ]);
  };
  return (
    <div className="flex  max-w-screen-2xl m-auto h-full px-8 my-32">
      <div ref={scope} className="flex flex-col justify-between">
        <div className="sticky top-24 mb-20">
          <h3 className="text-white text-3xl whitespace-nowrap font-syne font-semibold">
            About Our Agency
          </h3>
        </div>
        <button
          onMouseEnter={onButtonHover}
          onMouseLeave={onButtonLeave}
          className="button text-base font-syne font-bold relative z-10 flex items-center overflow-hidden justify-center gap-2 px-6 py-2.5 text-black  bg-white outline outline-offset-2 outline-white/50 rounded-full"
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
              className="circle w-4 h-4 whitespace-nowrap rounded-full bg-[#FF000D]"
            ></motion.span>
          )}
          Know More About Us
        </button>
      </div>
      <div className="ml-72">
        <h2 className="text-4xl font-light font-inter tracking-wide text-white/50">
          Established in 2015, we have dedicated ourselves to{" "}
          <span className="text-white">
            crafting captivating visual narratives
          </span>{" "}
          defined by creativity, innovation, and an unwavering commitment to{" "}
          <span className="text-white">excellence in video production.</span>
        </h2>
        <p className="text-white/80 text-lg font-inter font-light tracking-wide pt-10">
          Our mission is clear: to transform ideas into compelling visual
          stories. We believe that every project is an opportunity to create
          something extraordinary. Whether it&apos;s a corporate video, a
          commercial, an event coverage, or an animation, we approach each
          endeavor with creativity, enthusiasm, and a commitment to exceeding
          our client&apos;s expectations.
        </p>
        <div className="grid grid-cols-2 gap-y-10 mt-16">
          <div className="relative flex justify-center">
            <span className="text-white text-7xl text-gradient font-bold leading-tight">
              <span className="text-6xl align-top">1</span>5+
            </span>
            <span className="absolute top-1/2 font-syne text-lg font-semibold left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white uppercase leading-5 tracking-tighter">
              Years of experience
            </span>
          </div>
          <div className="relative flex justify-center">
            <span className="text-white text-7xl text-gradient font-bold leading-tight">
              <span className="text-6xl align-top">1</span>5+
            </span>
            <span className="absolute top-1/2 font-syne text-lg font-semibold left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white uppercase leading-5 tracking-tighter">
              Years of experience
            </span>
          </div>
          <div className="relative flex justify-center">
            <span className="text-white text-7xl text-gradient font-bold leading-tight">
              <span className="text-6xl align-top">1</span>5+
            </span>
            <span className="absolute top-1/2 font-syne text-lg font-semibold left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white uppercase leading-5 tracking-tighter">
              Years of experience
            </span>
          </div>
          <div className="relative flex justify-center">
            <span className="text-white text-7xl text-gradient font-bold leading-tight">
              <span className="text-6xl align-top">1</span>5+
            </span>
            <span className="absolute top-1/2 font-syne text-lg font-semibold left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white uppercase leading-5 tracking-tighter">
              Years of experience
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
