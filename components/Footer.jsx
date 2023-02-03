import React from "react";
import { TbMail } from "react-icons/tb";
import { BsTelephone } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <div className="hidden lg:block">
        <div className="w-[1239px] h-[359px] bg-[#F9FFF7] rounded-[20px] mx-auto flex justify-between p-16">
          <div>
            <img src={"/logo.png"} alt="Elemes ID" />
            <p className="w-[335px] h-[60px] mt-10">Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950</p>
            <div className="mt-10 flex">
              <button className="flex items-center justify-center w-[40px] h-[40px] rounded-[24px] p-[10px] text-center bg-white hover:bg-[#8BAC3E] text-[#8BAC3E] hover:text-white mr-6">
                <TbMail size={25} />
              </button>
              <button className="flex items-center justify-center w-[40px] h-[40px] rounded-[24px] p-[10px] text-center bg-white hover:bg-[#8BAC3E] text-[#8BAC3E] hover:text-white mr-6">
                <BsTelephone size={25} />
              </button>
              <button className="flex items-center justify-center w-[40px] h-[40px] rounded-[24px] p-[10px] text-center bg-white hover:bg-[#8BAC3E] text-[#8BAC3E] hover:text-white mr-6">
                <FiInstagram size={25} />
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-[#333] text-[18px] leading-[24px] font-[500] mb-6">Categories</h2>
            <p className="my-4 text-[14px] leading-[16px] font-[400] text-[#757575]">Cupcake</p>
            <p className="my-4 text-[14px] leading-[16px] font-[400] text-[#757575]">Pizza</p>
            <p className="my-4 text-[14px] leading-[16px] font-[400] text-[#757575]">Kebab</p>
            <p className="my-4 text-[14px] leading-[16px] font-[400] text-[#757575]">Salmon</p>
            <p className="my-4 text-[14px] leading-[16px] font-[400] text-[#757575]">Dougnut</p>
          </div>

          <div>
            <h2 className="text-[#333] text-[18px] leading-[24px] font-[500] mb-6">About Us</h2>
            <p className="my-4 text-[14px] leading-[16px] font-[400] text-[#757575]">About Us</p>
            <p className="my-4 text-[14px] leading-[16px] font-[400] text-[#757575]">FAQ</p>
            <p className="my-4 text-[14px] leading-[16px] font-[400] text-[#757575]">Report Problem</p>
          </div>

          <div>
            <h2 className="text-[#333] text-[18px] leading-[24px] font-[500] mb-6">Newsletter</h2>
            <p className="my-4 text-[14px] leading-[24px] font-[400] text-[#757575] w-[245px] h-[48px]">Get now free 50% discount for alll products on your first order</p>
            <input
              type="email"
              placeholder="Your email adress"
              className="w-[250px] h-[40px] rounded-tl-[8px] rounded-bl-[8px] bg-transparent placeholder:text-black focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
            />
            <button className="w-[60px] h-[40px] bg-[#8BAC3E] text-white rounded-tr-[8px] rounded-br-[8px]">SEND</button>
            <p className="text-[14px] leading-[24px] font-[400] flex items-center my-4">
              <TbMail className="inline-block mr-1 text-[#8BAC3E]" size={20} /> elemesid@gmail.com
            </p>
            <p className="text-[14px] leading-[24px] font-[400] flex items-center my-4">
              <BsTelephone className="inline-block mr-1 text-[#8BAC3E]" size={20} /> 0888 1111 2222
            </p>
          </div>
        </div>
        <div className="container mx-auto">
          <h3 className="mt-10 mb-5 text-[12px] leading-[16px] font-[400] tracking-wider text-center">© 2021 Elemes id. All rights reserved</h3>
        </div>
      </div>
    </>
  );
};

export default Footer;
