import React, { useEffect } from 'react';
import { FaCar } from 'react-icons/fa';
import { FiSettings, FiTool } from 'react-icons/fi';
import { MdOutlinePayment } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
  {
    id: 1,
    title: 'PERFORMANCE–DRIVEN EXPERTISE',
    desc: "From Stage 1 and 2 remaps to DPF, EGR, and AdBlue solutions, we specialise in fine-tuning your car for maximum power, efficiency, and responsiveness.",
    icon: <FaCar className="w-20 h-20 mx-auto mb-4 text-blue-600" />,
  },
  {
    id: 2,
    title: 'FULL–SERVICE SOLUTIONS',
    desc: "Whether it’s fault code diagnostics, stop-start system repairs, or routine servicing — we handle it all under one roof, saving you time and hassle.",
    icon: <FiSettings className="w-20 h-20 mx-auto mb-4 text-blue-600" />,
  },
  {
    id: 3,
    title: 'PRECISION. PASSION. CARE.',
    desc: "We treat every car like our own. With top-tier tools and genuine passion for performance, you can count on results that feel as good as they drive.",
    icon: <FiTool className="w-20 h-20 mx-auto mb-4 text-blue-600" />,
  },
  {
    id: 4,
    title: 'LOCAL, TRUSTED, PROVEN',
    desc: "Based in the heart of Leicester, we’ve built our name on quality, honesty, and customer satisfaction. When you come to Unit Four, you come to the best.",
    icon: <MdOutlinePayment className="w-20 h-20 mx-auto mb-4 text-blue-600" />,
  },
];

const ServiceSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-in-out' });
  }, []);

  return (
    <section className="py-1 px-6 bg-white dark:bg-black text-black dark:text-gray-100 transition-colors duration-300">
      {/* Section Title */}
      <div className="text-center mb-8">
        <p className="text-blue-600  dark:text-[#4ab8e9] font-semibold uppercase tracking-wide text-lg">
          Built for Results
        </p>
        <h2 className="text-4xl font-extrabold text-gray-900 max-w-xl mx-auto dark:text-gray-100 mb-3 sm:mb-4 leading-tight sm:leading-snug">
          Why Choose Us?
        </h2>
        <p className='text-lg text-gray-600 max-w-2xl mx-auto'>At Unit Four, we do more than just fix cars — we unlock their full potential. Here’s why drivers across Leicester trust us with their vehicles:</p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto gap-8">
        {services.map((service, index) => (
          <div
            key={service.id}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="bg-white w-100 dark:bg-gray-800 shadow-lg rounded-xl p-6 text-center transition-colors duration-300 hover:shadow-[#4ab8e9] active:shadow-[#4ab8e9] dark:hover:shadow-blue-600 dark:active:shadow-blue-600"
          >
            {service.icon}
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-90 mx-auto">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
