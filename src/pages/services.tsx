import TestimonialsSlider from "@components/testimonials/testimonialSlider";
import AppLayout from "@layout/app";
import Image from "next/image";
import {
  CollaborationIcon,
  CreativityIcon,
  RecordIcon,
  SearchIcon,
  SolutionsIcon,
  TeamIcon,
} from "@utils/images";
import { ArrowRight } from "phosphor-react";
import { Faqs } from "@components/faqs";
import { Partners } from "@components/partners";

const aboutInfo = [
  {
    title: "Exceptional Creativity",
    description:
      "Clients choose us for our unparalleled creative prowess. We breathe life into ideas, turning them into visually stunning, memorable videos.",
    icon: CreativityIcon,
  },
  {
    title: "Proven Track Record",
    description:
      "Our portfolio is a testament to our success. We've consistently delivered outstanding results, earning the trust of clients time and again.",
    icon: RecordIcon,
  },
  {
    title: "Collaborative Approach",
    description:
      "We don't just work for our clients; we work with them. Our collaborative spirit ensures that each project is a true partnership, vision coming to life",
    icon: CollaborationIcon,
  },
  {
    title: "Innovative Solutions",
    description:
      "We're known for pushing boundaries and finding innovative solutions. Clients appreciate our ability to think outside the box and deliver beyond expectations.",
    icon: SolutionsIcon,
  },
  {
    title: "Exceptional Team",
    description:
      "Our team is a powerhouse of talent, experience, and passion. Clients choose us for the depth of expertise and dedication we bring to every project.",
    icon: TeamIcon,
  },
  {
    title: "Attention to Detail",
    description:
      "We obsess over the finer points. Every frame, every edit, every sound is carefully crafted to ensure the highest quality and maximum impact.",
    icon: SearchIcon,
  },
];

const Values = [
  {
    title: "Corporate Video",
    number: "01",
  },
  {
    title: "Commercial Video",
    number: "02",
  },
  {
    title: "Documentary Film",
    number: "03",
  },
  {
    title: "Product Video",
    number: "04",
  },
  {
    title: "Animation",
    number: "05",
  },
  {
    title: "Event Video",
    number: "06",
  },
  {
    title: "Educational Video",
    number: "07",
  },
  {
    title: "Entertainment Video",
    number: "08",
  },
  {
    title: "Fashion Video",
    number: "09",
  },
  {
    title: "Lifestyle",
    number: "10",
  },
  {
    title: "Interview Video",
    number: "11",
  },
  {
    title: "Social Media Videos",
    number: "12",
  },
];

export default function Services() {
  return (
    <AppLayout>
      <div className="overflow-clip">
        <div
          style={{
            backgroundImage: 'url("/images/testimonial.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="w-full h-[70vh]"
        ></div>
        <div className="mx-12 mt-24 border py-12 rounded-[40px] border-[#FFFFFF4D]">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
            <h1 className="text-white text-3xl font-semibold tracking-tight">
              Rent, Shoot, Wow: Our Studio Awaits!
            </h1>
            <p className="text-[#FFFFFFCC] text-center text-lg tracking-tight">
              We&apos;ve got the coolest tech and all the resources to bring
              your ideas to life. Book a tour and come be a part of the
              excitement – we&apos;re eager to show you around with a smile!
            </p>
            <button className="text-black px-6 py-2 bg-white outline outline-offset-2 outline-white/50 rounded-full">
              Book a Tour
            </button>
          </div>
          <div className="mt-10">
            <TestimonialsSlider />
          </div>
        </div>
        <div className="mx-12 mt-24 border p-12 rounded-[40px] border-[#FFFFFF4D]">
          <div className="flex gap-10">
            <div className="flex flex-col flex-1 justify-between">
              <div className="space-y-3 sticky top-24 z-50">
                <h1 className="text-white text-3xl font-semibold tracking-tight">
                  Pre-Production
                </h1>
                <p className="text-[#FFFFFFCC] text-lg font-light tracking-tighter">
                  Before the cameras roll, the magic of video production begins
                  with pre- production. This is where your ideas take shape,
                  scripts are written, and plans are made.
                </p>
                <p className="text-white text-4xl tracking-tighter">
                  <span className="text-[#FFFFFF80]">Pre-production</span> is
                  the critical planning phase where we lay the foundation for
                  your video project. This stage involves:
                </p>
              </div>
              <div className="flex gap-4 overflow-hidden main-slide relative">
                <Image
                  src={
                    "https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  }
                  alt="image"
                  width={500}
                  height={500}
                  className="service-slide rounded-xl"
                />
                <Image
                  src={
                    "https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  }
                  alt="image"
                  width={500}
                  height={500}
                  className="service-slide rounded-xl"
                />
                <Image
                  src={
                    "https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  }
                  alt="image"
                  width={500}
                  height={500}
                  className="service-slide rounded-xl"
                />
                <Image
                  src={
                    "https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  }
                  alt="image"
                  width={500}
                  height={500}
                  className="service-slide rounded-xl"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-16 flex-1">
              {aboutInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-5">
                  <Image src={info.icon} alt="icons" className="w-6 h-6" />
                  <div className="space-y-2">
                    <h1 className="text-white text-lg">{info.title}</h1>
                    <p className="text-[#FFFFFFCC] text-base font-light">
                      {info.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-12 mt-24 border p-12 rounded-[40px] border-[#FFFFFF4D]">
          <div className="flex gap-10">
            <div className="grid grid-cols-1 gap-16 flex-1">
              {aboutInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-5">
                  <Image src={info.icon} alt="icons" className="w-6 h-6" />
                  <div className="space-y-2">
                    <h1 className="text-white text-lg">{info.title}</h1>
                    <p className="text-[#FFFFFFCC] text-base font-light">
                      {info.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col flex-1 justify-between">
              <div className="space-y-3 sticky top-24 z-50">
                <h1 className="text-white text-3xl font-semibold tracking-tight">
                  Pre-Production
                </h1>
                <p className="text-[#FFFFFFCC] text-lg font-light tracking-tighter">
                  Before the cameras roll, the magic of video production begins
                  with pre- production. This is where your ideas take shape,
                  scripts are written, and plans are made.
                </p>
                <p className="text-white text-4xl tracking-tighter">
                  <span className="text-[#FFFFFF80]">Pre-production</span> is
                  the critical planning phase where we lay the foundation for
                  your video project. This stage involves:
                </p>
              </div>
              <div className="flex gap-4 overflow-hidden main-slide relative">
                <Image
                  src={
                    "https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  }
                  alt="image"
                  width={500}
                  height={500}
                  className="service-slide rounded-xl"
                />
                <Image
                  src={
                    "https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  }
                  alt="image"
                  width={500}
                  height={500}
                  className="service-slide rounded-xl"
                />
                <Image
                  src={
                    "https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  }
                  alt="image"
                  width={500}
                  height={500}
                  className="service-slide rounded-xl"
                />
                <Image
                  src={
                    "https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  }
                  alt="image"
                  width={500}
                  height={500}
                  className="service-slide rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mx-12 mt-24 border p-12 rounded-[40px] border-[#FFFFFF4D]">
          <div className="flex gap-10">
            <div className="flex flex-col flex-1 justify-between">
              <div className="space-y-3 sticky top-24 z-50">
                <h1 className="text-white text-3xl font-semibold tracking-tight">
                  Pre-Production
                </h1>
                <p className="text-[#FFFFFFCC] text-lg font-light tracking-tighter">
                  Before the cameras roll, the magic of video production begins
                  with pre- production. This is where your ideas take shape,
                  scripts are written, and plans are made.
                </p>
                <p className="text-white text-4xl tracking-tighter">
                  <span className="text-[#FFFFFF80]">Pre-production</span> is
                  the critical planning phase where we lay the foundation for
                  your video project. This stage involves:
                </p>
              </div>
              <div className="flex gap-4 overflow-hidden main-slide relative">
                <Image
                  src={
                    "https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  }
                  alt="image"
                  width={500}
                  height={500}
                  className="service-slide rounded-xl"
                />
                <Image
                  src={
                    "https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  }
                  alt="image"
                  width={500}
                  height={500}
                  className="service-slide rounded-xl"
                />
                <Image
                  src={
                    "https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  }
                  alt="image"
                  width={500}
                  height={500}
                  className="service-slide rounded-xl"
                />
                <Image
                  src={
                    "https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  }
                  alt="image"
                  width={500}
                  height={500}
                  className="service-slide rounded-xl"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-16 flex-1">
              {aboutInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-5">
                  <Image src={info.icon} alt="icons" className="w-6 h-6" />
                  <div className="space-y-2">
                    <h1 className="text-white text-lg">{info.title}</h1>
                    <p className="text-[#FFFFFFCC] text-base font-light">
                      {info.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-12 mt-24 border p-12 rounded-[40px] border-[#FFFFFF4D] mb-32">
          <h1 className="text-white text-3xl font-semibold tracking-tight pb-3">
            We are your experts in these categories
          </h1>
          <p className="text-[#FFFFFFCC] max-w-3xl text-lg font-light tracking-tighter pb-10">
            Our creative toolbox overflows with video possibilities! From
            captivating stories to informative animations, we craft videos that
            fit every need.
          </p>
          {Values.map((value, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className="relative mb-10">
                <span className="text-[#FFFFFF4D] text-[120px] font-bold tracking-tighter">
                  {value.number}
                </span>
                <span className="absolute whitespace-nowrap left-20 bottom-12 text-white text-3xl tracking-tight">
                  {value.title}
                </span>
              </div>
              <ArrowRight className="text-[#FFFFFFCC] w-[50px] h-full" />
            </div>
          ))}
        </div>
        <Faqs />
        <Partners />
      </div>
    </AppLayout>
  );
}
