import { CourseProps } from "@/types";
import Image from "next/image";

const CourseCard = ({ title, description, imageSrc }: CourseProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="relative h-40 mb-4">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-contain w-full h-full"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <button className="bg-dark-yellow hover:bg-dark-blue py-2 px-4 text-white rounded-3xl transition duration-300">
        Học ngay
      </button>
    </div>
  );
};

export default CourseCard;
