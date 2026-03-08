"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const awards = [
    { year: '2025', title: 'Startup Challenge Winner', platform: 'Algorand Foundation', project: 'High-Integrity Infra' },
    { year: '2025', title: 'NIST SP 800-53 Compliant', platform: 'NIST Standards', project: 'Automated Artifacts' },
    { year: '2024', title: 'SOC 2 Type II Automated', platform: 'AICPA / GRC', project: 'Continuous Audit' },
    { year: '2024', title: 'FedRAMP Artifact Suite', platform: 'Public Sector', project: 'OSCAL Production' },
    { year: '2023', title: 'ISO 27001 / 27701', platform: 'Global Standards', project: 'Cert Architecture' },
    { year: '2023', title: 'DORA Compliance Ready', platform: 'EU Finance', project: 'Operational Resilience' },
    { year: '2022', title: 'HIPAA Security Verified', platform: 'Healthcare IT', project: 'Privacy Shield' },
    { year: '2021', title: 'PCI DSS 4.0 Standard', platform: 'Financial Security', project: 'Vault Systems' },
];

export default function Awards() {
    return (
        <section className="py-24 md:py-40 px-6 md:px-12 bg-background text-white w-full border-t border-border relative overflow-hidden">

            {/* Arpeggio Section Numbering */}
            <div className="absolute top-12 left-6 md:left-12 flex items-center gap-4 text-white/20 font-bebas text-xl tracking-widest z-10">
                <span>{`{04}`}</span>
                <span className="w-12 h-[1px] bg-white/10"></span>
                <span>CERTIFICATIONS & VERIFICATIONS</span>
            </div>

            <div className="max-w-7xl mx-auto mt-20 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[10vw] md:text-[7rem] font-normal font-bebas tracking-tighter uppercase leading-[0.75]"
                    >
                        TRUST <br /> <span className="text-white/20">VERIFIED</span>
                    </motion.h2>

                    <p className="text-white/40 max-w-sm text-lg font-light italic leading-relaxed">
                        A retrospective of our commitment to pushing the boundaries of cryptographic trust and regulatory excellence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
                    {awards.map((award, idx) => (
                        <AwardGridItem key={idx} award={award} idx={idx} />
                    ))}
                </div>
            </div>

            {/* Background Decorative Glow */}
            <div className="absolute -bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px] pointer-events-none" />
        </section>
    );
}

function AwardGridItem({ award, idx }: { award: any; idx: number }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="group relative h-[350px] border-b border-r border-white/10 p-10 flex flex-col justify-between hover:bg-white/[0.03] transition-colors duration-500 cursor-default overflow-hidden"
        >
            <div className="relative z-10">
                <span className="text-accent-grey font-bebas text-sm tracking-[0.3em] block mb-4">
                    /{award.platform}
                </span>
                <span className="text-4xl md:text-5xl font-bebas text-white/40 block leading-none mb-1 group-hover:text-white transition-colors">
                    {award.year}
                </span>
                <h3 className="text-2xl md:text-3xl font-bebas uppercase tracking-tight text-white/80 group-hover:text-accent transition-colors duration-300 leading-tight">
                    {award.title}
                </h3>
            </div>

            <div className="relative z-10">
                <span className="text-[10px] text-white/20 uppercase tracking-[0.4em] block mb-2">Protocol</span>
                <span className="text-lg font-bebas text-white/60 group-hover:text-white transition-colors">
                    {award.project}
                </span>
            </div>

            {/* Animated Rim Light Effect */}
            <div className="absolute inset-x-0 top-0 h-[100%] bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

            {/* Corner Icon */}
            <div className="absolute top-8 right-8 text-white/5 group-hover:text-white transition-all duration-700 group-hover:rotate-45 group-hover:scale-125">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>

            {/* Premium Rim Light on hover */}
            <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-all duration-700 pointer-events-none rounded-none" />
        </motion.div>
    );
}

