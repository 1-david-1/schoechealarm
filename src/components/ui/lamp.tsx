import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LampContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const LampContainer = ({ children, className }: LampContainerProps) => {
  return (
    <div
      className={cn(
        "relative flex min-h-[420px] md:min-h-[520px] flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-3xl z-0 border border-slate-800",
        className,
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-110 items-center justify-center isolate z-0">
        <motion.div
          initial={{ opacity: 0.5, width: "12rem" }}
          whileInView={{ opacity: 1, width: "26rem" }}
          transition={{
            delay: 0.2,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-48 overflow-visible w-[24rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-slate-950 h-32 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-32 h-[100%] left-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0.5, width: "12rem" }}
          whileInView={{ opacity: 1, width: "26rem" }}
          transition={{
            delay: 0.2,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-48 w-[24rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-32 h-[100%] right-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-slate-950 h-32 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        <div className="absolute top-1/2 h-40 w-full translate-y-10 scale-x-150 bg-slate-950 blur-2xl" />
        <div className="absolute top-1/2 z-50 h-40 w-full bg-transparent opacity-10 backdrop-blur-md" />
        <div className="absolute inset-auto z-50 h-32 w-[22rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-40 blur-3xl" />

        <motion.div
          initial={{ width: "6rem" }}
          whileInView={{ width: "14rem" }}
          transition={{
            delay: 0.2,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-32 w-56 -translate-y-[5rem] rounded-full bg-cyan-400 blur-2xl"
        />

        <motion.div
          initial={{ width: "12rem" }}
          whileInView={{ width: "26rem" }}
          transition={{
            delay: 0.2,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[24rem] -translate-y-[6rem] bg-cyan-400"
        />

        <div className="absolute inset-auto z-40 h-40 w-full -translate-y-[11rem] bg-slate-950" />
      </div>

      <div className="relative z-50 flex -translate-y-64 md:-translate-y-72 flex-col items-center px-5 text-center">
        {children}
      </div>
    </div>
  );
};

export const LampDemo = () => {
  return (
    <LampContainer>
      <motion.h2
        initial={{ opacity: 0.5, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-4 bg-gradient-to-br from-slate-100 to-slate-400 py-2 bg-clip-text text-center text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-transparent"
      >
        Arbeiten bei Schöche
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-4 max-w-xl text-sm md:text-base text-slate-300"
      >
        Moderne Technik, starke Projekte und ein Team, das zusammenhält – werden Sie Teil unserer
        Sicherheitsprofis im Vogtland.
      </motion.p>
    </LampContainer>
  );
};

