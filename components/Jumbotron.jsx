import React from "react";
import { BsFillStarFill } from "react-icons/bs";

const Jumbotron = () => {
  return (
    <>
      <div className="h-full px-6 py-6 bg-[linear-gradient(rgba(255,255,255,0.9),rgba(255,255,255,0.9)),url('/background.png')] py">
        <div className="container mx-auto px-4 py-4 lg:relative">
          <div className="mb-14">
            <h1 className="text-[#8BAC3E] text-[48px] leading-[64px]">Good Food Us</h1>
            <h1 className="text-[#8BAC3E] text-[48px] leading-[64px]">Good Mood</h1>
          </div>

          <div className="bg-slate-100 w-64 h-64 rounded-full mb-10 lg:absolute lg:top-10 lg:left-[1000px]">
            <div className="relative mb-16">
              <img src={"/makananutamabesar.png"} alt="makanan utama" className="absolute z-[1] top-[26px] left-8" />
              <div className="absolute top-40 left-32 w-[292px] z-[2] h-[93px] px-10 bg-[linear-gradient(rgba(255,255,255,0.9),rgba(255,255,255,0.9))] flex justify-between items-center rounded-xl lg:-left-40">
                <div>
                  <img src={"/makananutamakecil.png"} alt="makanan utama" />
                </div>
                <div>
                  <h3 className="text-[14px] lediang-[22px] font-bold">Green Salad Tomato</h3>
                  <h4 className="font-normal text-slate-400 mb-2">Tomato</h4>
                  <div className="flex">
                    <BsFillStarFill className="w-[10.5px] h-[9.72px] text-[#FF8412]" />
                    <BsFillStarFill className="w-[10.5px] h-[9.72px] text-[#FF8412]" />
                    <BsFillStarFill className="w-[10.5px] h-[9.72px] text-[#FF8412]" />
                    <BsFillStarFill className="w-[10.5px] h-[9.72px] text-[#FF8412]" />
                    <BsFillStarFill className="w-[10.5px] h-[9.72px] text-slate-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-96">
            <h2>I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.</h2>
            <div className="mt-10">
              <div className="bg-[#8BAC3E] rounded-full p-[10px] inline-block cursor-pointer">
                <button className="text-white">Daftar Sekarang</button>
              </div>
              <div className="bg-[#F2F2F2] rounded-full p-[10px] inline-block ml-4 cursor-pointer">
                <button className="text-[#333]">About Us</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
