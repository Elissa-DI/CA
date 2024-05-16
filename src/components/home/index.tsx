import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useAnimate,
  stagger,
} from "framer-motion";
import Image from "next/image";
import React, { useRef, useState } from "react";
import About from "@components/about";
import { Features } from "@components/features";
import { Partners } from "@components/partners";
import { Projects } from "@components/projects";
import { ProjectsLifeCycle } from "@components/projectsLifeCycle";
import { VideoTypes } from "@components/videoTypes";
import { Agency } from "@components/agency";
import { Testimonials } from "@components/testimonials/testimonials";
import { Faqs } from "@components/faqs";
import BLogs from "@components/blogs";
import { Button } from "@components/button";
// import useAnimateButton from "@utils/hooks/useAnimatebutton";

const Landing: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 0.7, 1],
    [1, 0.7, 0.5, 0]
  );
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.7]);
  const translateY = useTransform(scrollYProgress, [0, 0.4, 1], [0, 50, 100]);
  const skew = useTransform(scrollYProgress, [0, 1], ["0", "5deg"]);
  const [hover, setHover] = useState(false);

  const [scope, animate] = useAnimate();

  const onButtonHover = () => {
    setHover(true);
    animate([
      [
        ".button",
        {
          width: "210px",
        },
        { duration: 0.5 },
      ],
      [".bg", { x: 0 }, { duration: 1, at: "<" }],
    ]);
  };

  const onButtonLeave = () => {
    setHover(false);
    animate([
      [".button", { width: "180px" }, { duration: 0.5 }],
      [".bg", { x: 160 }, { duration: 1, at: "<" }],
    ]);
  };

  return (
    <div className="relative">
      <AnimatePresence>
        <motion.section
          style={{
            opacity,
            scale,
            translateY,
            skew,
            transition: "initial",
            backgroundImage: 'url("/images/bgImage.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backdropFilter: "visible",
          }}
          ref={targetRef}
          className="fixed w-screen px-4 mt-8 h-[100vh]"
        >
          <div
            ref={scope}
            className="flex xl:max-w-6xl flex-col h-full max-w-screen-2xl m-auto items-center justify-center"
          >
            <h1 className="text-white text-center font-syne font-bold text-2xl md:text-3xl lg:text-8xl tracking-tight pb-5">
              Turning Video into vibrant{" "}
              <span className="bg-gradient-to-r from-white to-[rgb(116,113,113)] bg-clip-text text-transparent">
                Conversations
              </span>
            </h1>
            <p className="text-white font-inter font-extralight text-center tracking-widest text-xl pb-9">
              I&apos;m your friendly video wizard, crafting captivating
              commercials, corporate videos, social ads, and more. Join me, and
              let&apos;s illuminate your story together!
            </p>
            <button
              onMouseEnter={onButtonHover}
              onMouseLeave={onButtonLeave}
              className="button w-[180px] text-lg font-syne font-bold relative z-10 flex items-center overflow-hidden justify-center gap-2 px-7 py-2.5 text-black  bg-white outline outline-offset-2 outline-white/50 rounded-full whitespace-nowrap"
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
                    duration: 0.9,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, 0.5, 1],
                    repeatDelay: 0.5,
                  }}
                  className="circle w-4 h-4 rounded-full bg-[#FF000D]"
                ></motion.span>
              )}
              See Projects
            </button>
          </div>
        </motion.section>
      </AnimatePresence>
      <div className="overflow-clip">
        <About />
        <Features />
        <Projects />
        <ProjectsLifeCycle />
        <VideoTypes />
        <Agency />
        <Testimonials />
        <Faqs />
        <BLogs />
        <Partners />
      </div>
    </div>
  );
};

export default Landing;
