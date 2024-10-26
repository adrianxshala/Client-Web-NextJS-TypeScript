import React, { useEffect, useState } from "react";
import reverse from "../assets/reverse-Photoroom.png";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const router = useRouter();
  const [constructionServices, setConstructionServices] = useState<number>(0);
  const [fundyEngineers, setFundyEngineers] = useState<number>(0);
  const [regularSuppliers, setRegularSuppliers] = useState<number>(0);

  useEffect(() => {
    const animateCount = (
      setter: React.Dispatch<React.SetStateAction<number>>,
      target: number
    ) => {
      let start = 0;
      const duration = 3000;
      const increment = target / (duration / 10);

      const interval = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(interval);
        } else {
          setter(Math.ceil(start));
        }
      }, 10);
    };

    animateCount(setConstructionServices, 28);
    animateCount(setFundyEngineers, 9);
    animateCount(setRegularSuppliers, 15);
  }, []);

  return (
    <div className="bg-[#FDF6E9] pt-4 h-screen  flex flex-col lg:flex-row justify-between items-center">
      <div className="flex flex-col justify-center items-start xl:p-1 pl-5 md:pl-0 ml-0 md:ml-9">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="text-[#EC9706] font-inter text-[20px] md:text-[24px]"
        >
          We are Lardi Invest
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="text-[#1D1D1D] text-[36px] md:text-[48px] lg:text-[64px] font-inter"
        >
          Design and Build Contractor
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-[#1D1D1D] text-[16px] md:text-[20px] lg:text-[24px] font-inter"
        >
          With unwavering commitment and expertise, <br /> we create spaces that
          stand as a testament to our dedication and <br /> craftsmanship
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="bg-[#EC9706] text-white px-3 py-1 md:px-4 md:py-2 rounded-lg font-inter mt-4"
          onClick={() => router.push("/project")}
        >
          Completed Projects
        </motion.button>

        <div className="flex gap-5 pt-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            <h1 className="font-inter text-[#EC9706] text-[36px]">
              {constructionServices}+
            </h1>
            <h3 className="font-inter text-[#1D1D1D] text-[18px]">
              Construction <br /> Services
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <h1 className="font-inter text-[#EC9706] text-[36px]">
              {fundyEngineers}+
            </h1>
            <h3 className="font-inter text-[#1D1D1D] text-[18px]">
              Fundy <br />
              Engineers
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 1.1 }}
          >
            <h1 className="font-inter text-[#EC9706] text-[36px]">
              {regularSuppliers}+
            </h1>
            <h2 className="font-inter text-[#1D1D1D] text-[18px]">
              Regular <br /> Suppliers
            </h2>
          </motion.div>
        </div>
      </div>

      <img
        src={reverse.src}
        alt="reverse-logo"
        loading="lazy"
        className="h-screen  lg:w-1/2"
      />
    </div>
  );
};

export default Hero;
