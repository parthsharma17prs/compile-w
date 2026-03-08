"use client";

import SubPageLayout from '@/components/SubPageLayout';
import { motion } from 'framer-motion';

export default function InfrastructurePage() {
    return (
        <SubPageLayout
            title="Infrastructure"
            subtitle="PROTOCOL // FOUNDATION"
            description="The CompliLedger Platform (CompliOS) serves as the core compliance operating system, providing a continuous system of record and control plane for regulated entities."
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-32">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="p-12 bg-white/5 border border-white/10 rounded-[3rem] group hover:border-white/40 transition-all relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.02] blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
                    <span className="text-white/20 font-bebas text-2xl mb-6 block">// LAYER 01 // COMPLIOS</span>
                    <h2 className="text-5xl font-bebas uppercase mb-8">Continuous Control Plane</h2>
                    <p className="text-white/40 text-xl leading-relaxed italic mb-10 font-light max-w-xl">
                        CompliOS automates the lifecycle of regulatory artifacts including SSP, SAP, SAR, POA&M, and PIA, transforming manual documentation into live, verifiable data streams.
                    </p>
                    <ul className="flex flex-col gap-6">
                        {[
                            'Automated GRC Artefact Generation (NIST/SOC2)',
                            'Agentic AI specialized in Policy Mapping',
                            'Real-time Algorithmic Risk Scoring (ARS)',
                            'Immutable POC evidence anchoring'
                        ].map(item => (
                            <li key={item} className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em] text-white/60">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white transition-colors" /> {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="p-12 bg-white text-black rounded-[3rem] group relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="text-black/20 font-bebas text-2xl mb-6 block">// LAYER 02 // IDENTITY</span>
                    <h2 className="text-5xl font-bebas uppercase mb-8">Verifiable Credentials</h2>
                    <p className="text-black/60 text-xl leading-relaxed italic mb-10 font-light">
                        Deploy W3C-compliant Decentralized Identifiers (DIDs) to cryptographically sign every audit event, ensuring undisputed ownership and non-repudiation of data sovereignty.
                    </p>
                    <div className="h-[240px] bg-black/5 rounded-[2rem] flex items-center justify-center border border-black/10 relative group-hover:scale-[1.02] transition-transform">
                        <span className="text-black/5 font-bebas text-[10rem] italic select-none absolute">DID_VALID</span>
                        <div className="relative z-10 text-center">
                            <span className="text-black text-[10px] font-black uppercase tracking-[0.5em] block mb-4">Cryptographic Status</span>
                            <div className="flex items-center gap-3 bg-black px-6 py-3 rounded-full text-white text-xs font-bold uppercase tracking-widest">
                                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                                Verified State Active
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="py-20 border-t border-white/10">
                <h3 className="text-white/20 font-bebas text-lg tracking-[0.4em] uppercase mb-12">SYSTEM FEATURES</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { label: 'Latency', value: '< 200ms' },
                        { label: 'Uptime', value: '99.99%' },
                        { label: 'Nodes', value: 'DECENTRALIZED' },
                        { label: 'Ledger', value: 'MULTI-CHAIN' }
                    ].map(stat => (
                        <div key={stat.label}>
                            <span className="text-white/30 text-[10px] font-black uppercase tracking-widest block mb-2">{stat.label}</span>
                            <span className="text-white text-4xl font-bebas">{stat.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </SubPageLayout>
    );
}
