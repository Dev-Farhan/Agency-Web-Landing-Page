import React from "react";
import { motion } from "motion/react";
import { TeamSection } from "../components/TeamSection";
const AboutPage = () => {
  return (
    <div className="container">
      {/* Top Section  */}
      <div className="relative">
        <div className="relative flex flex-col-reverse mt-10 px-3 md:flex-row lg:px-20 lg:items-center lg:justify-center lg:gap-20 lg:py-14">
          <img
            src="/aboutSide.png"
            alt="P"
            className="hidden md:block absolute bottom-20 right-0 h-60 w-auto"
          />
          <img
            src="/aboutLeft.png"
            alt="P"
            className="hidden md:block absolute -bottom-80 left-0 h-60 w-auto"
          />
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, stiffness: 50, type: "spring" }}
            className="flex items-end gap-5"
          >
            <img
              src="/about/about1.png"
              alt="About"
              className="h-40 md:max-h-32 lg:max-h-56 w-auto"
            />
            <img
              src="/about/about2.png"
              alt="About"
              className="h-64 md:max-h-44 lg:max-h-96 w-auto "
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, stiffness: 50, type: "spring" }}
            className="flex flex-col gap-6 md:w-1/2 md:ml-10 lg:w-1/3 "
          >
            <h6 className="text-primary">About Us</h6>
            <h1 className="text-2xl font-semibold lg:max-w-sm tracking-wider leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing.{" "}
            </h1>
            <p className="text-sm text-[#868686] lg:max-w-sm leading-normal">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }} // Start invisible and off-screen (y: 100)
          whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position when in view
          viewport={{ once: true, amount: 0.2 }} // Trigger animation only once when 20% of the component is in view
          transition={{ duration: 1, type: "spring", stiffness: 50 }} // Smooth spring animation
          className="flex flex-col md:flex-row md:justify-center gap-5 md:gap-8 py-4 px-4"
        >
          <img
            src="/about/about3.png"
            alt="About"
            className="w-full md:w-1/4 object-cover"
          />
          <img
            src="/about/about4.png"
            alt="About"
            className="w-full md:w-1/4 object-cover"
          />
        </motion.div>
      </div>

      {/* Middle Section */}
      <div className="px-3 py-5 md:px-10 md:py-20">
        <motion.h1
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="text-primary text-xl font-semibold mb-3 leading-snug tracking-wider lg:max-w-md lg:text-2xl"
        >
          Lorem Ipsum is simply dummy text of the printing.{" "}
        </motion.h1>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="text-sm text-[#585858] lg:max-w-5xl lg:text-lg lg:tracking-wider"
        >
          KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
          applications and website builders measuring dozens of completed
          projects. We build and develop mobile applications for several top
          platforms, including Android & IOS. We build and develop mobile
          applications for several top platforms, including Android & IOS.{" "}
        </motion.p>
      </div>

      <div className="flex flex-col md:flex-row gap-10 py-8">
        {/* <!-- Left Section --> */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="md:w-1/2"
        >
          <div className="px-3">
            <p className="h-1 w-12 bg-black my-3"></p>
            <h1 className="text-lg font-semibold py-5">
              Lorem Ipsum is simply dummy text of the printing.
            </h1>
            <p className="text-gray-600 text-sm mb-5">
              KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
              applications and website builders measuring dozens of completed
              projects.
            </p>
            <button
              type="button"
              className="border border-primary p-3 rounded-md text-primary text-sm hover:bg-primary hover:text-white hover:border-transparent"
            >
              Contact Us
            </button>
          </div>
        </motion.div>

        {/* <!-- Right Section --> */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 grid grid-cols-2 gap-5 bg-white drop-shadow-xl  p-5 rounded-lg"
        >
          {/* <!-- Card 1 --> */}
          <article className=" flex items-center gap-3">
            <img
              src="/icons/webLog.png"
              alt="web"
              className="bg-lightRed h-14 w-14 p-2 rounded-md"
            />
            <p className="text-[#2E0D64] font-medium">Web Application</p>
          </article>

          {/* <!-- Card 2 --> */}
          <article className=" flex items-center gap-3">
            <img
              src="/icons/seoLog.png"
              alt="seo"
              className="bg-lightRed h-14 w-14 p-2 rounded-md"
            />
            <p className="text-[#2E0D64] font-medium">SEO</p>
          </article>

          {/* <!-- Card 3 --> */}
          <article className=" flex items-center gap-3">
            <img
              src="/icons/mobLog.png"
              alt="mobile"
              className="bg-lightRed h-14 w-14 p-2 rounded-md"
            />
            <p className="text-[#2E0D64] font-medium">Mobile Applications</p>
          </article>

          {/* <!-- Card 4 --> */}
          <article className=" flex items-center gap-3">
            <img
              src="/icons/arLog.png"
              alt="arvr"
              className="bg-lightRed h-14 w-14 p-2 rounded-md"
            />
            <p className="text-[#2E0D64] font-medium">AR/VR</p>
          </article>
        </motion.div>
      </div>

      <TeamSection />
    </div>
  );
};

export default AboutPage;
