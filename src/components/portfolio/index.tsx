import React, { useState } from "react";
import { motion } from "framer-motion";
import { webContent } from "@utils/webContent";
import { arrow, doublearrow, edu, star } from "@utils/images";
import Image from "next/image";
import ButtonWithIcon from "@components/shared/button/iconButton";
import en from "@components/locales/en";
import de from "@components/locales/de";
import { useRouter } from "next/router";
const Portfolio: React.FC = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : de;
  const tabs = [t.portfolio.h2, t.portfolio.h3, t.portfolio.h4];
  const [activeTab, setActiveTab] = useState(t.portfolio.h2);
  const renderGraphicDesign = () => {
    return t.projects.graphic.map((choice, index) => (
      <div
        key={index}
        className="p-4 border bg-[#1A1A1A] border-[#292929] rounded-2xl shadow-md"
      >
        <div className="flex items-center justify-between pb-2 mx-4">
          <div>
            <h1 className="text-white">{choice.title}</h1>
            <span className="text-[#858585]">{choice.sub}</span>
          </div>
          <Image
            src={doublearrow}
            alt={choice.icon}
            width={10}
            height={10}
            className="w-10 h-10"
          />
        </div>
        <Image
          src={choice.icon}
          alt={choice.icon}
          width={100}
          height={100}
          className="w-full"
        />
      </div>
    ));
  };

  const renderVideography = () => {
    return t.projects.videography.map((choice, index) => (
      <div
        key={index}
        className="p-4 border bg-[#1A1A1A] border-[#292929] rounded-2xl shadow-md"
      >
        <div className="flex items-center justify-between pb-2 mx-4">
          <div>
            <h1 className="text-white">{choice.title}</h1>
            <span className="text-[#858585]">{choice.sub}</span>
          </div>
          <Image
            src={doublearrow}
            alt={choice.icon}
            width={10}
            height={10}
            className="w-10 h-10"
          />
        </div>
        <Image
          src={choice.icon}
          alt={choice.icon}
          width={100}
          height={100}
          className="w-full"
        />
      </div>
    ));
  };

  const renderAnimations = () => {
    return t.projects.animations.map((choice, index) => (
      <div
        key={index}
        className="p-4 border bg-[#1A1A1A] border-[#292929] rounded-2xl shadow-md"
      >
        <div className="flex items-center justify-between pb-2 mx-4">
          <div>
            <h1 className="text-white">{choice.title}</h1>
            <span className="text-[#858585]">{choice.sub}</span>
          </div>
          <Image
            src={doublearrow}
            alt={choice.icon}
            width={10}
            height={10}
            className="w-10 h-10"
          />
        </div>
        <Image
          src={choice.icon}
          alt={choice.icon}
          width={100}
          height={100}
          className="w-full"
        />
      </div>
    ));
  };
  const renderContent = () => {
    switch (activeTab) {
      case t.portfolio.h2:
        return renderVideography();
      case t.portfolio.h3:
        return renderGraphicDesign();
      case t.portfolio.h4:
        return renderAnimations();
      default:
        return null;
    }
  };

  return (
    <section id="works" className="">
      <div className="flex flex-col items-center justify-center max-w-6xl m-auto md:py-10 mobile:my-5">
        <div className="flex flex-col items-center gap-2">
          <Image
            src={edu}
            alt="Picture of the author"
            width={50}
            className="cursor-pointer"
            priority
          />
          <h4 className="text-center text-[#525252]">{t.portfolio.h1}</h4>
        </div>
        <h1 className="my-4 text-4xl text-center text-white mobile-text-2xl">
          {activeTab}
        </h1>
        <div className="flex justify-center gap-5 p-4 mobile:gap-3 mobile:text-xs mini_tab:text-xl bg-[#292929] rounded-2xl lg:px-5 lg:gap-2">
          {tabs.map((tab, index) => (
            <motion.h1
              key={index}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer ${
                index !== tabs.length - 1
                  ? "border-r px-2 border-[#1a1a1a]"
                  : ""
              } ${activeTab === tab ? "text-white" : "text-gray-500"}`}
            >
              {tab}
            </motion.h1>
          ))}
        </div>
        <div className="grid justify-between grid-cols-2 gap-5 p-4 mobile:grid-cols-1 mini_tab:grid-cols-2">
          {renderContent()}
        </div>
        <ButtonWithIcon label="MORE" icon={undefined} />
      </div>
    </section>
  );
};

export default Portfolio;
