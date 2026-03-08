"use client";

import SubPageLayout from '@/components/SubPageLayout';
import { motion } from 'framer-motion';

const articles = [
    {
        category: 'GOVERNANCE',
        title: 'OSCAL Adoption: The Future of GRC Automation',
        desc: 'A deep dive into the Open Security Controls Assessment Language for automated risk management and compliance reporting.'
    },
    {
        category: 'CRYPTO',
        title: 'Privacy-First Audit Trails in DeFi',
        desc: 'Strategic insights into maintaining comprehensive logs for regulators while protecting institutional privacy.'
    },
    {
        category: 'ALGORITHMIC',
        title: 'Continuous Compliance: Real-Time vs Point-in-Time',
        desc: 'Transitioning from periodic audits to perpetual, algorithmic verification of technical controls.'
    },
    {
        category: 'STRATEGY',
        title: 'Digital Asset Compliance: Mapping Global Regulations',
        desc: 'Analyzing regulatory adaptation for cross-border cryptocurrency and blockchain infrastructure protocols.'
    }
];

export default function ResearchPage() {
    return (
        <SubPageLayout
            title="Research"
            subtitle="JOURNAL // PERSPECTIVES"
            description="Our collective insights into the intersection of cryptography, regulatory law, and automated trust."
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-32">
                {articles.map((article, idx) => (
                    <motion.article
                        key={article.title}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="p-12 border border-white/10 rounded-[3rem] hover:bg-white/5 transition-all group pointer-cursor relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="text-white/20 font-bebas text-lg tracking-[0.4em] uppercase block mb-8 group-hover:text-white transition-colors underline underline-offset-8 decoration-white/10">{`// ${article.category}`}</span>
                        <h2 className="text-4xl md:text-5xl font-bebas uppercase leading-none mb-10 group-hover:text-white transition-colors">{article.title}</h2>
                        <p className="text-white/40 text-xl font-light italic leading-relaxed mb-12 max-w-xl group-hover:text-white/60 transition-colors">
                            {article.desc}
                        </p>
                        <button className="flex items-center gap-6 text-[11px] font-black uppercase tracking-[0.3em] text-white/40 group-hover:text-white group-hover:gap-10 transition-all">
                            Review Manuscript <span className="w-16 h-[1px] bg-white group-hover:w-24 transition-all" />
                        </button>
                    </motion.article>
                ))}
            </div>

            <div className="py-24 border-y border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 mb-32">
                <div className="flex flex-col gap-4">
                    <span className="text-white/20 font-bebas text-lg tracking-[0.4em] uppercase">REGULATORY STANDARDS</span>
                    <div className="flex flex-wrap gap-8 items-center grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all">
                        {['NIST SP 800-53', 'ISO/IEC 27001', 'SOC 2 TYPE II', 'FedRAMP MODERATE'].map(std => (
                            <span key={std} className="text-2xl font-bebas text-white border-r border-white/10 pr-8 last:border-none uppercase">{std}</span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="py-24 border-t border-white/10 text-center">
                <span className="text-white/20 font-bebas text-lg tracking-[0.4em] uppercase block mb-12">NEWSLETTER</span>
                <h3 className="text-5xl md:text-8xl font-bebas uppercase mb-16 max-w-4xl mx-auto leading-none">Stay informed on <span className="italic">Cryptological</span> Governance</h3>
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                    <input
                        type="email"
                        placeholder="EMAIL@ADDRESS.COM"
                        className="w-full md:w-96 px-8 py-6 bg-white/5 border border-white/10 rounded-2xl text-white font-bebas text-xl focus:outline-none focus:border-white transition-all text-center md:text-left"
                    />
                    <button className="px-12 py-6 bg-white text-black font-bebas text-xl uppercase tracking-widest rounded-2xl hover:scale-105 active:scale-95 transition-all w-full md:w-auto">
                        Subscribe
                    </button>
                </div>
            </div>
        </SubPageLayout>
    );
}
