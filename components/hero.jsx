"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import StartedButton from "@/components/ui/get-startedbutton";
import Component from "@/components/hero-particles";

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
    <section className="pt-30 pb-20 px-4">
      <div className="container mx-auto text-center ">
        <div className="hero-image-wrapper   md:mt-0">
          <div ref={imageRef} className="hero-image w-full ">
            <Component/>
          </div>
        </div>
       <TypewriterEffect words={words}/>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto mt-3">
          An AI-powered financial management platform that helps you track,
          analyze, and optimize your spending with real-time insights.
        </p>
        <div className="flex justify-center space-x-4 ">
          <Link href="/dashboard">
          <StartedButton text={"Get Started"} />
          </Link>
        
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;
