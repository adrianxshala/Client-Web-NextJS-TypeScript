import React, { FormEvent } from "react";
import Swal from "sweetalert2";

const Contacti: React.FC = () => {
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 

    const formData = new FormData(e.currentTarget); 

    formData.append("access_key", "b4e02e83-6ee2-4a46-88ff-8c5e19eb86cb");

    const object = Object.fromEntries(formData); 
    const json = JSON.stringify(object); 

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const data = await res.json(); 

      if (data.success) {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Failed to send message.",
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      Swal.fire({
        title: "Error!",
        text: "An unexpected error occurred.",
        icon: "error",
      });
    }
  };

  return (
    <div className="container mx-auto mb-9 px-4 py-16">
      <h3 className="font-inter text-[#EC9706] text-[20px] md:text-[24px] text-center">
        Get in Touch
      </h3>
      <h1 className="font-inter text-[#1D1D1D] text-[24px] md:text-[32px] text-center mb-9">
        Reach out to us and let's turn your construction dreams into reality
      </h1>
      <form onSubmit={onSubmit}>
        <div className="bg-[#F5F5F5] rounded-lg max-w-full md:w-[900px] py-9 px-6 md:px-20 mx-auto">
          <div className="flex flex-col">
            <label
              className="font-inter text-[18px] md:text-[20px] text-[#1D1D1D]"
              htmlFor="name"
            >
              Name:
            </label>
            <input
              required
              name="name"
              type="text"
              placeholder="Lardi Kuci"
              className="bg-[#F5F5F5] rounded-[10px] border border-[#B2B1B1] py-3 px-3 mb-6 md:mb-9"
            />
            <label
              className="font-inter text-[18px] md:text-[20px] text-[#1D1D1D]"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              required
              name="email"
              type="email"
              placeholder="lardiinvestshpk@gmail.com"
              className="bg-[#F5F5F5] rounded-[10px] border border-[#B2B1B1] py-3 px-3 mb-6 md:mb-9"
            />
            <label
              className="font-inter text-[18px] md:text-[20px] text-[#1D1D1D]"
              htmlFor="message"
            >
              Message:
            </label>
            <textarea
              required
              name="message"
              placeholder="Enter a message"
              className="bg-[#F5F5F5] rounded-[10px] border border-[#B2B1B1] py-3 px-3 mb-6 md:mb-9"
            />
            <button
              type="submit"
              className="bg-[#EC9706] rounded-[10px] font-inter text-[18px] text-white py-3"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contacti;
