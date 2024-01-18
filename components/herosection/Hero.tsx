import React from "react";
import akoragudni from "../../public/akoragudni.png";
import Image from "next/image";
import styles from "./herosection.module.css";

const HeroSection = () => {
  return (
    <section className="max-container padding-container flex justify-center h-screen items-center gap-5 py-10 pb-32 lg:py-20 sd:flex-col snap-center">
      <div className=" w-[45rem] h-52">
        <h1 className="font-semibold text-3xl">hello there!</h1>
        <h2 className="font-bold text-red-500 text-4xl">
          my name is Ashbel Siay.
        </h2>
        <p className="text-sm mt-4">
          hi there! i mostly work on front-end development and believe me itd be
          amazing if i know my way around css. in my spare time which i cant say
          i have a lot, i also do graphic design, digital painting and anything
          to do with adobe photoshop. this portfolio showcases some of my works
          that i could say im mostly proud of coz yeah. anyways, I hope you get
          this, man, hit me back just to chat, truly yours, your biggest fan
          this is Stan!
        </p>
      </div>
      <div>
        <Image
          src={akoragudni}
          alt="profile"
          width={200}
          height={200}
          className="rounded-full shadow-xl"
        />
      </div>
    </section>
  );
};
export default HeroSection;
