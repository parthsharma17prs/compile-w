"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import Image from 'next/image';

const works = [
    {
        id: 1,
        title: 'OSCAL On-Chain',
        client: 'NIST Ecosystem',
        img: '/work/cinematic1.png',
        tag: 'AUTOMATED COMPLIANCE',
        bgText: 'OSCAL'
    },
    {
        id: 2,
        title: 'ASA Security Hooks',
        client: 'Algorand Ledger',
        img: '/work/cinematic2.png',
        tag: 'ALGORITHMIC AUDIT',
        bgText: 'ALGORAND'
    },
    {
        id: 3,
        title: 'Evidence Rooms',
        client: 'ZK Evidence Center',
        img: '/work/cinematic3.png',
        tag: 'SHIELDED STORAGE',
        bgText: 'ROOMS'
    },
    {
        id: 4,
        title: 'AML Proof Signals',
        client: 'Chainalysis/TRM',
        img: '/work/cinematic4.png',
        tag: 'INTEGRATED VERIFICATION',
        bgText: 'AML'
    },
];

export default function FeaturedWorks() {
    return (
        <section className="py-24 md:py-40 px-6 md:px-12 bg-background text-white w-full border-t border-border relative overflow-hidden">
            {/* Arpeggio Section Label */}
            <div className="absolute top-12 left-6 md:left-12 flex items-center gap-4 text-white/20 font-bebas text-xl tracking-widest z-10">
                <span>{`{03}`}</span>
                <span className="w-12 h-[1px] bg-white/10"></span>
                <span>CRYPTOGRAPHIC PROOFS // ARCHIVE</span>
            </div>

            <div className="max-w-7xl mx-auto mt-20 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 gap-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[14vw] md:text-[10rem] font-normal font-bebas tracking-tighter uppercase leading-[0.7] relative"
                    >
                        SELECTED <br /> <span className="text-white/20">CASE PROOFS</span>
                    </motion.h2>

                    <div className="flex flex-col items-start md:items-end gap-8">
                        <p className="text-white/40 max-w-[350px] text-xl font-light italic leading-relaxed md:text-right">
                            A curated selection of cryptographic proofs that demonstrate our architectural commitment to privacy and compliance.
                        </p>
                        <motion.button
                            whileHover={{ x: 10 }}
                            className="group flex items-center gap-4 text-white font-bebas text-lg tracking-widest uppercase"
                        >
                            Explore Solutions <span className="w-12 h-[1px] bg-white group-hover:w-20 transition-all duration-500"></span>
                        </motion.button>
                    </div>
                </div>

                <div className="flex flex-col gap-32 md:gap-64">
                    {works.map((work, idx) => (
                        <WorkCard key={work.id} work={work} idx={idx} />
                    ))}
                </div>
            </div>

            {/* Background Decorative Gradient */}
            <div className="absolute top-1/2 left-0 w-full h-full bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none" />
        </section>
    );
}

function WorkCard({ work, idx }: { work: any; idx: number }) {
    const isEven = idx % 2 === 0;
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, isEven ? -100 : 100]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, isEven ? -2 : 2]);

    return (
        <motion.div
            ref={containerRef}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className={`relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 md:gap-32 group`}
        >
            {/* Background Kinetic Text */}
            <span className={`absolute -top-16 ${isEven ? '-right-10' : '-left-10'} text-[20vw] font-black text-white/[0.01] font-bebas select-none pointer-events-none group-hover:text-white/[0.05] group-hover:drop-shadow-[0_0_50px_rgba(255,255,255,0.1)] transition-all duration-1000`}>
                {work.bgText}
            </span>

            {/* Immersive Image Container */}
            <motion.div
                style={{ y, rotate }}
                className="w-full md:w-3/5 aspect-[16/10] relative rounded-[3rem] overflow-hidden bg-white/5 border border-white/10 group-hover:border-white/40 transition-all duration-700 shadow-2xl group-hover:shadow-[0_0_60px_rgba(255,255,255,0.05)]"
            >
                <Image
                    src={work.img}
                    alt={work.title}
                    fill
                    className="object-cover scale-110 group-hover:scale-105 transition-transform duration-1000 ease-out grayscale group-hover:grayscale-0"
                />

                {/* Reveal Overlay */}
                <motion.div
                    initial={{ scaleX: 1 }}
                    whileInView={{ scaleX: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: [0.85, 0, 0.15, 1] }}
                    className="absolute inset-0 bg-background z-20 origin-right"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>

            {/* Text Content */}
            <div className={`w-full md:w-2/5 flex flex-col gap-8 ${isEven ? 'items-start' : 'items-end md:text-right'}`}>
                <div className="flex items-center gap-4">
                    <span className="text-white text-[10px] font-black uppercase tracking-[0.4em]">
                        /0{work.id}
                    </span>
                    <div className="w-8 h-[1px] bg-white/20" />
                    <span className="text-white/30 text-[10px] font-bebas tracking-widest uppercase">{work.tag}</span>
                </div>

                <div className="overflow-hidden">
                    <h3 className="text-6xl md:text-8xl font-bebas uppercase tracking-tighter leading-none group-hover:text-white transition-colors duration-500">
                        {work.title}
                    </h3>
                </div>

                <p className="text-white/50 text-xl font-light italic leading-relaxed max-w-sm">
                    {work.client}. Shaping the future of cryptographic verification through mathematical precision.
                </p>

                <motion.button
                    whileHover={{ scale: 1.1, rotate: -45 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white/40 group-hover:bg-white group-hover:border-white group-hover:text-black transition-all duration-700 shadow-[0_0_0_transparent] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-100 rounded-full transition-transform duration-700" />
                    <span className="text-3xl relative z-10">→</span>
                </motion.button>
            </div>
        </motion.div>
    );
}

