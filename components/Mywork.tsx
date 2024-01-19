"use client";

import { MY_WORKS, IMAGES_ICON, HIRE_ME } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import { InView, useInView } from "react-intersection-observer";

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

const MyWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <section className=" relative max-container flex flex-row justify-center gap-10 mb-16">
      <div className="absolute left-20 top-80 flex flex-col items-center ">
        <h2
          title={HIRE_ME.title}
          className="font-semibold text-xl mb-10 text-red-500 "
        >
          {HIRE_ME.title}
        </h2>
        <div className="flex flex-row gap-6 bg-red-500 rounded-3xl p-4 border-2 ">
          {HIRE_ME.skills.map((skill, index) => (
            <div className="flex flex-col items-center w-20" key={index}>
              <Image src={skill.src} alt="icons" width={32} height={32} />
              <p className="break-normal pt-2 leading-none font-medium text-[#f5f5f7] text-center">
                {skill.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute right-44 flex flex-row items-center top-72 rotate-90">
        <Image
          className="left-0"
          src={IMAGES_ICON[0]}
          alt="myworkicon"
          width={80}
          height={80}
        />
        <h1 className="text-8xl font-bold ">My works</h1>
      </div>
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className=" grid grid-cols-2 grid-flow-row-dense gap-1 mt-4"
      >
        {MY_WORKS.map((work, index) => (
          <motion.div
            key={index}
            variants={item}
            className={`transform transition duration-500 hover:scale-110 hover:z-50 backdrop-blur-md rounded-2xl w-[200px] h-fit ${
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
              width={500}
              height={500}
              className="rounded-2xl p-2 drop-shadow-lg "
            />
            <p className="opacity-0 hover:opacity-100 hover:bg-opacity-20 bg-gradient-to-tr from-gray-700/20 via-gray-900/20 to-black/20 rounded-2xl duration-300 absolute inset-0 z-10 flex justify-center text-center text-pretty items-center text-sm text-[#f5f5f7] font-regular p-4 ">
              {work.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default MyWorks;
