import React from "react";
import { motion } from "motion/react";
import AnimatedSections from "../components/AnimatedSection";

const services = [
  {
    id: 1,
    title: "Web Application",
    description: "Lorem Ipsum is simply",
    icon: "/icons/web-application.png",
    bgColor: "bg-purple-100",
  },
  {
    id: 2,
    title: "SEO",
    description: "Lorem Ipsum is simply",
    icon: "/icons/seo.png",
    bgColor: "bg-green-100",
  },
  {
    id: 3,
    title: "AR/VR Solutions",
    description: "Lorem Ipsum is simply",
    icon: "/icons/ar-vr.png",
    bgColor: "bg-blue-100",
  },
  {
    id: 4,
    title: "Mobile Applications",
    description: "Lorem Ipsum is simply",
    icon: "/icons/mobile-app.png",
    bgColor: "bg-orange-100",
  },
];

const logos = [
  {
    id: 0,
    logo: "/logos/bene.png",
  },
  {
    id: 1,
    logo: "/logos/cas.png",
  },
  {
    id: 2,
    logo: "/logos/hype.png",
  },
  {
    id: 0,
    logo: "/logos/leo.png",
  },
];

const ServiceCard = ({ title, description, icon, bgColor }) => {
  return (
    <motion.div
      className={`flex items-center gap-3 p-5 `}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className={`p-3 bg-white rounded-2xl ${bgColor}`}>
        <img src={icon} alt={title} className="h-10 w-10 " />
      </div>
      <div>
        <h3 className="text-md font-medium dark:text-primary-light">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-primary-gray">{description}</p>
      </div>
    </motion.div>
  );
};
const HomePage = () => {
  return (
    <div>
      {/* bg-[#1090cb46] */}
      <div className="container min-h-screen max-w-full dark:bg-[#1E1E1E]">
        <img
          src="/sideImage.png"
          className="absolute right-0 bottom-10 h-[40vh] w-[40px] md:h-[50vh] md:w-[50px] lg:h-[60vh] lg:w-[60px]"
        />
        {/* hero section  */}
        <div className="lg:w-full lg:flex lg:items-center lg:justify-between lg:px-5">
          {/* lef side  */}
          <motion.div
            className="flex flex-col gap-4 px-4 pt-8 lg:w-1/2 lg:gap-9"
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50, duration: 0.8 }}
          >
            <h1 className="text-2xl tracking-wide font-semibold md:text-4xl dark:text-white">
              Experienced <span className="text-[#34befe]">mobile and web</span>{" "}
              applications and website builders measuring.
            </h1>
            <p className="text-sm md:text-lg dark:text-white">
              KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
              applications and website builders measuring dozens of completed
              projects. We build and develop mobile applications for several top
              platforms, including Android & IOS.{" "}
            </p>
            <div className="flex gap-3 items-center">
              <button className="bg-[#1090CB] px-4 py-2 rounded-md capitalize text-white border border-transparent hover:bg-white hover:border-[#1090CB] hover:text-[#1090CB] transition duration-300 ease-in-out">
                Contact Us
              </button>

              <button className="border border-[#1090CB] px-4 py-2 rounded-md capitalize text-[#1090CB] bg-white hover:bg-[#1090CB] hover:text-white hover:border-transparent transition duration-300 ease-in-out">
                View More
              </button>
            </div>
          </motion.div>

          {/* right side */}
          <motion.div
            className="relative flex justify-center items-center py-3 lg:w-1/2"
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50, duration: 1 }}
          >
            <div className="absolute inset-0 flex justify-center items-center ">
              {/* Blur Circle */}
              <div className="w-64 h-64 bg-[#e7e19f] dark:bg-white z-10 blur-3xl rounded-full"></div>
            </div>
            <div className="max-w-auto md:max-w-lg z-20">
              <img src="/heroImage.png" alt="Hero Image" />
            </div>
          </motion.div>
          <img
            src="/bottomImage.png"
            className="absolute left-0 bottom-0 h-[40vh] w-[40px] md:h-[50vh] md:w-[50px] lg:h-[70vh] lg:w-[60px] lg:-bottom-56"
          />
        </div>
        {/* hero section end */}
      </div>

      {/* service card section  */}
      <motion.div
        className="flex justify-center items-center bg-white dark:bg-primary-dark py-5 border-b-2 dark:border-t dark:border-gray-600 dark:border-b"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              bgColor={service.bgColor}
            />
          ))}
        </div>
      </motion.div>
      {/* service card section end  */}

      <div>
        <div className="text-center py-24">
          <h1 className="text-3xl font-semibold dark:text-primary-light">
            Lorem Ipsum is simply dummy text of the printing.{" "}
          </h1>
          <p className="py-5 font-light dark:text-primary-gray">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
            <br /> Lorem Ipsum has been the industry's
          </p>
        </div>
        <AnimatedSections  />
      </div>

      <div className="flex flex-col px-10 items-center gap-9 lg:flex-row lg:gap-14 lg:px-36 mb-4">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="group px-4 py-5  lg:w-1/2 bg-[#F4F4F4] dark:bg-gray-500 dark:text-primary-light lg:px-20 lg:py-10  rounded-md flex flex-col items-center gap-5 hover:bg-[#1090CB] hover:text-white dark:hover:bg-[#1090CB] dark:hover:text-slate-200"
        >
          <h1 className="text-xl font-semibold text-center ">
            Lorem Ipsum is simply <br /> dummy text.
          </h1>
          <p className="text-sm text-center">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
            applications and website builders measuring dozens of completed
            projects. We build and develop mobile applications for several top
            platforms, including Android & IOS.{" "}
          </p>
          <button className="bg-[#1090CB] text-white p-3 rounded-md text-sm group-hover:bg-white group-hover:text-[#1090CB] dark:group-">
            View More
          </button>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
       
          className="group px-4 py-5  lg:w-1/2 bg-[#F4F4F4] dark:bg-gray-500 dark:text-primary-light lg:px-20 lg:py-10  rounded-md flex flex-col items-center gap-5 hover:bg-[#1090CB] hover:text-white dark:hover:bg-[#1090CB] dark:hover:text-slate-200"        >
          <h1 className="text-xl font-semibold text-center">
            Lorem Ipsum is simply <br /> dummy text.
          </h1>
          <p className="text-sm text-center">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
            applications and website builders measuring dozens of completed
            projects. We build and develop mobile applications for several top
            platforms, including Android & IOS.{" "}
          </p>
          <button className="bg-[#1090CB] text-white p-3 rounded-md text-sm group-hover:bg-white group-hover:text-[#1090CB]">
            View More
          </button>
        </motion.div>
      </div>

      <div className="py-20 px-10 overflow-hidden">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="text-center text-xl font-semibold dark:text-primary-light"
        >
          You will be in good Company
        </motion.p>
        <motion.div className="flex gap-5 animate-marquee">
          {logos.concat(logos).map((image, index) => (
            <img
              key={index}
              src={image.logo}
              alt="Logo"
              className="h-40 w-auto mr-36"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
