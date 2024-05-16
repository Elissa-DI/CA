import Cursor from "@components/cursor";
import {
  easeInOut,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useState } from "react";

const ProjectsImages = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dpgukxq8n/image/upload/v1706010925/Screenshot_2023-12-25_001452_knhyp2.png",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dpgukxq8n/image/upload/v1706010925/Screenshot_2023-12-25_001452_knhyp2.png",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dpgukxq8n/image/upload/v1706010925/Screenshot_2023-12-25_001452_knhyp2.png",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dpgukxq8n/image/upload/v1706010925/Screenshot_2023-12-25_001452_knhyp2.png",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dpgukxq8n/image/upload/v1706010925/Screenshot_2023-12-25_001452_knhyp2.png",
  },
];

export const HorizontalCarousel = ({
  targetRef,
}: {
  targetRef: React.RefObject<HTMLDivElement>;
}) => {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const [cursorHover, setCursorHover] = useState(false);

  const smoothScrollYProgress = useSpring(scrollYProgress, {
    damping: 50,
    duration: 2,
    restSpeed: 5,
  });

  const x = useTransform(smoothScrollYProgress, [0.2, 1], ["50%", "-180%"], {
    ease: easeInOut,
  });

  return (
    <>
      {cursorHover && <Cursor mouseLabel="Watch Full Video" />}
      <motion.div style={{ x }} className="flex gap-2">
        {ProjectsImages.map((img, index) => (
          <motion.img
            key={index}
            onMouseEnter={() => setCursorHover(true)}
            onMouseLeave={() => setCursorHover(false)}
            src={img.src}
            alt="projects image"
            width={580}
            height={780}
            className={`rounded-[40px] h-[50vh] object-cover ${
              cursorHover ? "cursor-none" : "cursor-pointer"
            }`}
          />
        ))}
      </motion.div>
    </>
  );
};
