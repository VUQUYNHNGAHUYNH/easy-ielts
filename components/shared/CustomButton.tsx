"use client";

import { CustomButtonProps } from "@types";

const CustomButton = ({
  title,
  containerStyle,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={` flex relative justify-center items-center py-3 px-6 outline-none hover:bg-light-blue
       ${containerStyle}`}
      onClick={handleClick}
    >
      <span className={`flex-1 text-[20px]`}>{title}</span>
    </button>
  );
};

export default CustomButton;
