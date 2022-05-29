import React from "react";
import NavbarSection from "../Navigation/Navbar";
import Image from "next/image";

type Props = {
  title?: string;
};

function HeroSection({ title = "Simple Ideas for Fun" }: Props) {
  return (
    <>
      <div className="relative w-full h-full pb-10">
        <NavbarSection />
        <div className="hidden md:block">
          <img
            className="absolute bg-cover bg-center w-full h-full inset-0"
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Hero%2008.png"
            alt="decoration"
          />
        </div>
        <div className="relative px-4 xl:px-0 container mx-auto grid grid-cols-7 items-center gap-16">
          <div className="text-color w-full col-span-3 pt-16 lg:pt-32 xl:pt-12">
            <h1 className="text-4xl md:text-4xl lg:text-6xl w-11/12 lg:w-11/12 xl:w-full xl:text-6xl text-gray-900 font-extrabold f-f-l">
              {title}
            </h1>
            <div className="f-f-r text-base lg:text-base pb-20 sm:pb-0 pt-10 xl:pt-6">
              <h2>By Areli Wray</h2>
            </div>
            <div className="lg:flex">
              <a
                href="/"
                className="hidden md:flex items-center justify-center hover:opacity-90 text-base w-full xl:text-base xl:w-6/12 mt-4 xl:mt-8 f-f-r py-4  bg-indigo-700 text-white font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg"
              >
                Order Now
              </a>
              <a
                href="#about-the-book"
                className="hidden md:flex items-center justify-center hover:opacity-90 text-base w-full xl:text-base xl:w-4/12 lg:ml-2 xl:ml-2 mt-4 xl:mt-8 f-f-r py-4  bg-indigo-200 text-indigo-600 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg"
              >
                About the Book
              </a>
            </div>
          </div>
          <img
            className="w-full col-span-4 mt-8 md:mt-0 object-fill md:-ml-4 lg:-ml-4 xl:ml-0"
            src="/book-picture-simple-ideas-for-fun.jpg"
            alt="sample page"
          />
          <button className="md:hidden hover:opacity-90 text-base w-full xl:text-base xl:w-6/12 mt-4 xl:mt-8 f-f-r py-4  bg-indigo-700 text-white font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg">
            Start building now
          </button>
          <button className="md:hidden hover:opacity-90 text-base w-full xl:text-base xl:w-4/12 xl:ml-2 mt-4 xl:mt-8 f-f-r py-4  bg-indigo-200 text-indigo-600 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg">
            Try it out
          </button>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
