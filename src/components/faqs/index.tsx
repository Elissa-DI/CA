import { webContent } from "@utils/webContent";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { CaretDown, CaretUp } from "phosphor-react";
import { FC, useState } from "react";

export const Faqs = () => {
  const {
    faq: { title, content },
  } = webContent;

  const faqVariants = {
    open: { opacity: 1, height: "auto" },
    collapsed: { opacity: 0, height: 0 },
    translate: { x: 20, opacity: 0.5 },
  };

  const faqTransition = {
    duration: 0.3,
    ease: [0.04, 0.62, 0.23, 0.98],
  };

  const [expanded, setExpanded] = useState<number>();

  const toggleExpand = (index: number) => {
    if (expanded === index) return setExpanded(undefined);
    return setExpanded(index);
  };

  return (
    <div id="faq" className="relative z-0 mb-24">
      <h3 className="text-3xl font-syne font-semibold text-white text-center block pb-10">
        {title}
      </h3>
      {content.map((item, index) => {
        const isOpen = expanded === index;
        return (
          <div
            onClick={() => toggleExpand(index)}
            key={index}
            className="max-w-3xl mx-auto "
          >
            <motion.button
              className={`w-full footer-gradient group cursor-pointer mb-5 p-5 rounded-2xl border border-white/50`}
            >
              <div className="flex items-center gap-5">
                <div className="flex-1">
                  {!isOpen ? (
                    <div className="text-left group-hover:translate-x-5 transition-all duration-700 ease-in-out delay-100 group-hover:opacity-50 text-white text-lg font-syne font-medium">
                      {item.question}
                    </div>
                  ) : (
                    <div className="text-left font-syne text-lg text-white font-medium">
                      {item.question}
                    </div>
                  )}
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={faqVariants}
                        transition={faqTransition}
                        className="overflow-hidden"
                      >
                        <div className="pt-2 font-inter text-base text-[#FFFFFFCC] text-left">
                          {item.answer}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
                <CaretDown
                  size={24}
                  weight="bold"
                  className={`${
                    isOpen
                      ? "rotate-180 transition-all duration-100 ease-in-out text-green-700"
                      : "group-hover:text-orange-400 text-white"
                  }`}
                />
              </div>
            </motion.button>
          </div>
        );
      })}
    </div>
  );
};
