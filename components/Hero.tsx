"use client";

import Image from "next/image";
import CustomButton from "./shared/CustomButton";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="flex flex-col xl:flex-row gap-5 pt-36 xl:pt-24 max-w-[1440px] mx-auto justify-center items-center ">
      <div className="flex-1 xl:w-1/2 sm:px-16 px-6 z-1">
        <h1 className="text-dark-blue 2xl:text-[62px] sm:text-[54px] text-[45px] font-extrabold">
          CHINH PHỤC IELTS!
        </h1>
        <p className="text-[24px] text-black-100 font-light mt-5">
          Cùng{" "}
          <span className="text-dark-blue font-semibold text-[24px]">
            EASY IELTS
          </span>{" "}
          chứng kiến sự thay đổi rõ rệt điểm số của bạn!
        </p>

        <CustomButton
          btnType="button"
          title="Khoá học"
          containerStyle="bg-dark-blue text-white rounded-full mt-10 hover:bg-light-blue"
          handleClick={handleScroll}
        />
      </div>
      <div className="flex-1 xl:w-1/2 justify-center items-center xl:flex xl:justify-end xl:items-end">
        <div className="w-full h-full">
          <Image
            src="/hero.png"
            className="object-cover z-0"
            alt="hero"
            width={800}
            height={800}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
