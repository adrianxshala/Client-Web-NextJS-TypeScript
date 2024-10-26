import Image, { StaticImageData } from "next/image";
import pic1 from "../assets/Rectangle 39.png";
import pic2 from "../assets/Rectangle 40.png";
import pic3 from "../assets/Rectangle 41.png";
import { motion } from "framer-motion";

interface ServiceCardProps {
  image: StaticImageData;
  title: string;
  features: string[];
}

const Card: React.FC = () => {
  return (
    <div className="container mx-auto pt-2 md:pt-10 pb-10 md:pb-24">
      <h1 className="text-[#EC9706] font-inter text-center text-[24px] pt-9">Services</h1>
      <h1 className="font-inter text-center text-[32px] pb-5">
        Building Dreams, Crafting Realities
      </h1>
      <div className="flex flex-col md:flex-row justify-around">
        <ServiceCard 
          image={pic1} 
          title="Consultation Services" 
          features={["Design & Build", "Cost Analysis", "Permits & Processes"]} 
        />
        <ServiceCard 
          image={pic2} 
          title="Planning Services" 
          features={["Project Planning", "Risk Management", "Quality Control"]} 
        />
        <ServiceCard 
          image={pic3} 
          title="Support Services" 
          features={["Ongoing Support", "Client Training", "Feedback Integration"]} 
        />
      </div>
    </div>
  );
};

const ServiceCard: React.FC<ServiceCardProps> = ({ image, title, features }) => {
  return (
    <motion.div
      className="mb-6 ml-1 md:ml-4 w-full p-9 md:mb-0 md:p-0"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <Image src={image} alt={title} className="w-full" layout="responsive" />
      <div className="rounded-b-[10px] bg-[#F5F5F5] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-4 w-full">
        <h1 className="text-[#1D1D1D] text-[24px] pb-3">{title}</h1>
        <ul className="list-none pl-0">
          {features.map((feature, index) => (
            <li key={index} className="relative pl-5 mb-2">
              <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-[#EC9706] rounded-full"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Card;
