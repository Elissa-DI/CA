import React, { FC, useState, useEffect } from "react";
import MobileNav from "@components/header/mobileNavBar";
import DesktopNavBar from "@components/header/desktopNavBar";

const NavigationBar: FC = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setIsVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav
      className={`fixed inset-x-0 max-w-5xl mt-5 top-0 z-20 m-auto text-white rounded-[44px] opacity-100 transform-none bg-[rgba(0,0,0,0.1)] backdrop-blur-[19px] origin-[50%_50%_0px]`}
    >
      <MobileNav />
      <DesktopNavBar />
    </nav>
  );
};

export default NavigationBar;
