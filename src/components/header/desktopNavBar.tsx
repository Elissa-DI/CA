import React, { FC, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "@components/logo";
import routes from "@utils/routes";

interface Route {
  name: string;
  url: string;
}

const DesktopNavBar: FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="hidden md:flex justify-between px-8 py-3">
      <Logo />
      <ul className="flex gap-4">
        {routes.map((link: Route, index: number) => {
          const isLetsTalk = link.name === "Let's Talk";
          const isActive = pathname === link.url;
          return (
            <li
              key={index}
              className={`${pathname === link.url ? "py-1 font-normal" : ""} 
                ${isLetsTalk ? "text-black text-center text-lg font-syne font-bold no-line bg-white hover:bg-opacity-0 hover:bg-orange-700 rounded-3xl px-8 py-2 flex items-center" : "rounded-full hover:text-white hover:bg-opacity-5 px-3 hover:rounded-full custom-underline hover:transition-all flex items-center hover:bg-white cursor-pointer text-base font-extralight transition ease-in-out duration-500"}
                ${isActive ? " underline-offset-1" : ""}
              `}
            >
              <Link href={link.url}>{link.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DesktopNavBar;
