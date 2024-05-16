import { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const slides = [
  {
    url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    url: "https://images.unsplash.com/photo-1682686578289-cf9c8c472c9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];

export const TestimonialsSlider = () => {
  const [emblaRef, embla] = useEmblaCarousel({
    loop: true,
    containScroll: "keepSnaps",
    duration: 30,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    embla && embla.scrollPrev();
    embla && setSelectedIndex(embla.selectedScrollSnap());
  }, [embla]);

  const scrollNext = useCallback(() => {
    embla && embla.scrollNext();
    embla && setSelectedIndex(embla.selectedScrollSnap());
  }, [embla]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex will-change-transform -ml-4">
          {slides.map((slide, index) => (
            <div key={index} className="flex-shrink-0 flex-grow-0 pl-4">
              <img
                src={slide.url}
                alt="sample"
                className={`w-[1248px] h-[540px] rounded-md object-cover  duration-500 ease-in-out ${
                  index === selectedIndex ? "scale-y-100" : "scale-y-75"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={scrollPrev}
        className="h-8 w-8 rounded-full flex items-center justify-center bg-white absolute top-1/2 -translate-y-1/2 z-10 shadow-md left-[11%]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        onClick={scrollNext}
        className="h-8 w-8 rounded-full flex items-center justify-center bg-white  absolute top-1/2 -translate-y-1/2 z-10 shadow-md right-[13%]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 rotate-180"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default TestimonialsSlider;
