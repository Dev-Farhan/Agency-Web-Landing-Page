import { motion } from "framer-motion";
import { useState } from "react";

// Utility function to format numbers
const formatNumber = (num) => {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`; // Convert to millions
  } else if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`; // Convert to thousands
  }
  return num; // Less than 1000, no formatting
};
const StatsSection = () => {
  const stats = [
    { value: 6, label: "Happy Clients" },
    { value: 11, label: "Completed Projects" },
    { value: 7000000, label: "Transactions" },
    { value: 6000, label: "Customers" },
  ];

  return (
    <div className="bg-primary text-white py-10 px-4 relative overflow-hidden lg:px-10 lg:py-28">
      {/* Decorative Elements */}
      <img
        src="/service/topLine.png"
        alt="decoration"
        className="absolute top-0 left-0 w-16 h-16"
      />
      <img
        src="/service/topRight.png"
        alt="decoration"
        className="absolute bottom-0 left-0 w-16 h-16"
      />
      <img
        src="/service/bell.png"
        alt="decoration"
        className="absolute top-0 right-0 w-16 h-16"
      />

      {/* Stats Section */}
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
        {stats.map((stat, index) => (
          <AnimatedStat key={index} value={stat.value} label={stat.label} />
        ))}
      </div>
    </div>
  );
};

const AnimatedStat = ({ value, label }) => {
  const [currentValue, setCurrentValue] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-3"
    >
      {/* Animate Numbers */}
      <motion.h1
        className="text-4xl font-bold lg:text-6xl"
        initial={{ count: 0 }}
        whileInView={{ count: value }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true }}
        onUpdate={(latest) => setCurrentValue(Math.round(latest.count))}
      >
        {formatNumber(currentValue)}
      </motion.h1>
      {/* Label */}
      <p className="text-sm lg:text-lg font-light">{label}</p>
    </motion.div>
  );
};

export default StatsSection;
