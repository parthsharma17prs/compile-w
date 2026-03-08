"use client";

import SubPageLayout from '@/components/SubPageLayout';
import { motion } from 'framer-motion';

export default function ContactPage() {
    return (
        <SubPageLayout
            title="Contact"
            subtitle="PROTOCOL // CONNECT"
            description="Direct inquiries for custom cryptographic audits, institutional SDK licensing, and protocol integration."
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex flex-col gap-16"
                >
                    <div className="flex flex-col gap-6">
                        <span className="text-white/20 font-bebas text-lg tracking-[0.4em] uppercase">DIRECT_EMAIL</span>
                        <a href="mailto:maranda@compliledger.com" className="text-4xl md:text-5xl lg:text-6xl font-bebas uppercase hover:text-white/60 transition-colors break-all">
                            maranda@compliledger.com
                        </a>
                    </div>

                    <div className="flex flex-col gap-8">
                        <span className="text-white/20 font-bebas text-lg tracking-[0.4em] uppercase">OUR_MISSION</span>
                        <p className="text-2xl font-light italic leading-relaxed text-white/40">
                            To eliminate the trade-off between compliance and privacy by automating regulatory verification using ZK-Proofs and Agentic AI.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6">
                        <span className="text-white/20 font-bebas text-lg tracking-[0.4em] uppercase">LOCATION</span>
                        <p className="text-4xl font-bebas uppercase">Distributed // Global</p>
                    </div>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="p-12 md:p-16 bg-[#0A0A0A] border border-white/10 rounded-[4rem] flex flex-col gap-10"
                >
                    <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Full Name</label>
                        <input type="text" className="w-full bg-transparent border-b border-white/10 py-4 font-bebas text-3xl focus:outline-none focus:border-white transition-all uppercase" placeholder="NAME // ENTITY" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Protocol / Entity</label>
                        <input type="text" className="w-full bg-transparent border-b border-white/10 py-4 font-bebas text-3xl focus:outline-none focus:border-white transition-all uppercase" placeholder="NAME // PROTOCOL" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Message</label>
                        <textarea className="w-full bg-transparent border-b border-white/10 py-4 font-bebas text-2xl focus:outline-none focus:border-white transition-all uppercase h-32 resize-none" placeholder="INQUIRY // DETAILS"></textarea>
                    </div>
                    <button className="w-full py-8 bg-white text-black font-bebas text-2xl uppercase tracking-widest rounded-3xl hover:scale-[1.02] active:scale-[0.98] transition-all mt-8">
                        Send Brief
                    </button>
                </motion.form>
            </div>
        </SubPageLayout>
    );
}
