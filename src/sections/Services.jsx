import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import {
  FaCogs,
  FaTools,
  FaChalkboardTeacher,
  FaNetworkWired,
  FaServer,
  FaHandHoldingUsd,
} from "react-icons/fa";

const services = [
  {
    title: "Business Consultation",
    desc: "Our experts provide consulting to help businesses streamline operations, improve efficiency, and achieve their goals with ERPNext.",
    icon: <FaHandHoldingUsd size={48} className="text-teal-400 drop-shadow-teal" />,
  },
  {
    title: "ERPNext Implementation Support",
    desc: "We offer personalized implementation support to ensure a smooth and successful transition to ERPNext, minimizing disruption and maximizing benefits.",
    icon: <FaCogs size={48} className="text-teal-400 drop-shadow-teal" />,
  },
  {
    title: "Customization & Integration",
    desc: "We specialize in tailoring ERPNext to meet the unique needs of your business, seamlessly integrating it with your existing systems and workflows.",
    icon: <FaNetworkWired size={48} className="text-teal-400 drop-shadow-teal" />,
  },
  {
    title: "Server Maintenance",
    desc: "We support you in the technical aspects of keeping the system maintaining server, and keeping apps updated by fixing bugs and upgrading version.",
    icon: <FaServer size={48} className="text-teal-400 drop-shadow-teal" />,
  },
  {
    title: "Training",
    desc: "We have proper training program that ensures the efficient and effective use of the ERP system for users.",
    icon: <FaChalkboardTeacher size={48} className="text-teal-400 drop-shadow-teal" />,
  },
  {
    title: "Integration",
    desc: "We integrate customized hardware devices (Local Sync Node, PLC/SCADA Industrial Automation Systems, Vehicle Tracking Systems, Desktop/Handled POS Printers, POS Terminals, POS Cash Box, POS Billing Terminal, Electronic Weighing Machines, Access Control Systems, Switching Systems, etc.) & 3rd party apps to ERPNext.",
    icon: <FaTools size={48} className="text-teal-400 drop-shadow-teal" />,
  },
];

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
    appendDots: dots => (
      <div>
        <ul className="mt-6 flex justify-center space-x-3">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-4 h-4 rounded-full bg-teal-600 opacity-60 hover:opacity-100 transition-all"></div>
    ),
  };

  return (
    <section
      id="services"
      className="relative min-h-screen bg-gradient-to-b from-[#0A1F44] to-[#00172F] flex items-center justify-center overflow-hidden px-4 py-8 sm:py-0"
    >
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute top-16 left-16 opacity-10 w-48 h-48 text-teal-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" />
        </svg>
        <svg
          className="absolute bottom-16 right-16 opacity-10 w-64 h-64 text-teal-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="3" y="3" width="18" height="18" rx="3" />
        </svg>
      </div>
      
      <motion.div
        className="relative z-10 max-w-7xl w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-teal-300 via-cyan-400 to-teal-300 bg-clip-text text-transparent animate-gradient">
          Our Services
        </h2>

      {/* Desktop Slider */}
      <div className="hidden sm:block">
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index} className="px-3">
              <div className="group card-tilt relative bg-[#09203F]/70 backdrop-blur-md border border-teal-700 rounded-2xl p-8 shadow-lg h-[380px] flex flex-col items-center text-center transition-transform duration-300 cursor-pointer">
                <div className="mb-5 animate-float-rotate group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-teal-300 mb-3">{service.title}</h3>
                <p className="text-teal-200 text-base leading-7">{service.desc}</p>
                <div className="absolute inset-0 rounded-2xl border border-blue-900 opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none"></div>
              </div>
            </div>
          ))}
        </Slider>
        </div>

        {/* Mobile Vertical List */}
        <div className="flex flex-col space-y-6 sm:hidden">
          {services.map((service, index) => (
            <div key={index} className="group relative bg-[#09203F]/80 backdrop-blur-md border border-teal-700 rounded-2xl p-6 shadow-lg flex flex-col items-center text-center">
              <div className="mb-4 animate-float-rotate">{service.icon}</div>
              <h3 className="text-lg font-semibold text-teal-300 mb-2">{service.title}</h3>
              <p className="text-teal-200 text-sm leading-6">{service.desc}</p>
              <div className="absolute inset-0 rounded-2xl border border-blue-900 opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="mt-18 flex justify-center">
          <a
            href="#contact"
            className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-lg transition"
          >Get Started with ERPNext
          </a>
        </div>
      </motion.div>

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 6s ease infinite;
        }

        @keyframes float-rotate {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(5deg); }
        }
        .animate-float-rotate {
          animation: float-rotate 4s ease-in-out infinite;
        }

        .card-tilt {
          transition: transform 0.3s ease;
          transform-style: preserve-3d;
          cursor: pointer;
        }
        .card-tilt:hover {
          transform: rotateY(8deg) rotateX(4deg) translateY(-8px);
          box-shadow: 0 10px 20px rgba(14, 203, 252, 0.4);
        }

        /* Slick dots custom style */
        .slick-dots {
          bottom: -30px;
        }
        .slick-dots li button:before {
          font-size: 0;
        }
        .slick-dots li div {
          width: 14px;
          height: 14px;
          background: #0e93fc;
          opacity: 0.5;
          border-radius: 9999px;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .slick-dots li.slick-active div {
          background: #14b8a6;
          opacity: 1;
          box-shadow: 0 0 10px #14b8a6;
          width: 18px;
          height: 18px;
        }
      `}</style>
    </section>
  );
};

export default Services;
