import React, { useRef } from "react";
import Image from "next/image";
import logo from "../assets/lardi_logo_complet-removebg-preview.png";
import fb from "../assets/fb footer.png";
import ig from "../assets/ig footer.png";
import { motion, useInView } from "framer-motion";

const Footer: React.FC = () => {
  const logoRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const addressRef = useRef<HTMLDivElement | null>(null);
  const igRef = useRef<HTMLAnchorElement | null>(null);
  const fbRef = useRef<HTMLAnchorElement | null>(null);

  const isLogoInView = useInView(logoRef, { once: true });
  const isServicesInView = useInView(servicesRef, { once: true });
  const isAddressInView = useInView(addressRef, { once: true });
  const isIgInView = useInView(igRef, { once: true });
  const isFbInView = useInView(fbRef, { once: true });

  return (
    <div className="bg-[#FDF6E9] pt-5">
      <div className="container mx-auto flex md:flex justify-between items-center md:items-start gap-1 md:gap-0 pb-9 px-4">
        <div className="flex justify-center md:justify-start">
          <motion.div
            ref={logoRef}
            initial={{ opacity: 0, y: +50 }}
            animate={isLogoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="pt-0 md:pt-5"
          >
            <Image
              src={logo}
              alt="Logo"
              width={150}
              height={100}
              layout="intrinsic"
            />
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-40 pt-0 md:pt-8">
          <motion.div
            ref={servicesRef}
            initial={{ opacity: 0, y: +50 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="hidden md:block"
          >
            <h1 className="text-[#000] text-[18px] font-inter font-bold">
              Services
            </h1>
            <h3 className="font-inter text-[16px]">New Builds</h3>
            <h3 className="font-inter text-[16px]">Renovations</h3>
            <h3 className="font-inter text-[16px]">Conversions</h3>
            <h3 className="font-inter text-[16px]">Fit Out</h3>
          </motion.div>
          <motion.div
            ref={addressRef}
            initial={{ opacity: 0, y: +50 }}
            animate={isAddressInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h1 className="text-[#000] text-[18px] font-inter font-bold">
              Address
            </h1>
            <h3 className="font-inter text-[16px]">Prizren, Kosovo</h3>
            <h3 className="font-inter text-[16px]">23.000 Suharekë</h3>
            <h3 className="font-inter text-[16px]">+383 44 635 489</h3>
            <h3 className="font-inter text-[16px]">+383 49 264 779</h3>
          </motion.div>
        </div>

        <div className="flex gap-5 pt-6 md:pt-10">
          <motion.a
            ref={igRef}
            initial={{ opacity: 0, y: +50 }}
            animate={isIgInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="w-8 md:w-10"
            href="instagram://user?username=lardikuci"
            onClick={(e) => {
              setTimeout(() => {
                window.location.href = "https://www.instagram.com/lardikuci";
              }, 500);
            }}
            rel="noopener noreferrer"
          >
            <Image src={ig} alt="Instagram" width={40} height={40} />
          </motion.a>
          <motion.a
            ref={fbRef}
            initial={{ opacity: 0, y: +50 }}
            animate={isFbInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.8 }}
            href="fb://profile/lardiinvest"
            className="w-8 md:w-10"
            onClick={(e) => {
              setTimeout(() => {
                window.location.href = "https://www.facebook.com/lardiinvest";
              }, 500);
            }}
            rel="noopener noreferrer"
          >
            <Image src={fb} alt="Facebook" width={40} height={40} />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
