import React from "react";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

const Slider = () => {
  return (
    <>
      <div className="container mx-auto p-10 static lg:relative">
        <h2 className="text-[#333] text-[24px] leading-[30px] ml-4">Browser Our Category</h2>
        <h2 className="text-[#8BAC3E] text-[24px] leading-[30px] ml-4 mt-2 mb-6">Receipt</h2>
        <div className="flex justify-center overflow-x-auto">
          <div className="bg-[#F0FEEB] flex h-[173px] flex-col justify-center items-center mx-4 rounded-[8px] hover:scale-y-125">
            <div className="w-[230px]  flex justify-center items-center">
              <img src={"/cupcake.png"} alt="cupcake" className="w-[47px]" />
            </div>
            <h3 className="text-[#333] text-[16px] leading-[22px] my-2 font-[500]">Cupcake</h3>
            <h4 className="text-[#333] text-[14px] leading-[16px] font-[400]">22 items</h4>
          </div>
          <div className="bg-[#E6F3F5] flex h-[173px] flex-col justify-center items-center mx-4 rounded-[8px]">
            <div className="w-[230px]  flex justify-center items-center">
              <img src={"/pizza.png"} alt="cupcake" className="w-[47px]" />
            </div>
            <h3 className="text-[#333] text-[16px] leading-[22px] my-2 font-[500]">Pizza</h3>
            <h4 className="text-[#333] text-[14px] leading-[16px] font-[400]">25 items</h4>
          </div>
          <div className="bg-[#EAEEFA] flex h-[173px] flex-col justify-center items-center mx-4 rounded-[8px]">
            <div className="w-[230px]  flex justify-center items-center">
              <img src={"/kebab.png"} alt="cupcake" className="w-[47px]" />
            </div>
            <h3 className="text-[#333] text-[16px] leading-[22px] my-2 font-[500]">Kebab</h3>
            <h4 className="text-[#333] text-[14px] leading-[16px] font-[400]">12 items</h4>
          </div>
          <div className="bg-[#F9EEF3] flex h-[173px] flex-col justify-center items-center mx-4 rounded-[8px]">
            <div className="w-[230px]  flex justify-center items-center">
              <img src={"/salmon.png"} alt="cupcake" className="w-[47px]" />
            </div>
            <h3 className="text-[#333] text-[16px] leading-[22px] my-2 font-[500]">Salmon</h3>
            <h4 className="text-[#333] text-[14px] leading-[16px] font-[400]">22 items</h4>
          </div>
          <div className="bg-[#F3F7D9] flex h-[173px] flex-col justify-center items-center mx-4 rounded-[8px]">
            <div className="w-[230px]  flex justify-center items-center">
              <img src={"/donat.png"} alt="cupcake" className="w-[47px]" />
            </div>
            <h3 className="text-[#333] text-[16px] leading-[22px] my-2 font-[500]">Doughnut</h3>
            <h4 className="text-[#333] text-[14px] leading-[16px] font-[400]">11 items</h4>
          </div>
        </div>
        <button className="hidden lg:bg-[#8BAC3E] lg:rounded-[100px] lg:p-4 lg:text-white lg:absolute lg:text-[16px] lg:font-[500] lg:right-80 lg:mt-7 lg:block">
          <BsChevronLeft className="inline bg-white fill-black rounded-full p-1 mr-3" size={30} /> Prev
        </button>
        <button className="hidden lg:bg-[#8BAC3E] lg:rounded-[100px] lg:p-4 lg:text-white lg:absolute lg:text-[16px] lg:font-[500] lg:right-48  lg:mt-7 lg:block">
          <BsChevronRight className="inline bg-white fill-black rounded-full p-1 mr-3" size={30} /> Next
        </button>
      </div>
    </>
  );
};

export default Slider;
