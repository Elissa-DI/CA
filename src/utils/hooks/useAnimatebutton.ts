import { stagger, useAnimate } from "framer-motion";
import { useState } from "react";

const useAnimateButton = () => {
  const [scope, animate] = useAnimate();
  const [hover, setHover] = useState(false);

  const onButtonHover = () => {
    setHover(true);
    animate([
      [
        "button",
        {
          width: "230px",
        },
        { duration: 1 },
      ],
      [".bg", { x: 0 }, { duration: 0.7, delay: stagger(0.05), at: "<" }],
    ]);
  };

  const onButtonLeave = () => {
    setHover(false);
    animate([
      ["button", { width: "auto" }, { duration: 1 }],
      [".bg", { x: 160 }, { duration: 0.7, delay: stagger(0.05), at: "<" }],
    ]);
  };

  return { onButtonHover, onButtonLeave, hover, scope };
};

export default useAnimateButton;
