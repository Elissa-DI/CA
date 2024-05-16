import { AboutUs } from '@components/agency/AboutUs';
import AppLayout from '@layout/app';
import Image from 'next/image';
import {
  CollaborationIcon,
  CreativityIcon,
  RecordIcon,
  SearchIcon,
  SolutionsIcon,
  TeamIcon,
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
} from '@utils/images';
import { Partners } from '@components/partners';
import { Faqs } from '@components/faqs';
import { Testimonials } from '@components/testimonials/testimonials';
import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ArrowRight } from 'phosphor-react';

const Values = [
  {
    title: 'Creativity',
    number: '01',
    description:
      'We believe in the power of imagination and creative thinking. We strive to infuse innovation and originality into everything we do, producing unique and captivating video content.',
  },
  {
    title: 'Quality',
    number: '02',
    description:
      "Excellence is non-negotiable. We are committed to delivering top-notch video production services that meet and exceed our clients' expectations, from concept to final product.",
  },
  {
    title: 'Integrity',
    number: '03',
    description:
      'We value teamwork and collaboration. We work closely with our clients, understanding their vision and goals, to ensure that every project is a true collaboration resulting in success.',
  },
  {
    title: 'Collaboration',
    number: '04',
    description:
      'Trust and honesty are at the heart of our agency. We maintain the highest ethical standards in all our interactions, ensuring transparency, reliability, and long-lasting relationships with our clients and partners.',
  },
];

const Team = [
  {
    name: 'John Davis',
    tilte: 'creative director',
    image:
      'https://res.cloudinary.com/dpgukxq8n/image/upload/v1706011092/cecylia_lqgdqb.jpg',
  },
  {
    name: 'Michael Carter',
    tilte: 'cinematographer',
    image:
      'https://res.cloudinary.com/dpgukxq8n/image/upload/v1706011092/cecylia_lqgdqb.jpg',
  },
  {
    name: 'Davis Smith',
    tilte: 'video editor',
    image:
      'https://res.cloudinary.com/dpgukxq8n/image/upload/v1706011092/cecylia_lqgdqb.jpg',
  },
  {
    name: 'John Davis',
    tilte: 'production coordinator',
    image:
      'https://res.cloudinary.com/dpgukxq8n/image/upload/v1706011092/cecylia_lqgdqb.jpg',
  },
];

const featuresLogo = [
  {
    id: 1,
    src: logo1,
  },
  {
    id: 2,
    src: logo2,
  },
  {
    id: 3,
    src: logo3,
  },
  {
    id: 4,
    src: logo4,
  },
  {
    id: 5,
    src: logo5,
  },
  {
    id: 6,
    src: logo1,
  },
  {
    id: 7,
    src: logo2,
  },
  {
    id: 8,
    src: logo3,
  },
  {
    id: 9,
    src: logo4,
  },
  {
    id: 10,
    src: logo5,
  },
  {
    id: 11,
    src: logo5,
  },
  {
    id: 12,
    src: logo5,
  },
  {
    id: 13,
    src: logo5,
  },
  {
    id: 14,
    src: logo5,
  },
  {
    id: 15,
    src: logo5,
  },
  {
    id: 16,
    src: logo5,
  },
  {
    id: 17,
    src: logo5,
  },
  {
    id: 18,
    src: logo5,
  },
  {
    id: 19,
    src: logo5,
  },
  {
    id: 20,
    src: logo5,
  },
];

const aboutInfo = [
  {
    title: 'Exceptional Creativity',
    description:
      'Clients choose us for our unparalleled creative prowess. We breathe life into ideas, turning them into visually stunning, memorable videos.',
    icon: CreativityIcon,
  },
  {
    title: 'Proven Track Record',
    description:
      "Our portfolio is a testament to our success. We've consistently delivered outstanding results, earning the trust of clients time and again.",
    icon: RecordIcon,
  },
  {
    title: 'Collaborative Approach',
    description:
      "We don't just work for our clients; we work with them. Our collaborative spirit ensures that each project is a true partnership, vision coming to life",
    icon: CollaborationIcon,
  },
  {
    title: 'Innovative Solutions',
    description:
      "We're known for pushing boundaries and finding innovative solutions. Clients appreciate our ability to think outside the box and deliver beyond expectations.",
    icon: SolutionsIcon,
  },
  {
    title: 'Exceptional Team',
    description:
      'Our team is a powerhouse of talent, experience, and passion. Clients choose us for the depth of expertise and dedication we bring to every project.',
    icon: TeamIcon,
  },
  {
    title: 'Attention to Detail',
    description:
      'We obsess over the finer points. Every frame, every edit, every sound is carefully crafted to ensure the highest quality and maximum impact.',
    icon: SearchIcon,
  },
];

export default function About() {
  const [isInfoHovered, setIsInfoHovered] = useState(false);
  const [currentInfo, setCurrentInfo] = useState(0);
  const handleMouseEnter = (index: number) => {
    setCurrentInfo(index);
    setIsInfoHovered(true);
  };

  const handleMouseLeave = (index: number) => {
    setCurrentInfo(index);
    setIsInfoHovered(false);
  };
  const controls = useAnimation();
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollDirection = scrollY > prevScrollY.current ? 'down' : 'up';
      prevScrollY.current = scrollY;

      if (scrollDirection === 'down') {
        controls.start({ y: 0, height: 500, translateY: 100 });
      } else {
        controls.start({ y: 0, height: 500, translateY: -10 });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);
  return (
    <AppLayout>
      <div className="overflow-clip">
        <div
          style={{
            backgroundImage: 'url("/images/testimonial.png")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
          className="w-full h-[70vh]"
        ></div>
        {/* <AboutUs /> */}
        <div className="mx-32 mt-40">
          <div className="flex flex-col w-full h-[584px] rounded-md border border-[#FFFFFF4D]">
            <p className="text-white text-3xl tracking-tight max-w-3xl w-full mx-auto pt-20">
              We&apos;re the storytellers, visionaries, and creative dreamers
              who turn your{' '}
              <span className="text-[#FFFFFF80]">
                ideas into cinematic adventures.
              </span>{' '}
              With us, work feels like play, and every project is a chance {''}
              <span className="text-[#FFFFFF80]">to make magic happen.</span>
            </p>
            <div className="flex w-full bg-white h-80 mt-auto"></div>
          </div>
        </div>
        <div className="mx-36 my-20">
          <h1 className="text-white text-center pb-20 text-3xl font-semibold">
            Our Values: The Secret Sauce in Every StoryStream Creation!
          </h1>
          <div className="space-y-20">
            {Values.map((value, index) => (
              <div
                key={index}
                className={`relative pt-20 ${index % 2 != 0 && 'ml-24'}`}
              >
                <span className="text-[150px] font-bold tracking-tighter leading-10 text-[#FFFFFF4D]">
                  {value.number}
                </span>
                <div className="absolute -bottom-14 left-20 max-w-4xl">
                  <h2 className="text-[#FFFFFFCC] text-3xl tracking-tight font-semibold pb-3">
                    {value.title}
                  </h2>
                  <p className="text-[#FFFFFFCC] text-lg font-light tracking-tight">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-12 my-44">
          <h1 className="text-white text-3xl pb-10 font-semibold tracking-tight">
            Peek Behind the Curtain: Meet Our Fantastic Team!
          </h1>
          <div className="grid grid-cols-2 gap-2">
            {Team.map((member, index) => (
              <div key={index}>
                <Image
                  src={member.image}
                  alt="Image"
                  width={550}
                  height={550}
                  className="rounded-md h-[400px] cursor-pointer"
                />
                <div>
                  <div
                    className="flex cursor-pointer group border border-[#FFFFFF12] hover:border-white/50 rounded-full items-center hover:gap-3 transition-all duration-500 ease-linear"
                  >
                    <button className="flex bg-[#FFFFFF12] w-full py-5 rounded-l-full px-6 items-center gap-3 group-hover:rounded-full transition-all duration-500 ease-in-out">
                      {/* <list.icon className="w-6 h-6 group-hover:scale-150 group-hover:text-orange-400 transition-all duration-500 ease-in-out" /> */}
                      
                      <span className="font-inter font-light text-xs uppercase">
                        LinkedIn
                      </span>
                    </button>
                    <div className="flex items-center p-5 bg-[#FFFFFF12] rounded-r-full h-full group-hover:rounded-full group-hover:-rotate-45 transition-all duration-500 ease-in-out">
                      <ArrowRight size={24} />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center w-full">
                  <span className="text-white text-lg font-medium">
                    {member.name}
                  </span>
                  <span className="text-[#FFFFFF] text-xs capitalize">{member.tilte}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="my-32 mx-24">
          <h3 className="text-3xl font-syne text-center font-semibold tracking-tight text-white pb-8">
            Our Creative Playground: Where Brands Shine!
          </h3>
          <div className="h-[600px] border border-[#FFFFFF4D] rounded-[40px] overflow-hidden">
            <div className="">
              {featuresLogo.map((logo) => {
                return (
                  <div className="flex gap-44 justify-center" key={logo.id}>
                    <Image
                      src={logo.src}
                      alt="features Logo"
                      className="h-32 inline-block pb-10 about-feature1-slide"
                    />
                    <Image
                      src={logo.src}
                      alt="features Logo"
                      className="h-32 inline-block pb-10 about-feature2-slide"
                    />
                    <Image
                      src={logo.src}
                      alt="features Logo"
                      className="h-32 inline-block pb-10 about-feature1-slide"
                    />
                    <Image
                      src={logo.src}
                      alt="features Logo"
                      className="h-32 inline-block pb-10 about-feature2-slide"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mx-12 pb-32 space-y-44">
          <div className="border p-16 border-[#FFFFFF4D] rounded-[40px]">
            <div className="flex gap-16">
              <div className="flex-1 space-y-5">
                <h1 className="text-white text-3xl font-semibold tracking-tight">
                  How We Work
                </h1>
                <p className="text-[#FFFFFFCC] text-lg font-light tracking-tight">
                  At StoryStream, we&apos;re all about making the creative
                  process feel like a breeze on a sunny day. We start by diving
                  headfirst into your ideas, and then we sprinkle our creative
                  magic like confetti at a party.
                </p>
                <h2 className="text-white text-4xl font-light tracking-tighter">
                  We keep you in the loop every step of the way because, after
                  all,{' '}
                  <span className="text-[#FFFFFFCC]">it&apos;s your show!</span>
                </h2>
                <p className="text-[#FFFFFFCC] text-lg font-light tracking-tight">
                  We&apos;re the team that turns &apos;work&apos; into
                  &apos;wow,&apos; and we do it with smiles, laughter, and a
                  touch of video wizardry. So, grab your popcorn, because this
                  creative journey is going to be a blast!
                </p>
                <p className="text-[#FFFFFFCC] text-lg font-light tracking-tight">
                  We&apos;ll tap into our creative talents, dust off our
                  brainstorming hats, and make sure that the journey from
                  concept to creation is a toe-tapping, smile- inducing
                  experience. Together, we&apos;ll create video magic
                  that&apos;s not only effective but also unforgettable. Ready
                  to dance to the beat of your story? Let&apos;s get started!
                </p>
              </div>
              <div className="flex-1">
                <Image
                  src={
                    'https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                  }
                  alt="image"
                  width={500}
                  height={500}
                  className="w-full rounded-[40px]"
                />
              </div>
            </div>
          </div>
          <div className="border p-16 border-[#FFFFFF4D] rounded-[40px]">
            <div className="flex gap-16">
              <div className="flex-1">
                <motion.img
                  initial={{ y: 0 }}
                  animate={controls}
                  src={
                    'https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                  }
                  alt="image"
                  width={1000}
                  height={1000}
                  className="w-full h-[100vh] object-cover rounded-[40px]"
                />
              </div>
              <div className="flex-1 space-y-5">
                <h1 className="text-white text-3xl font-semibold tracking-tight">
                  Why us?
                </h1>
                <p className="text-[#FFFFFFCC] text-lg font-light tracking-tight">
                  People hire us not just because we&apos;re good at what we do
                  (spoiler: we are!), but because we bring the &apos;wow&apos;
                  and &apos;wow again&apos; to every project. We&apos;re the
                  team that believes in making the process as enjoyable as the
                  final product.
                </p>
                <p className="text-[#FFFFFFCC] text-lg font-light tracking-tight">
                  Imagine us as the life of the party, but at work. People
                  choose us because we&apos;re not your typical &apos;suit and
                  tie&apos; video crew. We&apos;re more like your
                  &apos;let&apos;s roll up our sleeves and make something
                  amazing&apos; kind of team. We bring that extra spark of
                  excitement to every project.
                </p>

                <h2 className="text-white text-4xl font-light tracking-tighter">
                  We&apos;re the friendly faces who turn your ideas into{' '}
                  <span className="text-[#FFFFFFCC]">
                    eye-popping video magic.
                  </span>
                </h2>
                <p className="text-[#FFFFFFCC] text-lg font-light tracking-tight">
                  From adding a sprinkle of fun to a dash of creativity,
                  we&apos;ve got the secret sauce that keeps our clients coming
                  back for more. So, why hire us? Because we&apos;re not just
                  your video crew; we&apos;re your partners in making dreams
                  come true!
                </p>
              </div>
            </div>
            <h1 className="text-white text-center py-10 font-syne font-bold text-3xl">
              Wait! There&apos;s more...
            </h1>
            <div className="grid grid-cols-2 gap-16">
              {aboutInfo.map((info, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-5 transition-all duration-1000  ${isInfoHovered && index == currentInfo ? '-rotate-1' : ''
                    }`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  <Image
                    src={info.icon}
                    alt="icons"
                    className={`w-6 h-6 transition-all duration-1000 ${isInfoHovered && index == currentInfo
                        ? 'rotate-[330deg]'
                        : ''
                      }`}
                  />
                  <div className="space-y-2">
                    <h1
                      className={` text-lg transition-all duration-500 ${isInfoHovered && index == currentInfo
                          ? 'text-[#ff7a3b]'
                          : 'text-white'
                        }`}
                    >
                      {info.title}
                    </h1>
                    <p className={`text-[#e5e3e3cc] text-base font-light`}>
                      {info.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Testimonials />
        <Faqs />
        <Partners />
      </div>
    </AppLayout>
  );
}
