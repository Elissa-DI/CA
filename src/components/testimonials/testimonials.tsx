import { TestimonialsSlider } from "./testimonialSlider";
import Testimonails from "public/testimonial.png";

export const Testimonials = () => {
  return (
    <div
      className="h-[85vh] flex flex-col items-center justify-center mb-20"
      style={{
        backgroundImage: 'url("/images/testimonial.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backdropFilter: "visible",
      }}
    >
      <h2 className="text-white font-syne font-semibold text-center text-4xl tracking-tight pb-5">
        Our Client Chronicles:{" "}
        <span className="block">Stories that Make Us Smile!</span>
      </h2>
      <TestimonialsSlider />
    </div>
  );
};
