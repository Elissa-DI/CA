import { useMousePosition } from "@utils/hooks/useMousePosition";
import { motion } from "framer-motion";

export default function Cursor({ mouseLabel }: { mouseLabel: string }) {
  const { mousePosition } = useMousePosition();

  return (
    <motion.span
      animate={{
        x: mousePosition.x - 770,
        y: mousePosition.y - 390,
        transition: {
          duration: 0.3,
        },
      }}
      className="fixed top-80 left-[700px] z-50 w-36 h-36 bg-black/30 whitespace-pre-line text-center uppercase text-white font-syne  backdrop-blur-sm rounded-full flex items-center justify-center pointer-events-none"
    >
      {mouseLabel}
    </motion.span>
  );
}
