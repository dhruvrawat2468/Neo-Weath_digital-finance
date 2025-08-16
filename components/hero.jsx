"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import StartedButton from "@/components/ui/get-startedbutton";

const HeroSection = () => {
  const imageRef = useRef(null);
    const words = [
    {
      text: "MANAGE ",
       className: "text-white-500 dark:text-blue-500",
    },
    {
      text: "YOUR",
       className: "text-white-500 dark:text-blue-500",
    },
    {
      text: "FINANCES ",
      className: "text-white-500 dark:text-blue-500",
    },
    
    {
      text: "DIGITALLY.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="pt-40 pb-20 px-4">
      <div className="container mx-auto text-center">
       <TypewriterEffect words={words}/>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          An AI-powered financial management platform that helps you track,
          analyze, and optimize your spending with real-time insights.
        </p>
        <div className="flex justify-center space-x-4 ">
          <Link href="/dashboard">
          <StartedButton text={"Get Started"} />
          </Link>
          <Link href="https://www.youtube.com/roadsidecoder">
          <StartedButton text={"Watch Demo"} />
          </Link>
        </div>
        <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageRef} className="hero-image">
            <Image
              src="/abcd.jpg"
              width={1200}
              height={660}
              alt="Dashboard Preview"
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
          </div>
          </div>
      </div>
    </section>
  );
};

export default HeroSection;
