import Image from "next/image";
import HeroSection from "../components/herosection/Hero";
import { Metadata } from "next";
import MyWorks from "@/components/works/Myworks";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MyWorks />
    </>
  );
}
