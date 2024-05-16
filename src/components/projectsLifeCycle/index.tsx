import { ArrowRight } from "@phosphor-icons/react";
import { stagger, useAnimate, motion } from "framer-motion";
import { useState } from "react";

const ProjectsList = [
  {
    title: "Pre-Production",
    description:
      "Pre-production serves as the pivotal phase in any creative endeavor, encompassing planning, idea refinement, budgeting, schedule creation, and the meticulous organization of logistical details.",
  },
  {
    title: "Production",
    description:
      "Production represents the dynamic phase of a creative project, where the plans from pre-production spring to life, with cameras rolling, actors delivering their performances, and the realization of the creative vision.",
  },
  {
    title: "Post-Production",
    description:
      "Post-production emerges as the pivotal phase in creative projects, wherein raw content undergoes a transformation into its refined, polished state where editing, sound design, visual effects, and essential adjustments to breathe life into the project.",
  },
];

export const ProjectsLifeCycle = () => {
  const [hover, setHover] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState<{
    [index: string]: number;
  }>({});

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

  const buttonVariants = {
    hover: {
      marginRight: "10px",
      translateX: 10,
      rotate: 90,
      borderColor: "#FF7A3B",
      color: "#FF7A3B",
    },
    initial: {
      marginRight: "0px",
      translateX: 0,
      rotate: 0,
    },
  };

  const onHoverStart = (index: number) => {
    setIsButtonHovered((prev) => ({ ...prev, [index]: true }));
  };

  const onHoverEnd = (index: number) => {
    setIsButtonHovered((prev) => ({ ...prev, [index]: false }));
  };
  return (
    <div className="flex max-w-screen-2xl m-auto h-full gap-24 px-8 mb-32">
      <div ref={scope} className="flex flex-col justify-between">
        <div className="sticky top-24 mb-16">
          <h3 className="text-white h-full text-3xl font-syne font-semibold">
            From Concept To Completion: We&apos;ve Got You Covered!
          </h3>
        </div>
        <div>
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
            Let&apos;s Talk
          </button>
        </div>
      </div>
      <div className="space-y-8">
        {ProjectsList.map((project, index) => {
          return (
            <motion.div
              key={index}
              onHoverStart={() => onHoverStart(index)}
              onHoverEnd={() => onHoverEnd(index)}
              className="footer-gradient border cursor-pointer border-white/40 p-6 space-y-4 text-white rounded-[30px] bg-[#0D0D0D]"
            >
              <h2 className="text-[26px] font-syne font-semibold leading-10 tracking-tighter bg-gradient-to-r from-white to-[rgb(116,113,113)] bg-clip-text text-transparent">
                {project.title}
              </h2>
              <p className="text-[#FFFFFFCC] max-w-[1300px] text-lg font-light tracking-tight leading-7">
                {project.description}
              </p>
              <button className="flex gap-3 items-center cursor-pointer text-white border border-white/40 rounded-full px-3 py-2">
                <span className="text-xs uppercase font-light">Learn More</span>
                <motion.div
                  variants={buttonVariants}
                  initial="initial"
                  animate={isButtonHovered[index] ? "hover" : "initial"}
                  transition={{ duration: 0.7 }}
                  className="flex items-center justify-center cursor-pointer w-6 h-6 rounded-full border border-white/50"
                >
                  <ArrowRight size={14} />
                </motion.div>
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
