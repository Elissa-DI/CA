import Cursor from '@components/cursor';
import Image from 'next/image';
import React, { FC, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface BlogProps {
  blog: {
    id: number;
    title: string;
    description: string;
    author: string;
    date: string;
  };
}
const BlogCard: FC<BlogProps> = ({ blog }) => {
  const [hover, setHover] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState<number | null>();
  const [cursorHover, setCursorHover] = useState(false);

  const blogVariants = {
    hover: {
      translateY: -30,
    },
    initial: {
      translateY: 0,
    },
  };

  const onHoverStart = (index: number) => {
    setIsButtonHovered(index);
    setCursorHover(true);
  };

  const onHoverEnd = (index: number) => {
    setIsButtonHovered(null);
    setCursorHover(false);
  };
  return (
    <motion.div
      variants={blogVariants}
      transition={{ duration: 0.7 }}
      initial="initial"
      whileHover="hover"
      onMouseEnter={() => onHoverStart(blog.id)}
      onMouseLeave={() => onHoverEnd(blog.id)}
      className={`${isButtonHovered !== blog.id ? 'cursor-none' : 'cursor-pointer'} relative`}
    >
      <Link href={`/blogs/${blog.id}`}>
        <motion.span
          animate={{
            transition: {
              duration: 0.3,
            },
          }}
          className={`absolute border left-32 top-20 transition-all duration-1000 ${
            isButtonHovered == blog.id ? '-translate-y-5' : 'opacity-0'
          } cursor-pointer z-50 w-32 h-32 bg-black/30 text-center uppercase text-white font-syne  font-bold backdrop-blur-sm rounded-full flex items-center justify-center`}
        >
          Read Blog
        </motion.span>
      </Link>
      <div className="relative">
        <Image
          src="https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Blogs Image"
          width={500}
          height={500}
          className={`rounded-3xl object-center object-cover ${
            isButtonHovered == blog.id &&
            'grayscale transition-all duration-700'
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
};

export default BlogCard;
