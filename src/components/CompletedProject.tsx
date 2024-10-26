import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion"; 
import img1 from "../assets/prejkt1.jpg";
import img2 from "../assets/projekt2.jpg";
import img3 from "../assets/projekt3.jpg";
import img4 from "../assets/objektii1.jpg";
import img5 from "../assets/objekti2.jpg";
import img6 from "../assets/objekti3.jpg";
import img7 from "../assets/projekt4.jpg";
import Footer from "./Footer";
import Copyright from "./Copyright";

interface MediaItem {
  src: StaticImageData;
  alt: string;
  className: string;
}

const media: MediaItem[] = [
  { src: img1, alt: "Project 1", className: "w-[60vh]" },
  { src: img2, alt: "Project 2", className: "w-[60vh]" },
  { src: img3, alt: "Project 3", className: "w-[60vh]" },
  { src: img4, alt: "Project 4", className: "w-[60vh]" },
  { src: img5, alt: "Project 5", className: "w-[60vh]" },
  { src: img6, alt: "Project 6", className: "w-[60vh]" },
  { src: img7, alt: "Project 7", className: "w-[60vh]" },
];

const CompletedProjects: React.FC = () => {
  return (
    <>
      <div className="container mx-auto">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {media.map((item, index) => (
            <motion.li
              key={index}
              className="relative h-[60vh] w-[60vh] mb-5"
              initial={{ opacity: 0, y: 100 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false }} 
            >
              <Image
                src={item.src}
                layout="fill"
                objectFit="cover"
                alt={item.alt}
                loading="lazy"
              />
            </motion.li>
          ))}
        </ul>
      </div>
      <Footer />
      <Copyright />
    </>
  );
};

export default CompletedProjects;
