import { FC, useState } from 'react';
import { socialMediaLists } from '@utils/data/socialMedia';
import { ArrowRight } from 'phosphor-react';
import { motion } from 'framer-motion';
import Logo from '@components/logo';
import { useRouter } from 'next/router';

const textVariant = {
  hover: {
    translateX: -390,
  },
  initial: {
    translateX: 0,
  },
};

const buttonVariant = {
  hover: {
    translateX: 445,
    backgroundColor: 'rgb(255 255 255 / 0.2)',
    rotate: -40,
    width: '75px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '75px',
    borderRadius: '100%',
  },
  initial: {
    translateX: 0,
  },
};

const Footer: FC = () => {
  const { push } = useRouter();
  const [hover, setHover] = useState(false);
  return (
    <footer className="m-12 py-12 rounded-t-[4%] rounded-md footer-gradient z-0">
      <div className="flex justify-center pb-6">
        <Logo size={50} />
      </div>
      <div className="m-5">
        <div className="flex flex-col items-center rounded-3xl text-white text-center border border-[#FFFFFF] py-12 mb-2">
          <h3 className="text-7xl font-syne font-bold">
            Not limited to video,
          </h3>
          <h4 className="text-7xl w-[90%] font-syne font-bold pb-8">
            we&apos;re your creative comrades.
          </h4>
          <h4 className="text-2xl pb-12 text-white/80 font-syne font-semibold">
            Got questions, porject ideas, or just want to say hi? We&apos;re all
            ears!
          </h4>
          <motion.button
            onClick={() => push('/contact')}
            onHoverStart={() => setHover(true)}
            onHoverEnd={() => setHover(false)}
            className="flex items-center px-2 justify-center gap-5 w-[90%] h-20 bg-white/80 text-[#0D0D0D] font-syne text-xl font-bold rounded-full"
          >
            <motion.span
              initial="initial"
              animate={hover ? 'hover' : 'initial'}
              variants={textVariant}
              transition={{ duration: 0.5 }}
            >
              Let&apos;s Collaborate
            </motion.span>
            <motion.span
              initial="initial"
              animate={hover ? 'hover' : 'initial'}
              variants={buttonVariant}
              transition={{ duration: 0.7 }}
            >
              <ArrowRight size={24} weight="bold" />
            </motion.span>
          </motion.button>
        </div>
        <div className="rounded-3xl text-white border border-[#FFFFFF] py-8 px-5 mb-5">
          <h3 className="pb-4 font-inter font-bold text-lg">
            Address: <span className="font-light">Germany</span>
          </h3>
          <h4 className="pb-20 font-inter font-bold text-lg">
            Email: <span className="font-light">mail@creativeaminu.art</span>
          </h4>
          <form className="relative flex gap-2">
            <label
              htmlFor="subscribe"
              className="font-syne font-medium text-lg absolute -top-8 left-0 text-white"
            >
              Subscribe to our newsletter
            </label>
            <input
              type="email"
              id="subscribe"
              placeholder="name@gmail.com"
              className="w-full py-1.5 rounded-full px-3 bg-white/10 focus:outline-none placeholder:text-white/30"
            />
            <button className="bg-[#FF7A3B] text-base font-syne font-semibold text-white px-5 py-3 rounded-full">
              subscribe
            </button>
          </form>
        </div>
        <div className="grid grid-cols-2 gap-6 text-white">
          {socialMediaLists.map((list, index) => {
            return (
              <div
                key={index}
                className="flex cursor-pointer group border border-[#FFFFFF12] hover:border-white/50 rounded-full items-center hover:gap-3 transition-all duration-500 ease-linear"
              >
                <button className="flex bg-[#FFFFFF12] w-full py-5 rounded-l-full px-6 items-center gap-3 group-hover:rounded-full transition-all duration-500 ease-in-out">
                  <list.icon className="w-6 h-6 group-hover:scale-150 group-hover:text-orange-400 transition-all duration-500 ease-in-out" />
                  <span className="font-inter font-light text-xs uppercase">
                    {list.name}
                  </span>
                </button>
                <div className="flex items-center p-5 bg-[#FFFFFF12] rounded-r-full h-full group-hover:rounded-full group-hover:-rotate-45 transition-all duration-500 ease-in-out">
                  <ArrowRight size={24} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
