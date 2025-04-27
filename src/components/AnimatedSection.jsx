import { motion } from "motion/react";
export const sectionsData = [
  {
    id: 0,
    icon: "😊",
    title: "About us:",
    description: "",
    heading: "Driven by Innovation, Powered by Passion.",
    text: "At FarAi Innovations, we merge creativity, strategy, and cutting-edge technology to deliver impactful IT solutions.Founded by Farhan and Aihatesham, we are committed to helping businesses grow, adapt, and lead through digital transformation.Our mission is simple — to turn bold ideas into powerful realities. .",
    image: "/mobile.png",
    reverse: false,
  },
  {
    id: 1,
    icon: "😊",
    title: "Our Team",
    description: "",
    heading: "The Minds Behind the Innovation.",
    text: "Our strength lies in our people. At FarAi Innovations, our team of developers, designers, and strategists are passionate about solving problems and building the future. We collaborate, innovate, and deliver with one goal in mind: creating exceptional digital solutions that drive success. .",
    image: "/web.png",
    reverse: true,
  },
  {
    id: 2,
    icon: "😊",
    title: "Our Services",
    description: "",
    heading: "Solutions Designed for the Future.",
    text: "We offer a wide range of technology services tailored to your business needs: Custom Software Development — Tailored applications built for performance and scalability. Website & App Development — Seamless, user-focused digital experiences. Cloud & Infrastructure Solutions — Secure, scalable, and future-ready cloud strategies UI/UX Design — Beautiful interfaces that connect brands with users. IT Consulting — Expert advice to align your tech with your business goals. .",
    image: "/vr.png",
    reverse: false,
  },
];

const SectionWithLine = ({
  id,
  icon,
  title,
  description,
  heading,
  text,
  image,
  reverse,
}) => {
  return (
    <div
      className={`relative flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center justify-between gap-6 lg:py-10 md:px-9 mb-14`}
    >
      {/* Text Content */}
      <motion.div
        className={`w-11/12 md:w-1/2 tracking-widest lg:flex lg:flex-col lg:gap-6 ${
          reverse ? "" : "lg:ml-24"
        }`}
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4">
          <div className="bg-[#00BCD4] w-32 h-14 md:w-16 lg:w-14 rounded-full flex items-center justify-center text-white">
            <span className="text-xl lg:text-2xl">{icon}</span>
          </div>
          <div>
            <h3 className="text-lg font-medium dark:text-primary-light">{title}</h3>
            <p className="text-sm text-gray-500 dark:text-primary-gray">{description}</p>
          </div>
        </div>
        <h2 className="lg:max-w-sm text-2xl font-semibold text-gray-800 dark:text-primary-gray mt-4 leading-normal">
          <span className="text-[#1090CB]">
            {heading.split(" ").slice(0, 2).join(" ")}
          </span>{" "}
          {heading.split(" ").slice(2).join(" ")}
        </h2>
        <p className="lg:max-w-sm text-sm text-gray-600 dark:text-gray-500 mt-2">{text}</p>
      </motion.div>

      {/* Image */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        className="w-1/2 flex justify-center"
      >
        <img src={image} alt={title} className="max-w-xs lg:max-w-2xl" />
      </motion.div>
    </div>
  );
};

const AnimatedSections = () => {
  return (
    <div className="relativ">
      {sectionsData.map((section) => (
        <SectionWithLine
          key={section.id}
          id={section.id}
          icon={section.icon}
          title={section.title}
          description={section.description}
          heading={section.heading}
          text={section.text}
          image={section.image}
          reverse={section.reverse}
        />
      ))}
    </div>
  );
};

export default AnimatedSections;
