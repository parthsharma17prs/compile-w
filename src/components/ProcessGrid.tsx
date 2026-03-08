"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

const steps = [
    { id: '01', title: 'Ingest Securely', desc: 'Minimal ingestion of signals, SBOMs, and policies.', detail: 'SIGNALS' },
    { id: '02', title: 'Analyze Automatically', desc: 'Agentic AI maps and tests compliance in real-time.', detail: 'AGENTS' },
    { id: '03', title: 'Prove Cryptographically', desc: 'ZK-Proofs validate controls without exposing data.', detail: 'ZK-SNARK' },
    { id: '04', title: 'Anchor Immutably', desc: 'Verification signals anchored across Algorand, Aleo, and Zcash.', detail: 'LEDGER' },
    { id: '05', title: 'Monitor Continuously', desc: 'Always-on monitoring for continuous certification.', detail: 'ALWAYS' }
];

export default function ProcessGrid() {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

    return (
        <section className="py-32 px-6 md:px-12 bg-background text-white w-full border-t border-border relative">

            {/* Arpeggio Section Numbering */}
            <div className="absolute top-12 left-6 md:left-12 flex items-center gap-4 text-white/20 font-bebas text-xl tracking-widest z-10">
                <span>{`{02}`}</span>
                <span className="w-12 h-[1px] bg-white/10"></span>
                <span>METHODOLOGY // SYSTEM</span>
            </div>

            <div className="flex justify-between items-end mb-24 overflow-hidden mt-12">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl lg:text-8xl font-normal font-bebas tracking-tighter uppercase flex items-baseline gap-4"
                >
                    HOW IT <span className="text-white underline underline-offset-[20px] decoration-white/20">VERIFIES</span>
                </motion.h2>

                <p className="text-white/20 text-xs font-black uppercase tracking-[0.4em] hidden md:block pb-4">Our Cryptographic Process</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 border-t border-l border-white/10">
                {steps.map((step, idx) => (
                    <motion.div
                        key={step.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className={`group relative p-8 h-[350px] md:h-[400px] border-r border-b border-white/10 flex flex-col justify-between cursor-pointer overflow-hidden transition-all duration-700 ease-[0.16, 1, 0.3, 1] hover:shadow-[inset_0_0_50px_rgba(255,255,255,0.05)]`}
                        onMouseEnter={() => setHoveredIdx(idx)}
                        onMouseLeave={() => setHoveredIdx(null)}
                        animate={{
                            backgroundColor: hoveredIdx === idx ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0)',
                            color: hoveredIdx === idx ? '#000' : '#fff'
                        }}
                    >
                        <div className="text-xl md:text-2xl font-bold opacity-50 relative z-10 transition-opacity">
                            {step.id}
                        </div>

                        <div className="relative z-10">
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 block opacity-30 group-hover:opacity-100 transition-opacity">
                                // {step.detail}
                            </span>
                            <h3 className={`font-bebas uppercase mb-4 tracking-tighter leading-[0.85] transition-all
                                ${step.title === 'Prove Cryptographically' ? 'text-3xl md:text-5xl lg:text-6xl' : 'text-2xl md:text-3xl lg:text-4xl'}
                            `}>
                                {step.title}
                            </h3>

                            <motion.p
                                className="text-sm md:text-base font-normal leading-relaxed italic opacity-40 group-hover:opacity-100 transition-opacity max-w-[200px]"
                            >
                                {step.desc}
                            </motion.p>
                        </div>

                        {/* Background Arrow that scales up on hover */}
                        <motion.div
                            className="absolute top-8 right-8 text-8xl md:text-[150px] font-thin opacity-0 -rotate-45 pointer-events-none"
                            animate={{
                                opacity: hoveredIdx === idx ? 0.2 : 0,
                                x: hoveredIdx === idx ? 0 : -20,
                                y: hoveredIdx === idx ? 0 : 20,
                                scale: hoveredIdx === idx ? 1 : 0.5
                            }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        >
                            →
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
