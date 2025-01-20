import React from "react";
import StatsSection from "../components/StatsSection";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "motion/react";

const services = [
  {
    id: 1,
    title: "Mobile Applications",
    description: "The simplest but robust technology to accompany with you",
    icon: "/icons/mobLog.png",
    bgColor: "bg-[#F1E8FF]",
  },
  {
    id: 2,
    title: "Web Applications",
    description:
      "Platform independant business solutions for maximum availability",
    icon: "/icons/webLog.png",
    bgColor: "bg-[#FFF2F2]",
  },
  {
    id: 3,
    title: "SEO",
    description: "Let the world find you on top of others Lorem, ipsum dolor.",
    icon: "/icons/seoLog.png",
    bgColor: "bg-[#E2F3FF]",
  },
  {
    id: 4,
    title: "AR/VR Solutions",
    description: "Advanced autonomous technologies to make life simple",
    icon: "/icons/arLog.png",
    bgColor: "bg-[#FFE7FB]",
  },
];

const projects = [
  {
    image: "/project/p1.png",
    title: "Lorem Ipsum is simply dummy text of the printing.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    image: "/project/p2.png",
    title: "Lorem Ipsum is simply dummy text of the printing.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    image: "/project/p3.png",
    title: "Lorem Ipsum is simply dummy text of the printing.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    image: "/project/p1.png",
    title: "Lorem Ipsum is simply dummy text of the printing.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    image: "/project/p2.png",
    title: "Lorem Ipsum is simply dummy text of the printing.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];
const ServicePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // For tablets and smaller devices
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // For mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="bg-[#1090cb3b] flex flex-col items-center justify-start gap-4 ">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center gap-4"
        >
          <img
            src="/icons/speaker.png"
            alt="Services"
            className="bg-white p-2 rounded-full mt-20"
          />
          <h1 className="text-3xl font-semibold">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="max-w-sm text-center text-[#696969] px-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          className="bg-white grid grid-cols-1 md:grid-cols-2 rounded-lg mt-10 mb-10"
        >
          {services.map((service) => (
            <div
              key={service.id}
              className={`p-10 flex items-center justify-center gap-4 `}
            >
              <img
                src={service.icon}
                alt={service.title}
                className={`h-16 p-2 rounded-md ${service.bgColor} mr-4`}
              />
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-medium">{service.title}</h3>
                <p className="text-sm text-[#797979] max-w-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="px-3 py-3 flex flex-col items-center gap-3 md:flex-row md:items-center md:justify-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="px-2 md:w-1/2 md:ml-8 lg:ml-32"
        >
          <h1 className="text-xl font-semibold tracking-wider my-3 lg:text-3xl">
            <span className="text-primary">Lorem Ipsum</span> is simply dummy
            <br />
            text of the printing.{" "}
          </h1>
          <p className="text-sm text-[#545454] my-3 lg:max-w-lg lg:text-md lg:mb-5 leading-relaxed">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
            applications and website builders measuring dozens of completed
            projects. We build and develop mobile applications for several top
            platforms, including Android & IOS.
            <br />
            <br />
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
            applications and website builders measuring dozens
          </p>
          <button
            type="button"
            className="border border-primary p-3 rounded-md text-primary text-sm hover:bg-primary hover:text-white hover:border-transparent"
          >
            Contact Us
          </button>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 "
        >
          <img
            src="/servicePage.png"
            alt="Service"
            className="max-w-sm md:max-w-lg lg:max-w-3xl"
          />
        </motion.div>
      </div>
      <StatsSection />

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        className="py-10 px-10"
      >
        <h2 className="text-3xl font-normal text-start mb-8">
          Our Latest Projects
        </h2>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg px-3 flex flex-col items-center justify-center"
            >
              <div className="flex items-center justify-center w-full h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-w-full max-h-full object-contain rounded-t-lg"
                />
              </div>
              <div className="p-4  flex flex-col items-center justify-center w-full ">
                <h3 className="text-md font-semibold mb-2 max-w-56">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 max-w-56">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
};

export default ServicePage;
