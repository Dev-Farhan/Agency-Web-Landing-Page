import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 768, settings: { slidesToShow: 1 } },
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
  ],
};

const teamMembers = [
  {
    name: "John Kabras",
    role: "CEO",
    image: "/members/ceo.png", // Replace with actual image URL
  },
  {
    name: "Philips Shene Moris",
    role: "COO",
    image: "/members/coo.png", // Replace with actual image URL
  },
  {
    name: "Equarn Shamir Mohomad",
    role: "Tech Lead",
    image: "/members/lead.png", // Replace with actual image URL
  },
  {
    name: "Janka Indrajith",
    role: "Head of UX",
    image: "/members/coo.png", // Replace with actual image URL
  },
];

export const TeamSection = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-start px-4 mb-8 dark:text-primary-light">Our Team</h2>
        <Slider {...sliderSettings}>
          {teamMembers.map((member, index) => (
            <div key={index} className="p-4">
              <div className="flex flex-col items-start ">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-[281px] w-full mb-4"
                />
                <p className="text-gray-500 dark:text-primary-light">{member.role}</p>
                <h3 className="font-medium dark:text-primary-gray">{member.name}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
