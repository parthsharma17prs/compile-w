"use client";

import SubPageLayout from '@/components/SubPageLayout';
import { motion } from 'framer-motion';

export default function SDKPage() {
    return (
        <SubPageLayout
            title="SDK Suite"
            subtitle="DEVELOPER // TOOLS"
            description="Specialized SDKs for embedding privacy-first compliance and cryptographic proof directly into your distributed applications."
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                {[
                    {
                        name: 'Comp-ALGO',
                        tag: 'ALGORAND // L1',
                        desc: 'Leverage ASAs and Smart Signatures to anchor compliant state transitions. Specialized in high-throughput transaction indexing for continuous audit logs.',
                        features: ['ASA Security Hooks', 'Atomic Transfer Anchors', 'Consensus-Layer Proofs']
                    },
                    {
                        name: 'Comp-Leo',
                        tag: 'ALEO // PRIVACY',
                        desc: 'Native LEO integration for private ZK-computation. Prove regulatory compliance without ever decrypting sensitive user PII or system metadata.',
                        features: ['Private Proof Circuitry', 'Off-chain Computation', 'On-chain Attestation']
                    },
                    {
                        name: 'Comp-Z',
                        tag: 'ZCASH // SHIELD',
                        desc: 'Enterprise-grade shielded transaction verification. Enables organizations to maintain a public audit trail while keeping transaction amounts and counterparts confidential.',
                        features: ['Sapling/Orchard Support', 'Shielded Signal Relays', 'Zero-Exposure Audits']
                    }
                ].map((sdk, idx) => (
                    <motion.div
                        key={sdk.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="p-12 bg-[#0A0A0A] border border-white/5 rounded-[3rem] flex flex-col justify-between hover:border-white/20 transition-all group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div>
                            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-widest text-white/40 mb-10 inline-block group-hover:bg-white group-hover:text-black transition-colors">{sdk.tag}</span>
                            <h2 className="text-5xl font-bebas uppercase mb-8">{sdk.name}</h2>
                            <p className="text-white/40 text-xl font-light leading-relaxed italic mb-12 group-hover:text-white/60 transition-colors">
                                {sdk.desc}
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            {sdk.features.map(f => (
                                <span key={f} className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 flex items-center gap-4">
                                    <span className="w-6 h-[1px] bg-white/10 group-hover:w-10 group-hover:bg-white transition-all" /> {f}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="bg-white text-black p-12 md:p-20 rounded-[4rem] flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="max-w-xl">
                    <h3 className="text-5xl md:text-7xl font-bebas uppercase leading-none mb-8">Ready to Integrate?</h3>
                    <p className="text-xl font-light italic text-black/60">
                        Our documentation provides a complete guide to deploying cryptographic compliance modules across multi-chain environments.
                    </p>
                </div>
                <button className="px-16 py-8 bg-black text-white font-bebas text-xl uppercase tracking-widest rounded-full hover:scale-105 active:scale-95 transition-all">
                    Access Docs
                </button>
            </div>
        </SubPageLayout>
    );
}
