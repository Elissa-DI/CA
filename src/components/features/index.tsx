import { logo1, logo2, logo3, logo4, logo5 } from "@utils/images";
import Image from "next/image";

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
];

export const Features = () => {
  return (
    <div className="my-32">
      <h3 className="text-3xl font-syne text-center font-semibold tracking-tight text-white pb-8">
        Features Brands: My Collaborations
      </h3>
      <div className="m-auto whitespace-nowrap relative border border-white/50 max-w-3xl px-1 rounded-full overflow-hidden">
        <div className="main-slide">
          {featuresLogo.map((logo) => {
            return (
              <Image
                key={logo.id}
                src={logo.src}
                alt="features Logo"
                className="h-16 inline-block pr-5 border-r border-white/50 service-slide"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
