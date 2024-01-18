import Image from "next/image";
import { Metadata } from "next";
import Hero from "@/components/hero";
import MyWorks from "@/components/myworks";

export default function Home() {
  return (
    <>
      <Hero />
      <MyWorks />
    </>
  );
}
