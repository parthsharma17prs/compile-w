"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-8 mix-blend-difference"
            >
                <Link href="/" className="text-2xl font-bold tracking-tight text-white flex items-center">
                    <span className="text-white mr-1 italic">C</span>ompliLedger<sup className="text-[10px] font-medium opacity-50 ml-1">TM</sup>
                </Link>

                <button
                    onClick={() => setIsOpen(true)}
                    className="flex flex-col gap-[6px] w-[32px] hover:scale-105 transition-transform"
                >
                    <div className="w-full h-[2px] bg-white"></div>
                    <div className="w-2/3 h-[2px] bg-white self-end"></div>
                </button>
            </motion.nav>

            {/* Full Screen Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ y: "-100%" }}
                        animate={{ y: "0%" }}
                        exit={{ y: "-100%" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-[100] bg-background text-white flex flex-col p-6 md:p-12 overflow-hidden"
                    >
                        <div className="flex justify-between items-center mb-16">
                            <span className="text-2xl font-bold tracking-tight">
                                <span className="text-white mr-1 italic">C</span>ompliLedger<sup className="text-[10px] font-medium opacity-50 ml-1">TM</sup>
                            </span>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white hover:text-accent-grey transition-colors text-3xl font-light"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="flex flex-col md:flex-row justify-between h-full pt-12 md:pt-24 gap-12 relative z-10">
                            <div className="flex flex-col justify-end w-full md:w-1/3 order-3 md:order-1">
                                <span className="text-white/30 text-[10px] uppercase tracking-[0.5em] mb-4 font-bebas italic">CompliLedger // Atomic Time</span>
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-white text-6xl md:text-8xl font-bebas tracking-tighter tabular-nums drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                                >
                                    {time}
                                </motion.span>
                                <div className="h-[1px] w-24 bg-white/10 mt-6" />
                            </div>

                            <div className="w-full md:w-1/3 flex flex-col gap-8 order-1 md:order-2">
                                {[
                                    { name: 'Infrastructure', slug: '/infrastructure' },
                                    { name: 'Verification', slug: '/verification' },
                                    { name: 'CompALGO SDK', slug: '/compalgo-sdk' },
                                    { name: 'ZK-Proofs', slug: '/zk-proofs' },
                                    { name: 'Research', slug: '/research' },
                                    { name: 'Contact', slug: '/contact' }
                                ].map((item, idx) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 + idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        <Link
                                            href={item.slug}
                                            onClick={() => setIsOpen(false)}
                                            className="group flex flex-col gap-2 w-fit"
                                        >
                                            <div className="flex items-center gap-6">
                                                <span className="text-[10px] font-bebas opacity-20 group-hover:opacity-100 transition-opacity tracking-widest">0{idx + 1}</span>
                                                <span className="text-4xl md:text-6xl font-bebas uppercase tracking-tighter text-white/40 group-hover:text-white transition-all duration-500 group-hover:translate-x-4">
                                                    {item.name}
                                                </span>
                                            </div>
                                            <div className="h-[1px] w-0 group-hover:w-full bg-gradient-to-r from-white/40 to-transparent transition-all duration-700" />
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="w-full md:w-1/3 flex flex-col items-start md:items-end gap-6 order-2 md:order-3">
                                <span className="text-white/20 text-[10px] uppercase font-bebas tracking-[0.4em] mb-4 italic text-right w-full">Digital // Connectivity</span>
                                {['Instagram', 'Twitter / X', 'LinkedIn', 'Github'].map((soc, idx) => (
                                    <motion.a
                                        key={soc}
                                        href="#"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 + idx * 0.1, duration: 0.5 }}
                                        className="text-2xl md:text-4xl font-bebas uppercase text-white/40 hover:text-white transition-all flex items-center gap-4 group"
                                    >
                                        <div className="w-8 h-[1px] bg-white/10 group-hover:w-12 group-hover:bg-white transition-all duration-500" />
                                        {soc}
                                        <span className="text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all">↗</span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Ambient Glows in Overlay */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none" />
                        <div className="absolute -bottom-[10%] -left-[5%] w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
