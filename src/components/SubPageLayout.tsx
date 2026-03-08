"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from './CustomCursor';
import Preloader from './Preloader';
import Link from 'next/link';

interface SubPageLayoutProps {
    title: string;
    subtitle: string;
    description: string;
    children: React.ReactNode;
}

export default function SubPageLayout({ title, subtitle, description, children }: SubPageLayoutProps) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Reset scroll on mount
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background text-white selection:bg-white selection:text-black">
            <AnimatePresence mode="wait">
                {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
            </AnimatePresence>

            <CustomCursor />
            <Navbar />

            <main className={`pt-40 pb-20 px-6 md:px-12 transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20 relative">
                        <div className="flex flex-col gap-6 max-w-4xl">
                            <div className="flex items-center gap-4 text-white/40 font-bebas text-lg tracking-[0.4em] uppercase">
                                <span className="w-12 h-[1px] bg-white/10"></span>
                                <span>{subtitle}</span>
                            </div>
                            <motion.h1
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className="text-6xl md:text-8xl lg:text-[9.5rem] font-normal font-bebas leading-[0.8] tracking-tighter uppercase"
                            >
                                {title}
                            </motion.h1>
                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                className="text-xl md:text-2xl text-white/40 max-w-2xl font-light italic mt-8"
                            >
                                {description}
                            </motion.p>
                        </div>

                        {/* Top Right Action Button */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8, duration: 1 }}
                            className="hidden md:block"
                        >
                            <Link href="/contact">
                                <button className="group relative px-12 py-6 bg-white text-black font-bebas text-xl uppercase tracking-widest rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] overflow-hidden">
                                    <div className="absolute inset-0 bg-black/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                    <span className="relative z-10">Request Brief</span>
                                </button>
                            </Link>
                        </motion.div>
                    </div>

                    <div className="mt-32">
                        {children}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
