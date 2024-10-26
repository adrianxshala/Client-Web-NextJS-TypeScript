import React, { useRef } from "react";
import Image from "next/image";
import whatsapp from "../assets/whatp app logo.png";
import linkedin from "../assets/linkedin logo.png";
import { motion, useInView } from "framer-motion";

const Copyright: React.FC = () => {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="bg-gray-800 text-white font-inter flex flex-col md:flex-row gap-2 py-3 items-center justify-center">
      <motion.p
        ref={ref}
        initial={{ opacity: 0, y: +10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        © 2024. Designed & Developed by Adrian |
      </motion.p>
      <div className="flex gap-3 items-center">
        <motion.a
          initial={{ opacity: 0, y: +10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          href="https://wa.me/38349153002"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <Image src={whatsapp} alt="WhatsApp" width={20} height={20} />
          <span>Call us</span>
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: +10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          href="https://www.linkedin.com/in/adrian-shala-a80ba5198/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <Image src={linkedin} alt="LinkedIn" width={20} height={20} />
        </motion.a>
      </div>
    </div>
  );
};

export default Copyright;
