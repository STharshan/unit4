import React, { useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
    {
    name: "Paul B",
    text:
      "Took my car in for mot today (Tuesday) first class service great friendly staff. Thanks for the coffee girls see you all next year",
  },
  {
    name: "Jed K",
    text:
      "Car taken in for inspection of noises and to verify diagnostic made by another garage. Confirmed to be a timing chain & tensioner issue. Repairs made in a timely fashion and cost of parts and labour reasonable. Replaced kit has fixed the problems I was experiencing.",
  },
  {
    name: "Ranj B",
    text:
      "Absolutely brilliant service. I run a transport company so I need a reliable maintenance team and these guys are on the ball keep me moving. Recommend these guys.",
  },
  {
    name: "Charlie C",
    text:
      "Fanntastic service! Very welcoming and pleasant people. Very good reasonabley priced. A very happy customer.",
  },
];

export default function Testimonials() {
  const scrollRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = current.offsetWidth;
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12 bg-white dark:bg-black transition-colors duration-500 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-600 dark:text-[#4ab8e9] font-semibold tracking-widest uppercase text-lg">
            Our Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mt-2">
            What people say about <br /> our company
          </h2>
        </div>

        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 top-1/2 mt-20 -translate-y-1/2 bg-[#4ab8e9] p-3 rounded-full shadow-md hover:bg-blue-600 hover:text-white transition z-20 group"
        >
          <FaChevronLeft className="transition-transform duration-300 group-hover:-translate-x-1" size={18} />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-4 top-1/2 mt-20 -translate-y-1/2 bg-[#4ab8e9] p-3 rounded-full shadow-md hover:bg-blue-600 hover:text-white transition z-20 group"
        >
          <FaChevronRight className="transition-transform duration-300 group-hover:translate-x-1" size={18} />
        </button>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="flex space-x-6  overflow-x-auto  scroll-smooth snap-x snap-mandatory px-2 py-8 hide-scrollbar"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              data-aos="fade-up"           // Added AOS animation
              data-aos-delay={index * 100} // Optional stagger effect
              className="flex-shrink-0 w-72 sm:w-80 md:w-96 bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-[#4ab8e9] active:shadow-[#4ab8e9] dark:hover:shadow-blue-600 dark:active:shadow-blue-600 relative snap-start"
            >
              {/* Red Corner Triangle */}
              <div className="absolute top-0 left-0 w-0 h-0 border-t-[80px] border-t-blue-600 border-r-[80px] border-r-transparent"></div>

              {/* Profile Section */}
              <div className="relative pt-6 px-6 pb-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-dashed border-white p-1 bg-blue-600">
                      <img
                        src="logo.webp"
                        alt={testimonial.name}
                        className="w-22 mt-3 h-10 mx-auto object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex-1 bg-gray-100 dark:bg-gray-700 py-3 px-4 rounded-lg">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Client
                    </p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
