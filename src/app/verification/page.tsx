"use client";

import SubPageLayout from '@/components/SubPageLayout';
import { motion } from 'framer-motion';

const steps = [
    { id: '01', title: 'Secure Intake', desc: 'Minimal ingest of policies, control signals, and configuration fingerprints.' },
    { id: '02', title: 'AI Analysis', desc: 'Specialized Agentic AI maps technical evidence to regulatory frameworks.' },
    { id: '03', title: 'ZK Evaluation', desc: 'Verification of state changes without exposing raw logs or credentials.' },
    { id: '04', title: 'Identity Binding', desc: 'Athenticating proofs against Decentralized Identifiers (DIDs).' },
    { id: '05', title: 'Chain Anchoring', desc: 'Anchoring verifiable reports to Algorand, Aleo, and Zcash ledgers.' }
];

export default function VerificationPage() {
    return (
        <SubPageLayout
            title="Verification"
            subtitle="AUDIT // ALGORITHMIC"
            description="Our 5-step cryptographic pipeline replaces manual evidence collection with automated, mathematical certainty."
        >
            <div className="flex flex-col gap-6 mb-32">
                {steps.map((step, idx) => (
                    <motion.div
                        key={step.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="group flex flex-col md:flex-row items-center justify-between p-12 md:p-16 border border-white/10 rounded-[3rem] hover:bg-white hover:text-black transition-all duration-700 ease-out relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="flex items-center gap-12 w-full md:w-1/2">
                            <span className="text-5xl md:text-8xl font-bebas opacity-10 group-hover:opacity-100 transition-opacity leading-none">{step.id}</span>
                            <div className="flex flex-col">
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] mb-2 opacity-30 group-hover:opacity-100">Protocol Phase</span>
                                <h2 className="text-4xl md:text-6xl font-bebas uppercase leading-none">{step.title}</h2>
                            </div>
                        </div>
                        <p className="text-xl md:text-2xl font-light italic opacity-40 group-hover:opacity-100 max-w-lg md:text-right mt-8 md:mt-0 leading-relaxed">
                            {step.desc}
                        </p>
                    </motion.div>
                ))}
            </div>

            <div className="p-16 md:p-24 bg-white/5 border border-white/10 rounded-[4rem] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.03] blur-3xl rounded-full" />
                <h3 className="text-white/20 font-bebas text-lg tracking-[0.4em] uppercase mb-16 underline underline-offset-8">ANCHORED NETWORKS</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-32">
                    {[
                        {
                            name: 'ALGORAND',
                            detail: 'Immutable Audit Trail',
                            fact: 'Anchors compliant certificates to the block 12,042+ consensus layer.'
                        },
                        {
                            name: 'ALEO',
                            detail: 'Private ZK-Computation',
                            fact: 'Executes private proof logic without revealing underlying system state.'
                        },
                        {
                            name: 'ZCASH',
                            detail: 'Shielded Verification',
                            fact: 'Propagates shielded proof signals for high-sensitivity financial audits.'
                        }
                    ].map(ledger => (
                        <div key={ledger.name} className="flex flex-col gap-6 group/ledger transition-all">
                            <span className="text-4xl md:text-6xl font-bebas leading-none group-hover/ledger:text-white transition-colors">{ledger.name}</span>
                            <div className="flex flex-col gap-2">
                                <span className="text-[10px] font-black uppercase tracking-widest text-white/30">{ledger.detail}</span>
                                <p className="text-white/20 text-sm font-light italic leading-relaxed group-hover/ledger:text-white/40">{ledger.fact}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SubPageLayout>
    );
}
