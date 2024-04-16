"use client";

import About from "@/components/About";
import Appointment from "@/components/Appointment";
import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <About />
      <Services />
      <Appointment />
    </>
  );
}
