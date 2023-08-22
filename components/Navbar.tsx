"use client";

import Link from "next/link";
import Image from "next/image";
import CustomButton from "./shared/CustomButton";
import { useEffect, useState } from "react";

const navLinks = [
  {
    id: "home",
    title: "Trang chủ",
  },
  {
    id: "Courses",
    title: "Khóa học",
  },
];

const Navbar = () => {
  return (
    <header className="bg-white w-full fixed top-0 z-10">
      <div className="flex justify-between items-center max-w-[1440px] mx-auto sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image src="/logo.png" alt="logo" width={100} height={20} />
        </Link>

        <div className="hidden md:flex md:justify-between">
          <div className="flex items-center space-x-8 xl:space-x-12 font-semibold text-[20px] xl:text-[25px]">
            {navLinks.map((nav) => (
              <Link
                key={nav.id}
                href={` #${nav.id}`}
                className="hover:border-b-2 hover:text-dark-yellow text-dark-blue hover:border-b-dark-yellow transition duration-150 ease-in"
              >
                {nav.title}
              </Link>
            ))}
          </div>
        </div>

        <CustomButton
          title="Đăng nhập"
          containerStyle="text-white font-medium bg-dark-yellow hover:bg-dark-blue"
          btnType="button"
        />
      </div>
    </header>
  );
};

export default Navbar;
