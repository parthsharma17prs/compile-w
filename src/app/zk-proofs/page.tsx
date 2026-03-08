"use client";

import SubPageLayout from '@/components/SubPageLayout';
import { motion } from 'framer-motion';

export default function ZKProofsPage() {
    return (
        <SubPageLayout
            title="ZK-Proofs"
            subtitle="TECHNOLOGY // PRIVACY"
            description="Leveraging zk-SNARK based evaluations to prove compliance without violating the sovereignty of your data."
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-32 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-12"
                >
                    <div className="flex flex-col gap-6">
                        <h2 className="text-4xl md:text-6xl font-bebas uppercase leading-none">Privacy as <span className="italic text-white/40">Architecture</span></h2>
                        <p className="text-xl md:text-2xl font-light text-white/40 leading-relaxed italic">
                            Zero-knowledge proofs allow us to evaluate complex regulatory rules against your data without ever seeing the data itself.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { title: 'NON-EXPOSURE', desc: 'No sensitive logs, PII, or credentials ever leave your infrastructure.' },
                            { title: 'VERIFIABILITY', desc: 'Mathematical proofs can be independently audited by any regulator.' },
                            { title: 'EFFICIENCY', desc: 'Verify thousands of controls in milliseconds using ZK-circuits.' },
                            { title: 'TRUSTLESS', desc: 'Eliminate the need to trust any third-party audit firm blindly.' }
                        ].map(item => (
                            <div key={item.title} className="flex flex-col gap-2">
                                <span className="text-sm font-black uppercase tracking-widest text-white/20 border-b border-white/5 pb-2">{item.title}</span>
                                <p className="text-sm text-white/60 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="aspect-square bg-[#0A0A0A] border border-white/10 rounded-[4rem] relative flex items-center justify-center group overflow-hidden"
                >
                    {/* Abstract Cryptographic Visualization */}
                    <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_0%,transparent_70%)]" />
                        <div className="grid grid-cols-10 h-full w-full">
                            {Array.from({ length: 100 }).map((_, i) => (
                                <div key={i} className="border-[0.5px] border-white/10" />
                            ))}
                        </div>
                    </div>
                    <div className="relative z-10 text-center flex flex-col items-center">
                        <span className="text-9xl md:text-[12rem] font-bebas opacity-5 mb-4 group-hover:opacity-10 transition-opacity">ZK</span>
                        <div className="px-8 py-3 bg-white text-black text-[10px] font-black uppercase tracking-[0.5em] rounded-full shadow-2xl">Verified State</div>
                    </div>
                </motion.div>
            </div>

            <div className="p-12 md:p-20 bg-background border border-white/10 rounded-[4rem] flex flex-col gap-12">
                <h3 className="text-white/20 font-bebas text-lg tracking-[0.4em] uppercase">MATHEMATICAL FOUNDATIONS</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { title: 'zk-SNARKs', desc: 'Succinct Non-Interactive Arguments of Knowledge for lightweight verification.' },
                        { title: 'Merkle Trees', desc: 'Efficiently organized commitments for multi-state proof validation.' },
                        { title: 'Recursive Proofs', desc: 'Compressing multiple audits into a single verifiable cryptographic point.' }
                    ].map(foundation => (
                        <div key={foundation.title} className="flex flex-col gap-4">
                            <span className="text-2xl font-bebas uppercase">{foundation.title}</span>
                            <p className="text-white/40 italic font-light leading-relaxed">{foundation.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </SubPageLayout>
    );
}
