import React, { useEffect } from "react";
import { FiArrowRight, FiPlay } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="bg-white dark:bg-black" id="hero">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 overflow-hidden rounded-b-4xl">

        {/* 🔹 Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover "
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>

        {/* 🔹 Dark Overlay */}
        <div className="absolute inset-0 bg-black/70 -z-10"></div>

        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center text-white">
          {/* Left Content */}
          <div className="space-y-6" data-aos="fade-right">
            <h1 className="text-2xl md:text-3xl lg:text-4xl mt-30 sm:mt-10 font-extrabold leading-tight">
              Unleashing Your Engine’s Full Potential
            </h1>

            <div className="flex items-center gap-5 pt-4">
              <a href="/#contact">
                <button className="border-2 border-blue-500 px-6 py-3 rounded-full flex items-center gap-2 group hover:bg-blue-600 transition font-semibold">
                  <span className="text-sm lg:text-base transition-transform duration-300 group-hover:-translate-x-1">
                    Book Your Mobile Service Today
                  </span>
                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1 mt-1" />
                </button>
              </a>

              <button className="w-14 h-14 rounded-full border-2 border-gray-400 flex items-center justify-center hover:border-blue-600 transition">
                <FiPlay className="text-2xl" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white text-black shadow-lg py-10 -mt-12 w-[80%] px-6 md:px-12 lg:px-20 rounded-2xl max-w-5xl mx-auto z-10 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 items-center">
          <div className="text-center" data-aos="fade-up">
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-600">500+</h3>
            <p className="text-blue-600">Cars Repaired</p>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-600">10+</h3>
            <p className="text-blue-600">Years in Business</p>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-600">24+</h3>
            <p className="text-blue-600">Hour Turnaround</p>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-600">4.9+</h3>
            <p className="text-blue-600">Customer Rating</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
