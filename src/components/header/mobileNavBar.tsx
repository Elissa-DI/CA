import { FC, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import useOnClickOutside from "@utils/hooks/useOutSideClickRef";
import Logo from "@components/logo";
import { ArrowRight, List, X } from "@phosphor-icons/react";
import Button from "@components/shared/button";
import en from "@components/locales/en";
import de from "@components/locales/de";
import { useRouter } from "next/router";

const MobileNav: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : de;
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  useOnClickOutside(navRef, () => setIsOpen(false));

  return (
    <div className="z-50 flex items-center justify-between h-10 py-[30px] w-full bg-primary_light md:hidden">
      <Logo />
      <List
        size={32}
        weight="bold"
        onClick={toggleNav}
        color="#525252"
        className="rounded-full bg-[#1d1d1d] p-1"
      />

      <AnimatePresence>
        {" "}
        {/* Wrap the motion.nav with AnimatePresence */}
        {isOpen && (
          <motion.nav
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }} // Animate the height for the enter and exit transitions
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 z-50 w-full overflow-y-auto text-white bg-primary_light"
            ref={navRef}
          >
            <div className="flex items-center justify-between px-4 ">
              <Logo />
              <X
                size={32}
                onClick={toggleNav}
                color="#525252"
                className="rounded-full border border-[#1d1d1d] "
              />
            </div>

            <ul className="flex flex-col items-center justify-center gap-5 rounded-bl-3xl rounded-br-3xl border-2 border-borders py-10 bg-[#0F0F0F]">
              {t.routes.map((link, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between w-full px-4"
                >
                  <li className="flex flex-row text-xl font-medium transition-colors duration-200 text-texts">
                    <Link href={link.url} onClick={toggleNav}>
                      {link.name}
                    </Link>
                  </li>
                  <ArrowRight size={32} color="rgb(133, 133, 133)" />
                </div>
              ))}
              <Button label="creativeaminu@gmail.com" />
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
