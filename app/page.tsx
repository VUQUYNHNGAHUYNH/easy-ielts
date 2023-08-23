import Hero from "@/components/Hero";
import { courses } from "@/constants/courses";
import CourseCard from "@/components/shared/CourseCard";

export default function Home() {
  return (
    <main className=" overflow-hidden ">
      <Hero />
      <div
        className="bg-dark-blue xl:h-screen mt-32 px-16 sm:px-6 py-8 flex flex-col gap-6 justify-center items-center"
        id="courses"
      >
        <h1 className="text-4xl p-1 font-semibold text-center text-dark-yellow rounded-full border-solid border-2 border-dark-yellow">
          Khoá học
        </h1>

        <div className="flex justify-center items-center w-full sm:px-16 px-6 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {courses.map((course, index) => (
              <CourseCard
                key={index}
                title={course.title}
                description={course.description}
                imageSrc={course.imageSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
