import React from "react";
import Link from "next/link";
import { RiCloseLargeFill } from "react-icons/ri";

interface SideBarProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ isOpen, closeSidebar }) => {
  const phoneNumber: string = "+38349264779";

  const handlePhoneClick = (): void => {
    alert(`Call us at: ${phoneNumber}`);
    closeSidebar();
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-transform duration-600 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="relative w-[300px] h-full p-5 bg-white bg-opacity-10 backdrop-blur-md border border-black shadow-lg rounded-tr-xl rounded-br-xl">
        <button
          onClick={closeSidebar}
          className="mb-5 transition-all duration-200 
                    bg-[#EC9706] p-2 rounded-md text-white 
                     hover:scale-105 hover:p-2 hover:rounded-md"
        >
          <RiCloseLargeFill />
        </button>

        <Link href="/" passHref>
          <button
            onClick={closeSidebar}
            className="block mb-4 font-inter text-[20px] transition-all duration-200 
            hover:bg-[#EC9706] pl-2 hover:rounded-md"
          >
            Home
          </button>
        </Link>

        <Link href="/service" passHref>
          <button
            onClick={closeSidebar}
            className="block mb-4 font-inter text-[20px] transition-all duration-200 
            hover:bg-[#EC9706] pl-2 hover:rounded-md"
          >
            Services
          </button>
        </Link>

        <Link href="/about" passHref>
          <button
            onClick={closeSidebar}
            className="inline-block pr-5 mb-4 font-inter text-[20px] transition-all duration-200 
            hover:bg-[#EC9706] pl-2 hover:rounded-md"
          >
            About
          </button>
        </Link>

        <Link href="/contact" passHref>
          <button
            onClick={closeSidebar}
            className="block mb-4 font-inter text-[20px] transition-all duration-200 
            hover:bg-[#EC9706] pl-2 hover:rounded-md"
          >
            Contact
          </button>
        </Link>

        <button
          onClick={handlePhoneClick}
          className="block font-inter bg-[#EC9706] text-white px-2 py-1 rounded-lg cursor-pointer"
        >
          Call now
        </button>
      </div>
    </div>
  );
};

export default SideBar;
