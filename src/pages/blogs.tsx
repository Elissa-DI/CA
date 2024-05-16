import BlogCard from '@components/blogs/blogCard';
import { ScrollIndicator } from '@components/shared/scrollIndicator';
import AppLayout from '@layout/app';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const BlogsData = [
  {
    id: 1,
    title: 'News',
    description:
      "StoryStream's Video Production Career Opportunities and Upcoming Event",
    author: 'Michael Center',
    date: 'Oct 17, 2023',
  },
  {
    id: 2,
    title: 'News',
    description:
      "StoryStream's Video Production Career Opportunities and Upcoming Event",
    author: 'Michael Center',
    date: 'Oct 17, 2023',
  },
  {
    id: 3,
    title: 'News',
    description:
      "StoryStream's Video Production Career Opportunities and Upcoming Event",
    author: 'Michael Center',
    date: 'Oct 17, 2023',
  },
  {
    id: 4,
    title: 'News',
    description:
      "StoryStream's Video Production Career Opportunities and Upcoming Event",
    author: 'Michael Center',
    date: 'Oct 17, 2023',
  },
  {
    id: 5,
    title: 'News',
    description:
      "StoryStream's Video Production Career Opportunities and Upcoming Event",
    author: 'Michael Center',
    date: 'Oct 17, 2023',
  },
  {
    id: 6,
    title: 'News',
    description:
      "StoryStream's Video Production Career Opportunities and Upcoming Event",
    author: 'Michael Center',
    date: 'Oct 17, 2023',
  },
  {
    id: 7,
    title: 'News',
    description:
      "StoryStream's Video Production Career Opportunities and Upcoming Event",
    author: 'Michael Center',
    date: 'Oct 17, 2023',
  },
  {
    id: 8,
    title: 'News',
    description:
      "StoryStream's Video Production Career Opportunities and Upcoming Event",
    author: 'Michael Center',
    date: 'Oct 17, 2023',
  },
  {
    id: 9,
    title: 'News',
    description:
      "StoryStream's Video Production Career Opportunities and Upcoming Event",
    author: 'Michael Center',
    date: 'Oct 17, 2023',
  },
  {
    id: 10,
    title: 'News',
    description:
      "StoryStream's Video Production Career Opportunities and Upcoming Event",
    author: 'Michael Center',
    date: 'Oct 17, 2023',
  },
];

export default function Blogs() {
  const [isButtonHovered, setIsButtonHovered] = useState<{
    [index: string]: number;
  }>({});
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
    setIsButtonHovered((prev: any) => ({ ...prev, [index]: true }));
    setCursorHover(true);
  };

  const onHoverEnd = (index: number) => {
    setIsButtonHovered((prev: any) => ({ ...prev, [index]: false }));
    setCursorHover(false);
  };
  return (
    <AppLayout>
      <div
        style={{
          backgroundImage: 'url("/images/testimonial.png")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        className="w-full h-[90vh] bg-gradient-to-r from-black via-transparent to-transparent"
      >
        {/* <div className="absolute bottom-14 left-0 right-0 top-0 z-10 overflow-hidden bg-gradient-to-r from-black via-transparent to-transparent"></div> */}
        <div className="text-white w-[620px] mt-32 ml-14">
          <div className="text-7xl font-bold font-syne z-50">
            <span>Blo</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#5c5c5c]">
              gs
            </span>
          </div>
          <div className="font-light text-[#d7d7d7]">
            Explore our blog hub, where we serve up a delightful mix of
            insightful articles, tips, and fun reads, tailored to spark your
            curiosity and inspire your creativity.
          </div>
        </div>
        <div className="-ml-24 mt-20 w-[0%]">
          <ScrollIndicator />
        </div>
      </div>
      <div className="my-10 mx-12">
        <div className="grid grid-cols-3 gap-x-7 gap-y-16 mt-14">
          {BlogsData.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
