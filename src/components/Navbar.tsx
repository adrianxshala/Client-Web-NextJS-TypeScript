import React, { useState } from "react";
import Image from "next/image";
import logo from "../assets/lardi logo complet.png";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { TfiMenu } from 'react-icons/tfi';

const Navbar: React.FC = () => {
  const [sideBar, setSideBar] = useState<boolean>(false);

  const phoneNumber: string = '+38349264779';

  const handlePhoneClick = (): void => {
    alert(`Call us at: ${phoneNumber}`);
  };

  return (
    <div className="flex w-full z-50 bg-white shadow-md ">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/" passHref>
            <Image src={logo} width={100} height={100} alt="logo" />
          </Link>
          <nav className="hidden md:flex gap-5 mt-5 mr-28 mb-6">
            <Link href="/" className="font-inter mt-1">
              Home
            </Link>
            <Link href="/service" className="font-inter mt-1">
              Services
            </Link>
            <Link href="/about" className="font-inter mt-1">
              About
            </Link>
            <Link href="/contact" className="font-inter mt-1">
              Contact
            </Link>
            <button
              onClick={handlePhoneClick}
              className="font-inter bg-[#EC9706] text-white px-2 py-1 rounded-lg"
            >
              Call now
            </button>
          </nav>
          <button
            onClick={() => setSideBar(!sideBar)}
            className="block md:hidden bg-[#EC9706] text-white p-1 mr-4 rounded"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <TfiMenu className="w-full h-full" />
            </div>
          </button>
        </div>
      </div>
      <Sidebar isOpen={sideBar} closeSidebar={() => setSideBar(false)} />
    </div>
  );
};

export default Navbar;
