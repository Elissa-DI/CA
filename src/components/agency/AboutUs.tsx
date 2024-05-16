export const AboutUs = () => {
  return (
    <div className="flex h-[47vh] mx-12 my-32">
      <div className="sticky top-24 mb-20">
        <h3 className="text-white whitespace-nowrap h-full">
          About Our Agency
        </h3>
      </div>
      <div className="ml-72">
        <h2 className="text-2xl leading-10 tracking-tighter bg-gradient-to-r from-white to-[rgb(116,113,113)] bg-clip-text text-transparent">
          Established in 2015, we have dedicated ourselves to crafting
          captivating visual narratives defined by creativity, innovation, and
          an unwavering commitment to excellence in video production.
        </h2>
        <p className="text-white/80 text-lg font-light tracking-tight leading-7 pt-10">
          Our mission is clear: to transform ideas into compelling visual
          stories. We believe that every project is an opportunity to create
          something extraordinary. Whether it&apos;s a corporate video, a
          commercial, an event coverage, or an animation, we approach each
          endeavor with creativity, enthusiasm, and a commitment to exceeding
          our client&apos;s expectations.
        </p>
        <div className="grid grid-cols-2 gap-y-10 mt-16">
          <div className="relative flex justify-center">
            <span className="text-white text-7xl text-gradient font-bold leading-tight">
              <span className="text-6xl align-top">1</span>5+
            </span>
            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white font-bold text-base uppercase leading-5 tracking-tighter">
              Years of experience
            </span>
          </div>
          <div className="relative flex justify-center">
            <span className="text-white text-6xl text-gradient font-bold">
              15+
            </span>
            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white font-bold text-base uppercase leading-5 tracking-tighter">
              Years of experience
            </span>
          </div>
          <div className="relative flex justify-center">
            <span className="text-white text-6xl text-gradient font-bold">
              15+
            </span>
            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white font-bold text-base uppercase leading-5 tracking-tighter">
              Years of experience
            </span>
          </div>
          <div className="relative flex justify-center">
            <span className="text-white text-6xl text-gradient font-bold">
              15+
            </span>
            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white font-bold text-base uppercase leading-5 tracking-tighter">
              Years of experience
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
