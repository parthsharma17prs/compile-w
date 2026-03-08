"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function LabNotes() {
    const posts = [
        {
            id: 1,
            title: 'OSCAL Adoption: Automating NIST Compliance Artifacts',
            category: 'Governance',
            date: 'Oct 12, 2025',
            img: '/lab/note1.png',
            size: 'large'
        },
        {
            id: 2,
            title: 'Privacy-First Audit Trails: Zero-Knowledge Evidence',
            category: 'Cryptography',
            date: 'Sep 28, 2025',
            img: '/lab/note2.png',
            size: 'small'
        },
        {
            id: 3,
            title: 'DeFi Audit Documentation: Smart Contract Integrity',
            category: 'Web3',
            date: 'Sep 15, 2025',
            img: '/lab/note1.png',
            size: 'small'
        },
        {
            id: 4,
            title: 'Digital Asset Regulatory: Cross-Chain Compliance',
            category: 'Strategy',
            date: 'Aug 04, 2025',
            img: '/lab/note2.png',
            size: 'wide'
        }
    ];

    return (
        <section className="py-24 md:py-40 px-6 md:px-12 bg-background text-white w-full border-t border-border relative overflow-hidden">
            {/* Arpeggio-inspired Section Label */}
            <div className="absolute top-12 left-6 md:left-12 flex items-center gap-4 text-white/20 font-bebas text-xl tracking-widest z-10">
                <span>{`{06}`}</span>
                <span className="w-12 h-[1px] bg-white/10"></span>
                <span>RESEARCH JOURNAL // VOL 01</span>
            </div>

            <div className="max-w-7xl mx-auto mt-20 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 gap-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[12vw] md:text-[8rem] font-normal font-bebas tracking-tighter uppercase leading-[0.7] relative"
                    >
                        THE <br /> <span className="text-white italic">COMPLILEDGER</span> <span className="text-white/10">NOTES</span>
                    </motion.h2>

                    <div className="flex flex-col items-start md:items-end gap-8">
                        <p className="text-white/40 max-w-[350px] text-xl font-light italic leading-relaxed md:text-right">
                            Our collective research into the intersection of cryptography, regulatory law, and automated trust.
                        </p>
                        <div className="flex gap-4">
                            <span className="px-4 py-2 rounded-full border border-white/10 text-[10px] uppercase tracking-widest text-white/40">Latest Release: Oct 2025</span>
                        </div>
                    </div>
                </div>

                {/* Asymmetric Editorial Grid */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-8 auto-rows-[300px] md:auto-rows-[400px]">
                    {posts.map((post, idx) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className={`group relative overflow-hidden rounded-[2.5rem] bg-[#0A0A0A] border border-white/5 cursor-pointer 
                                ${post.size === 'large' ? 'md:col-span-4 md:row-span-2' : ''}
                                ${post.size === 'small' ? 'md:col-span-2 md:row-span-1' : ''}
                                ${post.size === 'wide' ? 'md:col-span-6 md:row-span-1' : ''}
                            `}
                        >
                            <Image
                                src={post.img}
                                alt={post.title}
                                fill
                                className="object-cover opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-1000 ease-out grayscale"
                            />

                            {/* Decorative Edge Glow */}
                            <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 rounded-[2.5rem] transition-colors duration-700" />

                            <div className="absolute inset-x-0 bottom-0 p-10 md:p-12 bg-gradient-to-t from-black via-black/90 to-transparent pt-40 flex flex-col justify-end h-full">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-accent-grey text-[10px] font-black uppercase tracking-[0.4em]">
                                        {post.category}
                                    </span>
                                    <div className="w-8 h-[1px] bg-white/20" />
                                    <span className="text-white/30 text-[10px] font-bebas tracking-widest">{post.date}</span>
                                </div>
                                <h3 className={`font-bebas uppercase tracking-tighter text-white group-hover:text-accent transition-colors duration-500 leading-none mb-8
                                    ${post.size === 'large' ? 'text-4xl md:text-7xl max-w-2xl' : 'text-2xl md:text-4xl'}
                                `}>
                                    {post.title}
                                </h3>
                                <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] font-bebas text-white/50">Details</span>
                                    <div className="h-[1px] flex-grow bg-white/10" />
                                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black hover:scale-110 transition-all">
                                        <span className="text-2xl">→</span>
                                    </div>
                                </div>
                            </div>

                            {/* Corner Badge for Large Items */}
                            {post.id === 1 && (
                                <div className="absolute top-10 right-10 text-white/5 font-bebas text-9xl select-none group-hover:text-white/10 transition-colors">
                                    01
                                </div>
                            )}
                        </motion.article>
                    ))}
                </div>
            </div>

            {/* Floating "Latest Note" Widget - Optimized Arpeggio Inspired */}
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 2, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="fixed bottom-12 right-12 z-[100] hidden lg:block"
            >
                <div className="bg-background/80 backdrop-blur-3xl border border-border rounded-3xl p-5 flex items-center gap-6 w-[350px] shadow-[0_40px_100px_rgba(0,0,0,0.5)] group hover:border-white/40 transition-all relative overflow-hidden">
                    {/* Animated Background Line */}
                    <div className="absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-500 w-0 group-hover:w-full" />

                    <div className="w-20 h-20 rounded-2xl overflow-hidden relative flex-shrink-0 shadow-2xl">
                        <Image src="/lab/note1.png" alt="Latest Note" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="flex flex-col gap-2 overflow-hidden">
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                            <span className="text-white/60 text-[9px] font-black uppercase tracking-[0.2em]">Latest Research</span>
                        </div>
                        <p className="text-lg font-bebas uppercase text-white truncate leading-none">ZK-Compliance Proofs</p>
                        <a href="#" className="flex items-center gap-2 text-[10px] text-white/40 uppercase tracking-widest hover:text-white transition-colors">
                            Perspective <span className="text-white">→</span>
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}


