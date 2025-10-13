import React, { useState, useEffect } from 'react';
import { FaOilCan, FaWrench, FaTools, FaClipboardList, FaCog, FaSyncAlt, FaCar, FaBolt, FaTachometerAlt } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServiceModal = ({ isOpen, onClose, service }) => {
  if (!isOpen || !service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transition-colors duration-500"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <service.icon className="w-8 h-8 text-blue-600" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              {service.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            <FaTimes className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 md:p-8">
          <div className="space-y-6">
            <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
              {service.description}
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed whitespace-pre-line">
              {Array.isArray(service.features)
                ? service.features.join('\n')
                : service.features}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ service, onClick, aosDelay }) => {
  const Icon = service.icon;
  const isHighlighted = service.bgColor && service.bgColor.includes('blue-600');

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className={`${service.bgColor || 'bg-white dark:bg-gray-800'
        } p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer transform hover:-translate-y-1 hover:shadow-[#4ab8e9] active:shadow-[#4ab8e9] dark:hover:shadow-blue-600 dark:active:shadow-blue-600`}
      onClick={onClick}
    >
      <div className="mb-4">
        <Icon
          className={`w-12 h-12 md:w-16 md:h-16 ${isHighlighted ? 'text-white' : 'text-blue-600'
            }`}
        />
      </div>
      <h3
        className={`text-xl md:text-2xl font-bold mb-3 md:mb-4 ${isHighlighted ? 'text-white' : 'text-gray-900 dark:text-white'
          }`}
      >
        {service.title}
      </h3>
      <p
        className={`text-sm md:text-base mb-4 md:mb-6 leading-relaxed ${isHighlighted ? 'text-white' : 'text-gray-600 dark:text-gray-300'
          }`}
      >
        {service.desc}
      </p>

      <button
        className={`block font-semibold text-sm md:text-base transition-colors border-b-2 pb-1 ${isHighlighted
            ? 'text-white border-white hover:opacity-80'
            : 'text-blue-600 border-blue-600 hover:text-[#4ab8e9] hover:border-[#4ab8e9]'
          } mt-4`}
      >
        Read More
      </button>
    </div>
  );
};

export default function CarServicesSection() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);

  const services = [
  {
    icon: FaOilCan,
    title: "DPF Solutions",
    desc: "We clean, remove restrictions, or reprogram your Diesel Particulate Filter (DPF) system to restore engine efficiency and performance.",
    description: "We clean, remove restrictions, or reprogram your Diesel Particulate Filter (DPF) system to restore engine efficiency and performance.",
    features: "",
  },
  {
    icon: FaWrench,
    title: "EGR Solutions",
    desc: "Our EGR (Exhaust Gas Recirculation) solutions help reduce engine issues and improve fuel economy by eliminating blockages and faults.",
    description: "Our EGR (Exhaust Gas Recirculation) solutions help reduce engine issues and improve fuel economy by eliminating blockages and faults.",
    features: "",
  },
  {
    icon: FaBolt,
    title: "AdBlue Solutions",
    desc: "We diagnose and fix AdBlue system faults to keep your emissions system running smoothly and prevent costly breakdowns.",
    description: "We diagnose and fix AdBlue system faults to keep your emissions system running smoothly and prevent costly breakdowns.",
    features: "",
  },
  {
    icon: FaClipboardList,
    title: "Stop-Start System Repairs",
    desc: "We repair and recalibrate stop-start systems to ensure smooth engine shutdowns and restarts, enhancing fuel savings and drivability.",
    description: "We repair and recalibrate stop-start systems to ensure smooth engine shutdowns and restarts, enhancing fuel savings and drivability.",
    features: "",
  },
  {
    icon: FaCog,
    title: "Servicing",
    desc: "Our full vehicle servicing keeps your car in peak condition, covering everything from oil changes to full system checks.",
    description: "Our full vehicle servicing keeps your car in peak condition, covering everything from oil changes to full system checks.",
    features: "",
  },
  {
    icon: FaSyncAlt,
    title: "Speed Limiter Adjustments",
    desc: "We adjust or remove speed limiters to give you the freedom and control to drive your car without unnecessary restrictions.",
    description: "We adjust or remove speed limiters to give you the freedom and control to drive your car without unnecessary restrictions.",
    features: "",
  },
  {
    icon: FaBolt,
    title: "Fault Code Diagnostics",
    desc: "Using advanced tools, we scan and diagnose your car's error codes to accurately pinpoint and fix underlying issues.",
    description: "Using advanced tools, we scan and diagnose your car's error codes to accurately pinpoint and fix underlying issues.",
    features: "",
  },
  {
    icon: FaTachometerAlt,
    title: "General Diagnostics",
    desc: "We perform thorough diagnostic tests on your entire vehicle to identify and resolve performance or electrical problems.",
    description: "We perform thorough diagnostic tests on your entire vehicle to identify and resolve performance or electrical problems.",
    features: "",
  },
  {
    icon: FaTools,
    title: "Speed Limit Removal",
    desc: "We safely remove factory-imposed speed restrictions for a more responsive and unrestricted driving experience.",
    description: "We safely remove factory-imposed speed restrictions for a more responsive and unrestricted driving experience.",
    features: "",
  },
  {
    icon: FaTools,
    title: "Stage 1 and Stage 2 Power Increases",
    desc: "Through expert remapping, we boost your engine’s power and torque with Stage 1 or Stage 2 tuning — for faster, more exciting performance.",
    description: "Through expert remapping, we boost your engine’s power and torque with Stage 1 or Stage 2 tuning - for faster, more exciting performance.",
    features: "",
  },
  {
    icon: FaCar,
    title: "Timing chains and Wet belts",
    desc: "We specialise in diagnosing and replacing timing chains and wet belts to keep your engine running smoothly and reliably.",
    description: "We specialise in diagnosing and replacing timing chains and wet belts to keep your engine running smoothly and reliably.",
    features: "",
  },
];


  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 300);
  };

  return (
    <>
      <section
        id='services'
        data-aos="fade-up"
        className="relative py-12 md:py-20 px-4 md:px-8 overflow-hidden bg-white dark:bg-black transition-colors duration-500 scroll-m-10"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute right-0 top-0 w-1/2 h-full">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <path
                d="M 20 100 Q 60 60, 100 100 T 180 100"
                stroke="white"
                strokeWidth="2"
                fill="none"
                opacity="0.3"
              />
              <path
                d="M 20 120 Q 60 80, 100 120 T 180 120"
                stroke="white"
                strokeWidth="2"
                fill="none"
                opacity="0.3"
              />
            </svg>
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-10">
            <p className="dark:text-[#4ab8e9] text-blue-600  text-lg font-semibold tracking-wider mb-2">
              OUR SERVICES
            </p>
            <h2 className="text-gray-900 dark:text-white text-2xl md:text-4xl lg:text-5xl font-bold">
              WE PROVIDE BEST SERVICES
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                onClick={() => handleServiceClick(service)}
                aosDelay={index * 100} // stagger effect
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <ServiceModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        service={selectedService}
      />
    </>
  );
}
