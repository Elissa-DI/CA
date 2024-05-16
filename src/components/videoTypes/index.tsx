import { stagger, useAnimate, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export const VideoTypes = () => {
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
      [".button", { scaleX: 1 }, { duration: 0.7 }],
      [".bg", { x: 160 }, { duration: 0.7, delay: stagger(0.05) }],
    ]);
  };
  return (
    <div className="max-w-screen-2xl m-auto px-8 pb-12">
      <h3 className="text-white text-3xl font-syne font-semibold text-center tracking-tight">
        We&apos;re Video Pros in Many Industries!
      </h3>
      <div className="grid grid-cols-4 gap-3 grid-flow-row my-12">
        <div className="col-span-2">
          <Image
            src="https://res.cloudinary.com/dpgukxq8n/image/upload/v1706011092/cecylia_lqgdqb.jpg"
            alt="projects image"
            width={580}
            height={780}
            className="rounded-3xl object-cover w-full h-80"
          />
        </div>
        <div className="">
          <Image
            src="https://res.cloudinary.com/dpgukxq8n/image/upload/v1706011092/cecylia_lqgdqb.jpg"
            alt="projects image"
            width={580}
            height={780}
            className="rounded-3xl object-cover h-80"
          />
        </div>
        <div className="row-span-2">
          <Image
            src="https://res.cloudinary.com/dpgukxq8n/image/upload/v1706011095/C3029.00_00_20_38.Still002_w6nkmj.png"
            alt="projects image"
            width={580}
            height={780}
            className="rounded-3xl object-cover h-full"
          />
        </div>
        <div className="">
          <Image
            src="https://res.cloudinary.com/dpgukxq8n/image/upload/v1706010925/Screenshot_2023-12-25_001452_knhyp2.png"
            alt="projects image"
            width={580}
            height={780}
            className="rounded-3xl object-cover h-80"
          />
        </div>
        <div className="col-span-2">
          <Image
            src="https://res.cloudinary.com/dpgukxq8n/image/upload/v1706010925/Screenshot_2023-12-25_001452_knhyp2.png"
            alt="projects image"
            width={580}
            height={780}
            className="rounded-3xl object-cover w-full h-80"
          />
        </div>
        <div className="col-span-2">
          <Image
            src="https://res.cloudinary.com/dpgukxq8n/image/upload/v1706011404/jghh_vz4jk9.jpg"
            alt="projects image"
            width={580}
            height={780}
            className="rounded-3xl object-cover w-full h-80"
          />
        </div>
        <div className="col-span-2">
          <Image
            src="https://res.cloudinary.com/dpgukxq8n/image/upload/v1706010917/Screenshot_2023-12-25_005717_kxrnkg.png"
            alt="projects image"
            width={580}
            height={780}
            className="rounded-3xl object-cover w-full h-80"
          />
        </div>
      </div>
      <div ref={scope} className="flex justify-center">
        <button
          onMouseEnter={onButtonHover}
          onMouseLeave={onButtonLeave}
          className="button text-lg font-syne font-bold relative z-10 flex items-center overflow-hidden justify-center gap-2 px-7 py-2.5 text-black  bg-white outline outline-offset-2 outline-white/50 rounded-full"
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
          Explore All Categories
        </button>
      </div>
    </div>
  );
};
