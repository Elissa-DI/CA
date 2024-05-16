import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { blog } from "@utils/images";
import en from "@components/locales/en";
import de from "@components/locales/de";
import { useRouter } from "next/router";
import { CalendarBlank } from "phosphor-react";
import ButtonWithIcon from "@components/shared/button/iconButton";

const Blog = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : de;
  return (
    <section id="blog">
      <div className="flex flex-col items-center justify-center max-w-6xl m-auto lg:max-w-screen-lg md:py-10 mobile:my-5">
        <div className="flex flex-col items-center gap-2">
          <Image
            src={blog}
            alt="Picture of the author"
            width={50}
            className="cursor-pointer"
            priority
          />
          <h4 className="text-center text-[#525252]">{t.vlog.h4}</h4>
        </div>
        <h1 className="my-4 text-4xl text-center text-white lg:text-4xl">
          {t.vlog.h1}
        </h1>
        <div className="flex justify-between gap-5 p-4 lg:max-w-screen-lg mobile:flex-col mini_tab:flex-row">
          {t.blogs.map((choice, index) => (
            <div
              key={index}
              className="p-4 border border-[#292929] rounded-2xl shadow-md"
            >
              <Image
                src={choice.icon}
                alt={choice.icon}
                width={100}
                height={100}
                className="w-full lg:w-[35rem]"
              />
              <div className="lg:space-y-5 lg:py-4">
                <p className="w-9/12 mt-2 text-xl text-white mobile:w-11/12 text-start lg:text-4xl lg:w-full">
                  {choice.title}
                </p>
                <div className="flex text-[#858585]">
                  <CalendarBlank size={24} color="#858585" />
                  <span>{choice.dates}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ButtonWithIcon
          label="SEE ALL"
          icon={undefined}
          className="lg:px-8 lg:py-4"
        />
      </div>
    </section>
  );
};

export default Blog;
