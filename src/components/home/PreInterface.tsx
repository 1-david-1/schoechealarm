import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";

export function PreInterface() {
  return (
    <div className="h-[25rem] md:h-[30rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md pt-20">
      <h2 className="text-xl md:text-2xl text-white font-light text-center relative z-20 mb-4 tracking-wide">
        Visit your freshly created Website made by
      </h2>
      <div className="w-[40rem] h-40 relative">
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
    </div>
  );
}
