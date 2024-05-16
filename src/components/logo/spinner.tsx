import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { user } from "@utils/images";
import { webContent } from "@utils/webContent";
import ButtonWithIcon from "@components/shared/button/iconButton";
import { useRouter } from "next/router";

const Spinner: FC = () => {
  const [count, setCount] = useState<number>(5);
  const router = useRouter();

  const handleStartButtonClick = () => {
    router.push("/#about");
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <section className="mx-auto mt-56 mobile:mt-8 mobile_2:mt-28 mini_tab:mt-36 galaxy:mt-48 mac_air:mt-20 laptop:mt-44">
      <div className="mx-32 mobile:mx-4 mobile_2:mx-6 lg:mx-24 laptop:mx-36">
        <div className="w-1/2 mobile:w-full ">
          <motion.div
            className="spinner-content"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={user}
              alt={"Picture of the author"}
              width={276}
              height={276}
              priority
              className="mobile:w-32 mobile:h-32 mini_tab:w-64 mini_tab:h-64"
            />
          </motion.div>
          <motion.h1
            className="pt-20 text-2xl tracking-wide text-left text-white mobile:text-sm mobile:pt-2 mini_tab:text-2xl laptop:text-4xl laptop:text-start laptop:pr-[43rem] lg:w-1/2 laptop:w-full mini_tab:w-[80%]"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            Hello and a warm welcome to my{" "}
            <span className="text-gray-500">Portfolio website!</span> I am
            thrilled to have you here, and I hope this space will provide you
            with a glimpse into my creative world.
          </motion.h1>
          <div className="flex justify-start gap-5 my-5 mobile:my-2 mobile:gap-2 mobile_2:my-5 mini_tab:gap-5 laptop:gap-8">
            {webContent.starter.map((choice, index) => (
              <div key={index}>
                <Image
                  src={choice.icon}
                  alt={choice.icon}
                  className=""
                  width={50}
                  height={50}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between laptop:w-1/2">
            <motion.h1
              className="pt-5 text-xl tracking-wide text-[#9C9C9C] mobile:text-sm mobile:pt-0 mini_tab:text-xl laptop:text-3xl laptop:space-x-20"
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
            >
              Wishing you an inspiring and enjoyable time exploring my
              portfolio!
            </motion.h1>
          </div>
        </div>
        <div className="flex justify-end gap-5 mt-20 mobile:mt-10 mini_tab:mt-32 ">
          <div className="bg-[#2C2C2C] px-6 py-4 rounded-full">
            <span className="text-[#9C9C9C]">{count}</span>
          </div>
          {/* <ButtonWithIcon
            label="Start"
            icon={undefined}
            className="px-10 rounded-xl"
            onClick={handleStartButtonClick}
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Spinner;
