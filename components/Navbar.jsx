import React from "react";
import Link from "next/link";

const Navbar = () => {
  const links = [
    {
      text: "Home",
      id: 1,
      href: "/",
    },
    {
      text: "Promotions",
      id: 2,
      href: "promotions",
    },
    {
      text: "Others",
      id: 3,
    },
  ];

  const handleOthersButton = (id) => {
    if (id === 3) {
      const othersButton = Array.from(document.getElementById(3).firstChild.getElementsByTagName("span"));
      othersButton.forEach((line, i) => {
        if (i === 0) {
          line.classList.toggle("rotate-45");
        } else if (i === 1) {
          line.classList.toggle("scale-0");
        } else {
          line.classList.toggle("-rotate-45");
        }
      });
    }

    const othersNav = document.getElementById("othersNav");
    othersNav.classList.toggle("translate-x-full");

    if (!othersNav.classList.contains("translate-x-full")) {
      const nav = document.getElementById("nav");
      nav.classList.toggle("h-[100vh]");
      othersNav.classList.add("flex", "flex-col", "items-center", "justify-evenly");
    }
  };

  const handleCloseButton = () => {
    const othersNav = document.getElementById("othersNav");
    othersNav.classList.toggle("translate-x-full", "flex", "flex-col", "items-center", "justify-evenly");
    const nav = document.getElementById("nav");
    nav.classList.toggle("h-[100vh]");
    if (!othersNav.classList.contains("translate-x-full")) {
      const closeButton = document.getElementById("closeButton");
      closeButton.classList.add("hidden");
    }
    const othersButton = Array.from(document.getElementById(3).firstChild.getElementsByTagName("span"));
    othersButton.forEach((line, i) => {
      if (i === 0) {
        line.classList.toggle("rotate-45");
      } else if (i === 1) {
        line.classList.toggle("scale-0");
      } else {
        line.classList.toggle("-rotate-45");
      }
    });
  };

  return (
    <>
      <header className="flex justify-between items-center p-6 lg:container lg:mx-auto">
        <div>
          <img src="/logo.png" alt="logo" width={150} height={36} />
        </div>
        <nav id="nav" className="absolute bottom-0 left-0 px-6 w-full z-[3] overflow-hidden lg:static lg:flex lg:justify-center lg:w-3/4">
          <ul className="list-none flex justify-between w-full lg:justify-end lg:gap-x-8 lg:py-4 lg:z-0">
            {links.map((link) => (
              <li id={link.id} key={link.id} className="flex flex-col justify-center items-center cursor-pointer" onClick={() => handleOthersButton(link.id)}>
                <div>
                  <span className="w-[30px] h-[2px] bg-black block my-2 origin-top-left translate-x-[2.5px] translate-y-[-1px] transition duration-300 ease-in-out lg:hidden"></span>
                  <span className="w-[30px] h-[2px] bg-black block my-2 translate-x-[2.5px] transition duration-300 ease-in-out lg:hidden"></span>
                  <span className="w-[30px] h-[2px] bg-black block my-2 origin-bottom-left translate-x-[2.5px] translate-y-0 transition duration-300 ease-in-out lg:hidden"></span>
                </div>
                <span
                  className={`text-[#757575] text-base ${link.text === "Others" ? "lg:hidden" : null} ${
                    link.text === "Promotions"
                      ? "relative lg:after:z-50 lg:after:content-['HOT'] lg:after:text-sm lg:after:absolute lg:after:bg-[#E7462D] lg:after:w-[36px] lg:after:h-[19px] lg:after:-top-3 lg:after:text-center lg:after:left-[64px] lg:after:text-white lg:after:rounded-full"
                      : null
                  }`}
                >
                  {link.text}
                </span>
              </li>
            ))}
          </ul>
          <ul id="othersNav" className="absolute top-0 left-0 h-full w-full bg-sky-400 transition duration-300 ease-in-out translate-x-full lg:static lg:flex lg:flex-row lg:justify-start lg:translate-x-0 lg:bg-white lg:gap-x-8 lg:py-4">
            <li className="text-white text-xl lg:text-[#757575] lg:text-base">About</li>
            <li className="text-white text-xl lg:text-[#757575] lg:text-base">Blogs</li>
            <li className="text-white text-xl lg:text-[#757575] lg:text-base">Contact Us</li>
            <div id="closeButton" className="absolute top-12 right-12 lg:hidden" onClick={handleCloseButton}>
              <button>
                <span className="w-[30px] h-[2px] bg-black block my-2 origin-top-left translate-x-[6px] translate-y-[-1px] rotate-45"></span>
                <span className="w-[30px] h-[2px] bg-black block my-2 origin-bottom-left translate-x-[6px] translate-y-[9px] -rotate-45"></span>
              </button>
            </div>
          </ul>
        </nav>
        <div>
          <div className="hidden lg:inline-block lg:mr-8">
            <button>Masuk</button>
          </div>
          <div className="bg-[#8BAC3E] rounded-full p-[10px] inline-block">
            <button className="text-white">Daftar Sekarang</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
