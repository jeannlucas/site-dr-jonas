import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import TestimonialTemplate from "./TestimonialTemplate";
import "./testimonial.css";

const testimonialData = [
  {
    quote: `Ótimo atendimento, profissional humanizado. Recomendo muito o Dr. Jonas!`,
    name: "Renata Bufollo Rodrigues",
  },
  {
    quote: `Dr Jonas é um excelente profissional! Recomendo!`,
    name: "Leonardo Henrique",
  },
  {
    quote: `Excelente profissional, recomendo!`,
    name: "Vinicius Tomazini",
  },
  {
    quote: `Profissional excelente, extremamente ético!`,
    name: "Roberta Parma",
  },
];

const Testimonial = () => {
  return (
    <div className="flex mx-auto justify-center px-2 max-w-218 pb-10 md:pb-25">
      <div className="w-full h-full cursor-grab">
        <p className="section-title mb-6 text-center">
          O que nossos pacientes dizem
        </p>
        <Swiper
          id="testimonialSwiper"
          spaceBetween={30}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialTemplate testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
