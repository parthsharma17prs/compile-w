"use client";

import { motion, AnimatePresence, useSpring, useTransform, animate } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

function CountingNumber({ value, duration = 2 }: { value: number; duration?: number }) {
    const [displayValue, setDisplayValue] = useState(0);
    const nodeRef = useRef(null);

    useEffect(() => {
        const controls = animate(0, value, {
            duration: duration,
            ease: [0.16, 1, 0.3, 1],
            onUpdate: (latest) => setDisplayValue(Math.round(latest))
        });
        return () => controls.stop();
    }, [value, duration]);

    return <span>{displayValue.toLocaleString()}</span>;
}

export default function Pricing() {
    const [isSubscription, setIsSubscription] = useState(true);

    return (
        <section className="py-40 px-6 md:px-12 bg-background text-white w-full relative overflow-hidden">
            {/* Ambient Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                        rotate: [0, 90, 0]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-white/5 rounded-full blur-[150px]"
                />
            </div>

            <div className="max-w-7xl mx-auto mb-24 relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4 text-white/40 font-bebas text-lg tracking-[0.4em] uppercase">
                        <span>{`{05}`}</span>
                        <span className="w-12 h-[1px] bg-white/10"></span>
                        <span>ENGAGEMENT</span>
                    </div>
                    <div className="overflow-hidden">
                        <motion.h2
                            initial={{ y: "100%" }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[12vw] md:text-[9rem] font-normal font-bebas tracking-tighter uppercase leading-[0.7] mb-4"
                        >
                            SECURE <br /> <span className="text-white/20 italic">ACCESS</span>
                        </motion.h2>
                    </div>
                </div>

                <div className="flex flex-col gap-8">
                    <p className="text-xl text-white/40 max-w-sm font-light italic leading-relaxed">
                        Strategically designed engagement models for elite cryptographic infrastructure and high-velocity compliance teams.
                    </p>

                    <div className="relative p-2 bg-white/5 backdrop-blur-3xl rounded-3xl border border-white/10 flex gap-4 w-fit shadow-2xl">
                        {['CONTINUOUS', 'ONE-TIME PROOF'].map((type) => (
                            <button
                                key={type}
                                onClick={() => setIsSubscription(type === 'CONTINUOUS')}
                                className={`relative px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-500 z-10 ${(type === 'CONTINUOUS' && isSubscription) || (type === 'ONE-TIME PROOF' && !isSubscription)
                                    ? 'text-black bg-white shadow-xl scale-105'
                                    : 'text-white/40 hover:text-white'
                                    }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
                {/* Advanced Structural Block 1: The Logic */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="lg:col-span-1 bg-[#0A0A0A] border border-white/5 rounded-[3rem] p-12 flex flex-col justify-between group overflow-hidden relative"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div>
                        <span className="text-white/40 font-bebas text-2xl mb-8 block">// ARCHITECTURE</span>
                        <p className="text-3xl font-bebas leading-tight uppercase tracking-tighter text-white/80 group-hover:text-white transition-colors duration-500">
                            Privacy is not a feature. It is the core architecture of trust.
                        </p>
                    </div>
                    <div className="mt-12">
                        <div className="w-12 h-[1px] bg-white/20 mb-4 group-hover:w-full transition-all duration-700" />
                        <span className="text-white/20 font-bebas text-lg">ZK-PROOF® METHODOLOGY</span>
                    </div>

                    {/* Decorative Background Text */}
                    <span className="absolute -bottom-10 -right-4 text-[10rem] font-black text-white/5 font-bebas select-none pointer-events-none group-hover:text-white/10 transition-colors">ZK</span>
                </motion.div>

                {/* Advanced Structural Block 2: The Main Pricing Display (Counting Effect) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="lg:col-span-2 bg-[#0A0A0A] border border-white/10 rounded-[4rem] p-12 md:p-20 relative overflow-hidden group shadow-2xl"
                >
                    {/* Animated Rim Effect */}
                    <div className="absolute inset-0 border border-white/20 rounded-[4rem] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={isSubscription ? 'sub' : 'proj'}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16"
                        >
                            <div className="flex flex-col justify-between">
                                <div>
                                    <span className="text-accent-grey text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">
                                        {isSubscription ? 'Ecosystem Support' : 'Core Infrastructure'}
                                    </span>
                                    <h3 className="text-5xl md:text-7xl font-bebas uppercase tracking-tighter leading-none mb-10">
                                        {isSubscription ? 'Monthly Proof' : 'Protocol Build'}
                                    </h3>

                                    <div className="flex items-baseline gap-2 mb-8">
                                        <span className="text-4xl md:text-6xl font-bebas text-white/20">$</span>
                                        <h4 className="text-8xl md:text-[10rem] font-normal font-bebas tabular-nums tracking-tighter">
                                            <CountingNumber value={isSubscription ? 8500 : 25000} />
                                        </h4>
                                        <span className="text-2xl font-bebas text-white/20 ml-2">
                                            {isSubscription ? '/MO' : '+'}
                                        </span>
                                    </div>
                                </div>

                                <Link href="/contact" className="w-full md:w-fit">
                                    <motion.button
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        className="w-full md:w-fit px-12 py-6 bg-white text-black font-black uppercase text-[10px] tracking-[0.3em] rounded-2xl hover:bg-white hover:scale-105 transition-all duration-500 shadow-2xl"
                                    >
                                        Book Demo Now
                                    </motion.button>
                                </Link>
                            </div>

                            <div className="flex flex-col gap-8 py-8 md:border-l md:border-white/5 md:pl-16">
                                <p className="text-lg text-white/50 italic leading-relaxed">
                                    {isSubscription
                                        ? "Continuous cryptographic verification for protocols that require extreme privacy."
                                        : "Bespoke cryptographic architecture built for enterprise-grade compliance launches."
                                    }
                                </p>
                                <ul className="flex flex-col gap-6">
                                    {(isSubscription
                                        ? ["Unlimited Evidence", "48h Proof Generation", "Direct Node Access", "Cancel Anytime"]
                                        : ["Protocol Discovery", "Custom ZK Circuits", "Audit Finalization", "Dedicated Engineer"]
                                    ).map((feature, i) => (
                                        <motion.li
                                            key={feature}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.2 + i * 0.1 }}
                                            className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-white/80 group/item"
                                        >
                                            <span className="w-6 h-[1px] bg-white/40 group-hover/item:w-10 group-hover/item:bg-white transition-all duration-300" />
                                            {feature}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Visual Callout - Advanced Bento Piece */}
            <div className="max-w-7xl mx-auto mt-8 relative z-10">
                <Link href="/contact">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-12 bg-white flex flex-col md:flex-row items-center justify-between rounded-[3rem] group cursor-pointer hover:bg-[#fafafa] transition-colors duration-700"
                    >
                        <h5 className="text-3xl md:text-5xl font-bebas uppercase tracking-tighter text-black">
                            Need a custom cryptographic audit?
                        </h5>
                        <div className="flex items-center gap-6 mt-8 md:mt-0">
                            <span className="text-black/50 font-sans text-sm font-bold uppercase tracking-widest group-hover:text-black/80">Schedule Brief</span>
                            <div className="w-16 h-16 rounded-full border border-black/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <span className="text-3xl text-black">→</span>
                            </div>
                        </div>
                    </motion.div>
                </Link>
            </div>
        </section>
    );
}

