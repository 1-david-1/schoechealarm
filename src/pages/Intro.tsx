import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Intro() {
  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-xl md:text-2xl text-white font-light text-center relative z-20 mb-2 tracking-wide">
        Visit your freshly created Website made by
      </h2>
      <p className="text-sm md:text-base text-white/70 text-center relative z-20 mb-8 tracking-wider uppercase">
        Gegründet 2024 • Agentur mit Sitz in Deutschland
      </p>
      <div className="w-full max-w-[40rem] h-40 relative px-4">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[hsl(var(--amber))] to-transparent h-[2px] w-3/4 blur-sm opacity-60" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[hsl(var(--amber))] to-transparent h-px w-3/4 opacity-80" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-white to-transparent h-[5px] w-1/4 blur-sm opacity-40" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-white to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full absolute inset-0 z-0"
          particleColor="#FFFFFF"
        />

        {/* Text embedded in sparkles */}
        <h1 className="md:text-6xl text-4xl lg:text-8xl font-bold text-center text-white relative z-20 top-8">
          InboxElevate
        </h1>

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)] pointer-events-none"></div>
      </div>

      <div className="relative z-30 mt-16 md:mt-24 animate-fade-up" style={{ animationDelay: "1s" }}>
        <Button variant="default" size="lg" className="bg-[hsl(var(--amber))] text-white hover:bg-[hsl(var(--amber-dark))] transition-colors px-8 py-6 rounded-full text-lg shadow-glow" asChild>
          <Link to="/home">
            Hier geht's zur Webseite
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
