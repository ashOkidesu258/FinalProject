import { MY_WORKS } from "@/constants";
import Image from "next/image";

const Testingpage = () => {
  return (
    <section className=" bg-red-400 w-screen h-screen">
      <div className="grid grid-cols-2 grid-rows-4 gap-1 mt-4">
        {MY_WORKS.map((work, index) => (
          <div
            className={`relative transform transition duration-500 hover:scale-110 hover:z-50 backdrop-blur-md rounded-2xl ${
              index === 1 ? "row-span-2" : ""
            } ${index === 2 ? "col-start-1 row-start-3" : ""} ${
              index === 3 ? "row-span-2 col-start-2 row-start-3" : ""
            } ${index === 4 ? "col-start-1 row-start-2" : ""} ${
              index === 5 ? "row-start-4" : ""
            }`}
          >
            <Image
              src={work.src}
              alt={`Work ${index + 1}`}
              fill
              sizes="(min-width: 808px) 50vw, 100vw"
              style={{
                objectFit: "fill", // cover, contain, none
              }}
              priority
              className="rounded-2xl p-2 drop-shadow-lg "
            />
            <p className="opacity-0 hover:opacity-100 hover:bg-opacity-20 bg-gradient-to-tr from-gray-700/20 via-gray-900/20 to-black/20 rounded-2xl duration-300 absolute inset-0 z-10 flex justify-center text-center text-pretty items-center text-sm text-[#f5f5f7] font-regular p-4 ">
              {work.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Testingpage;
