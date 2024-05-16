import { motion } from "framer-motion";
import { servicesList } from "@utils/data/services";

export const Partners = () => {
  return (
    <div className="my-24">
      <div className="relative">
        <div className="main-slide">
          <div className="flex whitespace-nowrap partners-slide">
            {servicesList.map((service, index) => {
              return (
                <div key={index} className="flex items-center mx-8">
                  <motion.span
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{
                      duration: 0.7,
                      repeat: Infinity,
                      ease: "easeInOut",
                      times: [0, 0.5, 1],
                      repeatDelay: 0.5,
                    }}
                    className="w-4 h-4 mr-8 rounded-full bg-[#FF000D]"
                  ></motion.span>
                  <span className="bg-gradient-to-r text-6xl font-syne font-bold from-[rgb(116,113,113)] via-white to-[rgb(116,113,113)] bg-clip-text text-transparent">
                    {service.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
