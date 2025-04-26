import React from "react";
import { motion } from "motion/react";

const SubscribeBox = () => {
  return (
    <div className="relative bg-[#E8F4FA] dark:bg-primary-dark flex flex-col items-center py-20 px-2 dark:border-t dark:border-gray-600">
      <motion.p
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="text-center mb-10 text-xl font-semibold lg:text-3xl lg:w-1/3 dark:text-primary-light"
      >
        Lorem Ipsum is simply dummy text of the printing.
      </motion.p>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="flex gap-2"
      >
        <input
          type="text"
          placeholder="Enter your email"
          className="border-2 p-2 rounded-md w-48 lg:w-96 lg:p-4 text-sm"
        />
        <button
          type="button"
          className="bg-black text-white p-2 rounded-md lg:px-5"
        >
          Subscribe
        </button>
      </motion.div>
      <img
        src="/star.png"
        alt="star"
        className="h-20 w-auto absolute -top-10 left-0"
      />
      <img
        src="/cc.png"
        alt="star"
        className="h-16 w-auto absolute bottom-1 right-10 lg:top-24 lg:right-24"
      />
    </div>
  );
};

export default SubscribeBox;
