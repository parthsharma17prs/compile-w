"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full bg-background text-white relative overflow-hidden">
            {/* Atmospheric Background Image */}
            <div className="absolute inset-0 z-0 opacity-30 select-none pointer-events-none">
                <Image
                    src="/footer/bg.png"
                    alt="Atmospheric Background"
                    fill
                    className="object-cover grayscale brightness-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
            </div>

            <div className="relative z-10 px-6 md:px-12 pt-32 pb-12">
                <div className="flex flex-col items-center mb-32">
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-white font-bebas text-xl tracking-[0.4em] uppercase mb-8"
                    >
                        Secure your infrastructure
                    </motion.h4>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-center w-full"
                    >
                        <h2 className="text-[10vw] md:text-[12vw] font-bebas uppercase leading-[0.7] tracking-tighter text-transparent stroke-text opacity-40 hover:opacity-100 transition-opacity duration-700 cursor-default">
                            VERIFY // <br /> COMPLIANCE
                        </h2>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-32 pt-20 border-t border-border">
                    <div className="flex flex-col gap-8">
                        <span className="text-white/30 font-bebas text-sm tracking-[0.3em] uppercase">Security Brief</span>
                        <div className="flex flex-col gap-4">
                            <a href="mailto:maranda@compliledger.com" className="text-3xl md:text-4xl font-bebas text-white hover:text-accent-grey transition-colors duration-300">
                                maranda@compliledger.com
                            </a>
                            <span className="text-2xl font-bebas text-white/60">Institutional Infrastructure</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8">
                        <span className="text-white/30 font-bebas text-sm tracking-[0.3em] uppercase">Navigation</span>
                        <div className="flex flex-col gap-3">
                            {[
                                { name: 'Infrastructure', slug: '/infrastructure' },
                                { name: 'Verification', slug: '/verification' },
                                { name: 'CompALGO SDK', slug: '/compalgo-sdk' },
                                { name: 'ZK-Proofs', slug: '/zk-proofs' },
                                { name: 'Research', slug: '/research' },
                                { name: 'Contact', slug: '/contact' }
                            ].map((item) => (
                                <Link key={item.name} href={item.slug} className="text-xl font-bebas text-white/60 hover:text-white transition-all duration-300 flex items-center gap-2 group">
                                    <span className="group-hover:translate-x-1 transition-transform">{item.name}</span>
                                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 md:items-end md:text-right">
                        <span className="text-white/30 font-bebas text-sm tracking-[0.3em] uppercase">Identity</span>
                        <div className="flex flex-col gap-3">
                            {['X (Twitter)', 'LinkedIn', 'Github', 'Documentation'].map((item) => (
                                <a key={item} href="#" className="text-xl font-bebas text-white/60 hover:text-white transition-all duration-300 flex items-center md:justify-end gap-2 group">
                                    <span className="group-hover:-translate-x-1 transition-transform">{item}</span>
                                    <span className="text-white/20">/</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center mt-32 text-xs md:text-sm text-white/30 uppercase tracking-widest font-bebas pt-8 border-t border-white/5">
                    <p>© {new Date().getFullYear()} CompliLedger Inc. All rights reserved.</p>
                    <div className="flex items-center gap-6 mt-4 md:mt-0">
                        <span className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                            Protocol Active
                        </span>
                        <span>Designed for Cryptography</span>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .stroke-text {
                    -webkit-text-stroke: 2px rgba(255, 255, 255, 0.4);
                }
                .stroke-text:hover {
                    -webkit-text-stroke: 2px #ffffff;
                }
            `}</style>
        </footer>
    );
}

