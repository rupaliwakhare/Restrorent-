import React from "react";
import Title from "./Title";
import { testimonials } from "../assets/assets";

const Testimonial = () => {
  return (
    <div className="flex flex-col items-center px-6 md:px-16 md:px16 lg:px-24 bg-slate-50 pt-20 pb-30">
      <Title
        title="What Our Guests Say"
        subTitle="Discover why discrening travelers consistency choose QuickStay for their exclusive and kuxurious accommodations around the world."
      />
      <div className="flex flex-wrap items-center gap-6 mt-20 ">
        {testimonials.map((Testimonial) => (
          <div
            key={Testimonial.id}
            className="bg-white p-6 rounded-xl shadow max-xs"
          >
            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12 rounded-full"
                src={Testimonial.image}
                alt={Testimonial.name}
              />
              <div>
                <p className="font-playfair text-xl">{Testimonial.name}</p>
                <p className="text-gray-500">{Testimonial.address}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-4">
              {Array(5).fill(0).map((_, index)=>(
                <star key="index" filled={Testimonial.rating > index}></star>
              ))}
            </div>
            <p className="text-gray-500"></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
