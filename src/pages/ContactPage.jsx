import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaPhone,
  FaTwitter,
} from "react-icons/fa6";
import { motion } from "motion/react";
import MapImg from "../assets/map.png";

const ContactPage = () => {
  return (
    <div className="">
      <div className="flex flex-col mt-3 gap-6 px-2 md:flex-row  md:items-center md:justify-center lg:justify-evenly md:my-16">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/src/assets/avatar.png"
            alt="Avatar"
            className="h-16 w-auto p-2 bg-[#F5F3DA] rounded-full"
          />
          <h1 className="text-3xl font-semibold leading-relaxed tracking-wider lg:text-4xl my-4 dark:text-primary-light">
            Let's Collaborate
          </h1>
          <p className="text-md max-w-xs text-[#777777] lg:my-6 dark:text-primary-gray">
            Lorem Ipsum is simply dummy text of the printing .
          </p>
        </motion.div>
        <div>
          <img src={MapImg} alt="Map" className="max-w-xs lg:max-w-xl" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 my-10 mx-3 md:grid-cols-2 lg:grid-cols-3 lg:justify-items-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className=" flex flex-col gap-2"
        >
          <p className="text-xs dark:text-primary-light">Follow us</p>
          <div className="flex gap-6">
            <FaFacebook
              size={32}
              className="bg-white p-2 rounded-full drop-shadow-lg "
            />
            <FaInstagram
              size={32}
              className="bg-white p-2 rounded-full drop-shadow-lg "
            />
            <FaTwitter
              size={32}
              className="bg-white p-2 rounded-full drop-shadow-lg "
            />
            <FaLinkedin
              size={32}
              className="bg-white p-2 rounded-full drop-shadow-lg "
            />
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          className="flex items-center gap-3 my-5"
        >
          <FaPhone size={20} className="dark:text-primary-light" />
          <p className="text-[#333333] dark:text-primary-light">
            +94 4444 5555 6
          </p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="flex items-center gap-3"
        >
          <FaLocationDot size={20} className="dark:text-primary-light" />
          <p className="text-[#333333] dark:text-primary-light">
            Lorem ipsum dolor sit amet.
          </p>
        </motion.div>
      </div>

      <div className="bg-[#E8F4FA] dark:bg-primary-dark w-full text-center py-10">
        <motion.h1
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="text-2xl tracking-wider dark:text-primary-light"
        >
          Say Hello
        </motion.h1>
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          className="text-[#777777] text-sm py-2"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </motion.p>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-3 justify-self-center w-full max-w-xl px-3 my-10"
        >
          <div className="flex flex-col items-start gap-1 w-full">
            <label className="text-xs text-[#4F4F4F]">First Name</label>
            <input
              type="text"
              className="p-2 rounded-md w-full dark:bg-gray-400"
            />
          </div>
          <div className="flex flex-col items-start gap-1 w-full">
            <label className="text-xs text-[#4F4F4F]">Last Name</label>
            <input
              type="text"
              className="p-2 rounded-md w-full dark:bg-gray-400"
            />
          </div>
          <div className="flex flex-col items-start gap-1 w-full md:col-span-2">
            <label className="text-xs text-[#4F4F4F]">Email</label>
            <input
              type="text"
              className="p-2 rounded-md w-full dark:bg-gray-400"
            />
          </div>
          <div className="flex flex-col items-start gap-1 w-full md:col-span-2">
            <label htmlFor="message" className="text-xs text-[#4F4F4F]">
              Message
            </label>
            <textarea
              id="message"
              className="p-2 rounded-md resize-none w-full dark:bg-gray-400"
              rows="4"
            ></textarea>
          </div>
          <div className="md:col-span-2 text-right mt-5">
            <button className="bg-primary text-white font-normal text-sm px-4 py-2 rounded-lg">
              Get in touch
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
