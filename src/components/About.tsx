
import Image from "next/image";
import image from "../assets/about.png";
import { motion, useInView } from "framer-motion"; 
import { useRef } from "react";

const Abouti = () => {
  const ref = useRef(null); 
  const isInView = useInView(ref, { once: true }); 
  return (
    <div className="bg-[#FDF6E9] py-24">
      <div className="flex flex-col md:flex-row container mx-auto px-4 md:px-8">
        
        <motion.div
          ref={ref} 
          className="w-full md:w-[50%] p-4 md:p-14"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }} 
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <Image
            src={image}
            alt="about-img"
            layout="responsive"
            className="object-cover"
          />
        </motion.div>

        <motion.div
          ref={ref} 
          className="pt-8 md:pt-40 w-full md:w-[50%]"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }} 
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h3 className="font-inter text-[#EC9706] text-[20px] md:text-[24px]">
            About us
          </h3>
          <h1 className="font-inter text-[#393939] text-[24px] md:text-[32px] pb-4 md:pb-8">
            Efficiency, Building, Budget & Time
          </h1>
          <p className="font-inter text-[#1D1D1D] text-[14px] md:text-[18px] font-normal leading-relaxed">
            Lardi Invest is a team of skilled construction professionals with a
            passion for building and a commitment to excellence. We provide a
            range of services, from small-scale renovations to large-scale
            commercial construction. We believe in transparency and
            communication, and we work closely with our clients to ensure their
            needs are met. Thank you for considering us for your construction
            needs.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Abouti;
