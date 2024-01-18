import Image from "next/image";
import { Metadata } from "next";
import Hero from "@/components/Hero";
import MyWorks from "@/components/MyWorks";

export default function Home() {
  return (
    <>
      <Hero />
      <MyWorks />
    </>
  );
}
