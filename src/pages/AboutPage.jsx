import React from "react";
import { motion } from "motion/react";
import { DynamicSlider } from "../components/DynamicSlider";
import Team1 from "../assets/members/ceo.png";
import Team2 from "../assets/members/coo.png";
import Team3 from "../assets/members/lead.png";
import Team4 from "../assets/members/coo.png";
import About1 from "../assets/aboutSide.png";
import About2 from "../assets/aboutLeft.png";
import About3 from "../assets/about/about1.png";
import About4 from "../assets/about/about2.png";
import About5 from "../assets/about/about3.png";
import About6 from "../assets/about/about4.png";
import WebIcon from "../assets/icons/web-application.png";
import SeoIcon from "../assets/icons/seo.png";
import UiIcon from "../assets/icons/web-design.png";
import MobIcon from "../assets/icons/mobile-app.png";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "John Kabras",
      description: "CEO",
      image: Team1,
    },
    {
      name: "Philips Shene Moris",
      description: "COO",
      image: Team2,
    },
    {
      name: "Equarn Shamir Mohomad",
      description: "Tech Lead",
      image: Team3,
    },
    {
      name: "Janka Indrajith",
      description: "Head of UX",
      image: Team4,
    },
  ];
  return (
    <div className="container">
      {/* Top Section  */}
      <div className="relative">
        <div className="relative flex flex-col-reverse mt-10 px-3 md:flex-row lg:px-20 lg:items-center lg:justify-center lg:gap-20 lg:py-14">
          <img
            src={About1}
            alt="P"
            className="hidden md:block absolute bottom-20 right-0 h-60 w-auto"
          />
          <img
            src={About2}
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
              src={About3}
              alt="About"
              className="h-40 md:max-h-32 lg:max-h-56 w-auto"
            />
            <img
              src={About4}
              alt="About"
              className="h-64 md:max-h-44 lg:max-h-96 w-auto "
              loading="lazy"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, stiffness: 50, type: "spring" }}
            className="flex flex-col gap-6 md:w-1/2 md:ml-10 lg:w-1/3"
          >
            <h6 className="text-primary">About Us</h6>
            <h1 className="text-2xl font-semibold lg:max-w-sm tracking-wider leading-relaxed dark:text-primary-light">
              Driven by Innovation, Powered by Vision.{" "}
            </h1>
            <p className="text-sm text-[#868686] lg:max-w-sm leading-normal dark:text-primary-gray mb-4">
              At XpertSolution , we believe that technology is more than just
              code — it's the bridge between ideas and success. Founded by two
              passionate innovators, Farhan and Aihatesham, our mission is to
              empower businesses by building powerful digital solutions tailored
              to their goals.
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
            src={About5}
            alt="About"
            className="w-full md:w-1/4 object-cover"
          />
          <img
            src={About6}
            alt="About"
            className="w-full md:w-1/4 object-cover"
          />
        </motion.div>
      </div>

      {/* Middle Section */}
      <div className="px-3 py-5 md:px-10 md:py-20 flex flex-col items-center gap-7">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          className="text-primary text-xl font-semibold mb-3 leading-snug tracking-wider lg:max-w-md lg:text-4xl"
        >
          What We Stand For{" "}
        </motion.h1>
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          className="text-sm text-[#585858] lg:max-w-5xl lg:text-lg lg:tracking-wider dark:text-primary-gray"
        >
          • Innovation First: We are always exploring, experimenting, and
          pushing boundaries to deliver next-gen solutions. <br />•
          Client-Centric Approach:Every project starts with your vision. We
          listen, understand, and craft solutions that truly fit your needs.{" "}
          <br />
          • Excellence in Execution:From design to development, we deliver with
          precision, passion, and performance. <br />• Collaboration Over
          Competition:We believe in partnerships, not just projects — working
          together to build success stories.{" "}
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
            <p className="h-1 w-12 bg-black dark:bg-primary-light my-3"></p>
            <h1 className="text-lg font-semibold py-5 dark:text-primary-light">
              Our Mission & Vision
            </h1>
            <p className="text-gray-600 text-sm mb-5 dark:text-primary-gray">
              At XpertSolution Innovations, we are driven to transform bold
              ideas into powerful digital solutions. Our vision is to empower
              businesses to innovate, scale, and lead in a rapidly evolving
              digital world.
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
          className="md:w-1/2 grid grid-cols-2 gap-5 bg-white dark:bg-transparent drop-shadow-xl  p-5 rounded-lg"
        >
          {/* <!-- Card 1 --> */}
          <article className=" flex items-center gap-3">
            <img
              src={WebIcon}
              alt="web"
              className="bg-lightRed h-14 w-14 p-2 rounded-md"
            />
            <p className="text-[#2E0D64] font-medium dark:text-white">
              Web Application
            </p>
          </article>

          {/* <!-- Card 2 --> */}
          <article className=" flex items-center gap-3">
            <img
              src={SeoIcon}
              alt="seo"
              className="bg-lightRed h-14 w-14 p-2 rounded-md"
            />
            <p className="text-[#2E0D64] font-medium dark:text-white">SEO</p>
          </article>

          {/* <!-- Card 3 --> */}
          <article className=" flex items-center gap-3">
            <img
              src={MobIcon}
              alt="mobile"
              className="bg-lightRed h-14 w-14 p-2 rounded-md"
            />
            <p className="text-[#2E0D64] font-medium dark:text-white">
              Mobile Applications
            </p>
          </article>

          {/* <!-- Card 4 --> */}
          <article className=" flex items-center gap-3">
            <img
              src={UiIcon}
              alt="arvr"
              className="bg-lightRed h-14 w-14 p-2 rounded-md"
            />
            <p className="text-[#2E0D64] font-medium dark:text-white">UI/UX</p>
          </article>
        </motion.div>
      </div>

      <DynamicSlider keyMapping={teamMembers} />
    </div>
  );
};

export default AboutPage;
