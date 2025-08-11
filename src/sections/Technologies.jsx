import React from "react";
import { motion } from "framer-motion";
import pythonLogo from "../assets/python.png";
import djangoLogo from "../assets/django.png";
import reactLogo from "../assets/react.png";
import postgresqlLogo from "../assets/frappe.png";
import mysqlLogo from "../assets/mysql.png";
import erpnextLogo from "../assets/erpnext.png";
import php from "../assets/php.png";

const floatAnimation = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

const Technologies = () => {
  const techStack = [
    { name: "Python", logo: pythonLogo },
    { name: "Django", logo: djangoLogo },
    { name: "React", logo: reactLogo },
    { name: "PostgreSQL", logo: postgresqlLogo },
    { name: "MySQL", logo: mysqlLogo },
    { name: "ERPNext", logo: erpnextLogo },
    { name: "PHP", logo: php },
  ];

  return (
    <section className="relative py-20 bg-white text-blue-950 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-tr from-blue-50 via-white to-blue-50 opacity-30 pointer-events-none"></div>
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-extrabold mb-4 text-blue-950 tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >Technologies We Use
        </motion.h2>
        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          We use industry-leading technologies to create scalable, secure, and
          high-performing solutions tailored to your business needs.
        </motion.p>

        {/* Tech list Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-12">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, zIndex: 10 }}
            >
              {/* Glassmorphism Card with floating animation */}
              <motion.div
                className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 shadow-xl cursor-pointer
                  hover:shadow-blue-400/50 transition-shadow duration-300"
                {...floatAnimation}
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="h-20 w-20 object-contain"
                  draggable={false}
                />
              </motion.div>
              <p className="mt-4 text-sm font-semibold text-gray-800 tracking-wide select-none">
                {tech.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
7