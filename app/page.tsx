import Image from "next/image";
import HeroSection from "../components/herosection/herosection";
import MyWorks from "@/components/works/MyWorks";
import { Metadata } from "next";
import Testingpage from "@/components/test";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MyWorks />
    </>
  );
}
