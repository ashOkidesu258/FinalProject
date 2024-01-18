import Image from "next/image";
import HeroSection from "../components/herosection/Hero";
import { Metadata } from "next";
import Testingpage from "@/components/test";
import MyWorks from "@/components/works/Myworks";

export default function Home() {
  return (
    <>
      <section id="Hero">
        <HeroSection />
      </section>
      <section id="Myworks">
        <MyWorks />
      </section>
    </>
  );
}
