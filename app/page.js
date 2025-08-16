"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import styled from "styled-components";
import { useEffect, useState } from "react";
import {
  featuresData,
  howItWorksData,
  statsData,
  testimonialsData,
} from "@/data/landing";
import Loader from "@/components/loader";
import Ctacomponent from "@/components/cta-section";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import HeroSection from "@/components/hero";
import Link from "next/link";

const LandingPage = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4500); // 4.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
        <Loader />
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />

      {/* Stats Section */}
      <section className="py-20 bg-black-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section (new gradient hover card) */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything you need to manage your finances
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <StyledWrapper key={index}>
                <div className="card">
                  <div className="card-content">
                    <div className="icon">{feature.icon}</div>
                    <p className="card-title">{feature.title}</p>
                    <p className="card-para">{feature.description}</p>
                  </div>
                </div>
              </StyledWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
    <section className="py-20 bg-black">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-16 text-white">
      How It Works
    </h2>
    <HoverEffect
      items={howItWorksData.map(step => ({
        icon: step.icon,
        title: step.title,
        description: step.description,
        link: "#", // You can add real links later
      }))}
    />
  </div>
</section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className="p-6 bg-white rounded-lg text-black">
                <div className="pt-4">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">{testimonial.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already managing their finances
            smarter with Neo Wealth
          </p>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 animate-bounce"
            >
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section> */}
      <Ctacomponent />
    </div>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 100%;
    height: 250px;
    background-color: #4158d0;
    background-image: linear-gradient(
      43deg,
      #4158d0 0%,
      #c850c0 46%,
      #ffcc70 100%
    );
    border-radius: 8px;
    color: white;
    overflow: hidden;
    position: relative;
    transform-style: preserve-3d;
    perspective: 1000px;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card-content {
    padding: 20px;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: white;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
    color:black;
  }

  .card-content .icon {
    font-size: 2rem;
  }

  .card-content .card-title {
    font-size: 20px;
    font-weight: 700;
    color: inherit;
    text-transform: uppercase;
  }

  .card-content .card-para {
    color: inherit;
    opacity: 0.85;
    font-size: 14px;
  }

  .card:hover {
    transform: rotateY(10deg) rotateX(10deg) scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .card:before,
  .card:after {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.1));
    transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    z-index: 1;
  }

  .card:before {
    left: 0;
  }

  .card:after {
    right: 0;
  }

  .card:hover:before {
    transform: translateX(-100%);
  }

  .card:hover:after {
    transform: translateX(100%);
  }
`;

export default LandingPage;
