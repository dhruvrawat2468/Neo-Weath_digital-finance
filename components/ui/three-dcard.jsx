"use client"

import { useState } from "react"
import Image from "next/image"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function ThreeDCardDemo() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const financeCards = [
    {
      title: "ADVANCED ANALYTICS",
      description: "Get detailed insights into your spending patterns with AI-powered analytics",
      image: "/financial-analytics-dashboard.png",
    },
    {
      title: "SMART RECEIPT SCANNER",
      description: "Extract data automatically from receipts using advanced AI technology",
      image: "/ai-receipt-scanning.png",
    },
    {
      title: "BUDGET PLANNING",
      description: "Create and manage budgets with intelligent recommendations",
      image: "/budget-planning-interface.png",
    },
    {
      title: "MULTI-ACCOUNT SUPPORT",
      description: "Manage multiple accounts and credit cards in one place",
      image: "/financial-management-overview.png",
    },
    {
      title: "AUTOMATED INSIGHTS",
      description: "Get automated financial insights and recommendations",
      image: "/automated-financial-insights.png",
    },
  ]

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % financeCards.length)
  }

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + financeCards.length) % financeCards.length)
  }

  const currentCard = financeCards[currentIndex]

  return (
    <div className="flex flex-col items-center justify-center p-8 max-w-4xl mx-auto">
      <div className="flex items-center gap-8 w-full">
        <button
          onClick={prevCard}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
          aria-label="Previous card"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="flex-1 flex justify-center">
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                {currentCard.title}
              </CardItem>
              <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                {currentCard.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={currentCard.image || "/placeholder.svg"}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={currentCard.title}
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>

        <button
          onClick={nextCard}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
          aria-label="Next card"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="flex gap-2 mt-6">
        {financeCards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex
                ? "bg-blue-500"
                : "bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500"
            }`}
            aria-label={`Go to card ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
