"use client";

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';

export default function Hero() {
    const textTitle = "Proof Based Compliance Infrastructure";
    const characters = textTitle.split("");

    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX / window.innerWidth);
            mouseY.set(e.clientY / window.innerHeight);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

    return (
        <section className="relative w-full min-h-screen pt-40 pb-32 px-6 lg:px-12 flex flex-col justify-center overflow-hidden bg-background selection:bg-accent selection:text-black">

            {/* Background Atmosphere */}
            <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-background opacity-30"></div>
                {/* Cryptographic Mesh Background Effect could be added here */}
            </div>

            {/* Elegant Background Particles/Glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.03, 0.08, 0.03],
                        rotate: [0, 5, 0]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[15%] -right-[10%] w-[1000px] h-[1000px] bg-white blur-[200px] rounded-full"
                />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 contrast-150 brightness-50 pointer-events-none mix-blend-overlay"></div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-32 relative z-10 w-full max-w-[1800px] mx-auto">
                {/* Left Content */}
                <div className="flex-1 w-full max-w-5xl">
                    <div className="flex items-center gap-4 mb-12 overflow-hidden">
                        <motion.span
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: "circOut" }}
                            className="w-12 h-[1px] bg-accent-grey"
                        />
                        <motion.span
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
                            className="text-accent font-bebas text-sm tracking-[0.5em] uppercase"
                        >
                            CRYPTOGRAPHIC PROOF INFRASTRUCTURE
                        </motion.span>
                    </div>

                    <h1 className="text-6xl md:text-[7rem] lg:text-[9rem] font-normal font-bebas leading-[0.85] tracking-tighter uppercase">
                        {characters.map((char, index) => (
                            <motion.span
                                key={index}
                                className={`inline-block ${index > 11 ? "text-white" : "text-white/40"}`}
                                initial={{ y: "100%", opacity: 0, scale: 0.8 }}
                                animate={{ y: 0, opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 1.2,
                                    delay: index * 0.012,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </h1>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.8, duration: 1 }}
                        className="mt-20 flex flex-col md:flex-row gap-12 md:items-center"
                    >
                        <button className="group relative px-12 py-5 bg-white text-black font-black uppercase tracking-[0.2em] text-[10px] rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.3)]">
                            <div className="absolute inset-x-0 -bottom-1 h-3 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="relative z-10">Request Technical Brief</span>
                        </button>

                        <div className="flex flex-col gap-1">
                            <span className="text-white/20 text-[10px] uppercase tracking-[0.4em] font-bold">Protocol Infrastructure</span>
                            <div className="flex gap-4 opacity-50">
                                <span className="text-white font-bebas text-lg">Algorand</span>
                                <span className="text-white font-bebas text-lg">Aleo</span>
                                <span className="text-white font-bebas text-lg">Zcash</span>
                                <span className="text-white font-bebas text-lg">Solana</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>

            {/* Elegant Background Accents */}
            <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </section>
    );
}
