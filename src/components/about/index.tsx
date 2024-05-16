import React, { useRef } from "react";
import {
  easeInOut,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const About = () => {
  const reelRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: reelRef,
    offset: ["start end", "end start"],
  });

  const smoothScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
    duration: 1000,
    restDelta: 0.001,
    restSpeed: 0.7,
  });

  const textScale = useTransform(smoothScrollYProgress, [1, 0], [1, 1.8], {
    ease: easeInOut,
  });

  const width = useTransform(
    smoothScrollYProgress,
    [0, 0.5, 0.8],
    ["20%", "60%", "98%"],
    {
      ease: easeInOut,
    }
  );

  const height = useTransform(
    smoothScrollYProgress,
    [0, 0.5, 0.8],
    ["10%", "60%", "98%"],
    {
      ease: easeInOut,
    }
  );

  return (
    <section
      ref={reelRef}
      id="about"
      className="relative bg-[#0D0D0D] mt-[100vh] h-screen"
    >
      <div className="sticky top-0">
        <motion.h2
          style={{ scale: textScale }}
          className="text-center text-[120px] font-syne font-bold bg-gradient-to-r from-white to-[rgb(116,113,113)] bg-clip-text text-transparent"
        >
          SHOWREEL
        </motion.h2>
      </div>
      <motion.video
        style={{ width: width, height: height }}
        autoPlay
        loop
        muted
        className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] object-cover rounded-[40px]"
      >
        <source
          src="https://res.cloudinary.com/dpgukxq8n/video/upload/v1706012427/aminu-showreel-5ykvuyyu_IEQottmy_r0fjhb.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </motion.video>
    </section>
  );
};

export default About;
