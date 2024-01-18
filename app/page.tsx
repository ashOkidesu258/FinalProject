import Image from "next/image";
import { Metadata } from "next";
import HeroSection from "@/components/herosection/Hero";
import MyWorks from "@/components/works/Myworks";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MyWorks />
    </>
  );
}
