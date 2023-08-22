"use client";

import { CustomButtonProps } from "@/types";

const CustomButton = ({
  title,
  containerStyle,
  handleClick,
  btnType,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={` flex relative justify-center items-center py-3 px-6 outline-none transition duration-300 ease-in-out
       ${containerStyle}`}
      onClick={handleClick}
    >
      <span className={`flex-1 text-[20px]`}>{title}</span>
    </button>
  );
};

export default CustomButton;
