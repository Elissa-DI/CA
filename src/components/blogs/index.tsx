import Cursor from "@components/cursor";
import { stagger, useAnimate, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

const BlogsData = [
  {
    title: "News",
    description:
      "StoryStream's Video Production Career Opportunities and Upcoming Event",
    author: "Michael Center",
    date: "Oct 17, 2023",
  },
  {
    title: "News",
    description:
      "StoryStream's Video Production Career Opportunities and Upcoming Event",
    author: "Michael Center",
    date: "Oct 17, 2023",
  },
  {
    title: "News",
    description:
      "StoryStream's Video Production Career Opportunities and Upcoming Event",
    author: "Michael Center",
    date: "Oct 17, 2023",
  },
];

const Blogs: React.FC = () => {
  const [hover, setHover] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState<{
    [index: string]: number;
  }>({});
  const [cursorHover, setCursorHover] = useState(false);

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

  const blogVariants = {
    hover: {
      translateY: -30,
    },
    initial: {
      translateY: 0,
    },
  };

  const onHoverStart = (index: number) => {
    setIsButtonHovered((prev) => ({ ...prev, [index]: true }));
    setCursorHover(true);
  };

  const onHoverEnd = (index: number) => {
    setIsButtonHovered((prev) => ({ ...prev, [index]: false }));
    setCursorHover(false);
  };

  return (
    <div
      ref={scope}
      className="max-w-screen-2xl m-auto flex items-center flex-col relatives z-0 px-8 my-24"
    >
      <h3 className="text-3xl text-center font-syne font-semibold tracking-tight text-white pb-8">
        Dive into our blogs
      </h3>
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
        Read All Blogs
      </button>

      <div className="grid grid-cols-3 gap-x-12 mt-14">
        {cursorHover && <Cursor mouseLabel="Read Blog" />}
        {BlogsData.map((blog, index) => {
          return (
            <motion.div
              key={index}
              variants={blogVariants}
              transition={{ duration: 0.7 }}
              initial="initial"
              whileHover="hover"
              onMouseEnter={() => onHoverStart(index)}
              onMouseLeave={() => onHoverEnd(index)}
              className={`${cursorHover ? "cursor-none" : "cursor-pointer"}`}
            >
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="Blogs Image"
                  width={500}
                  height={500}
                  className={`rounded-3xl object-center object-cover ${
                    isButtonHovered[index] &&
                    "grayscale transition-all duration-700"
                  }`}
                />
              </div>
              <span className="text-[#FF7A3B] text-xs font-inter font-light">
                {blog.title}
              </span>
              <p className="text-white font-medium text-base font-syne py-1">
                {blog.description}
              </p>
              <div className="flex items-center gap-4">
                <span className="font-light font-inter text-sm text-[#FFFFFF80]">
                  {blog.author}
                </span>
                <span className="w-1.5 h-1.5 bg-[#FFFFFF80] rounded-full"></span>
                <span className="font-light font-inter text-sm text-[#FFFFFF80]">
                  {blog.date}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
