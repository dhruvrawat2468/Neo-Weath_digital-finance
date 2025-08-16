import { WavyBackground } from "@/components/ui/wavy-bg";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Ctacomponent=()=> {
  return (
    <WavyBackground
      className="text-center px-4"
      containerClassName="relative h-screen"
      colors={["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"]}
      backgroundFill="black"
      blur={10}
      speed="fast"
      waveOpacity={0.5}
    >
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
    </WavyBackground>
  );
}
export default Ctacomponent;
