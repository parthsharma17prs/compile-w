"use client";

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

const services = [
    {
        id: '01',
        title: 'Secure Intake',
        desc: 'Ingests only necessary metadata, policies, and signals such as SBOMs and digital fingerprints without raw data centralization.',
        accentColor: '#ffffff',
        cards: [
            { title: 'Metadata Ingestion', tag: 'MINIMAL_INTAKE', img: '/services/digital_product.png' },
            { title: 'Policy Loading', tag: 'SAAS', img: '/services/digital_product.png' },
            { title: 'Digital Fingerprints', tag: 'FINGERPRINT', img: '/services/digital_product.png' },
            { title: 'SBOM Analysis', tag: 'SECURITY', img: '/services/digital_product.png' },
        ]
    },
    {
        id: '02',
        title: 'Intelligent Mapping',
        desc: 'Proprietary AI agents map your technical data to frameworks like SOC 2, ISO 27001, FedRAMP, HIPAA, and GDPR.',
        accentColor: '#a1a1aa',
        cards: [
            { title: 'SOC 2 & ISO 27001', tag: 'MAPPING', img: '/services/motion_content.png' },
            { title: 'Framework Analysis', tag: 'AI_AGENT', img: '/services/motion_content.png' },
            { title: 'Policy Alignment', tag: 'ALIGNMENT', img: '/services/motion_content.png' },
            { title: 'Control Gap Check', tag: 'GAP_ANALYSIS', img: '/services/motion_content.png' },
        ]
    },
    {
        id: '03',
        title: 'Cryptographic Proofs',
        desc: 'Uses Zero-knowledge proofs (ZKP) and cryptographic commitments to validate controls without expose sensitive data.',
        accentColor: '#ffffff',
        cards: [
            { title: 'ZK-SNARK Verification', tag: 'ZKP', img: '/services/strategy_positioning.png' },
            { title: 'Commitment Proofs', tag: 'VERIFICATION', img: '/services/strategy_positioning.png' },
            { title: 'Zero Exposure', tag: 'PRIVACY', img: '/services/strategy_positioning.png' },
            { title: 'Immutable Proofs', tag: 'COMPLILEDGER', img: '/services/strategy_positioning.png' },
        ]
    },
];

export default function WhatWeDo() {
    return (
        <section className="py-20 md:py-40 bg-background text-white w-full border-t border-border relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="px-6 md:px-12 mb-20 md:mb-32 relative z-10">
                <div className="flex flex-col md:flex-row gap-8 md:gap-24">
                    <div className="flex flex-col gap-4 w-full md:w-1/3">
                        <div className="flex items-center gap-4 text-accent font-bebas text-lg tracking-[0.4em] uppercase">
                            <span>{`{01}`}</span>
                            <span className="w-12 h-[1px] bg-white/10"></span>
                            <span>HOW IT VERIFIES</span>
                        </div>
                        <motion.h2
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-4xl md:text-6xl lg:text-7xl font-normal font-bebas tracking-tighter uppercase leading-[0.75]"
                        >
                            The <br /> <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.05)]">Approach</span>
                        </motion.h2>
                    </div>

                    <motion.p
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-lg md:text-xl font-normal text-white/30 max-w-lg leading-relaxed mt-auto font-light"
                    >
                        Compliance without surveillance. We verify compliance state cryptographically instead of copying sensitive systems, logs, or documents.
                    </motion.p>
                </div>
            </div>

            <div className="flex flex-col gap-32 md:gap-56 relative z-10">
                {services.map((service, idx) => (
                    <ServiceSection key={service.id} service={service} idx={idx} />
                ))}
            </div>
        </section>
    );
}

function ServiceSection({ service, idx }: { service: any, idx: number }) {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const rawX = useTransform(scrollYProgress, [0, 1], [150, -150]);
    const x = useSpring(rawX, { stiffness: 100, damping: 30, restDelta: 0.001 });

    return (
        <div ref={sectionRef} className="relative">
            <div className="px-6 md:px-12 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="text-white/20 font-bebas text-2xl mb-2 block">{service.id}</span>
                    <h3 className="text-3xl md:text-6xl font-bebas uppercase tracking-tighter text-white group cursor-default leading-none">
                        {service.title}
                    </h3>
                </motion.div>
                <motion.p
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-white/40 max-w-md text-base md:text-lg leading-relaxed font-light italic"
                >
                    {service.desc}
                </motion.p>
            </div>

            <div className="relative overflow-hidden cursor-grab active:cursor-grabbing pb-10">
                <motion.div
                    style={{ x }}
                    className="flex gap-6 md:gap-12 px-6 md:px-12 w-max"
                >
                    {service.cards.map((card: any, i: number) => (
                        <Card key={i} card={card} accentColor={service.accentColor} />
                    ))}
                </motion.div>
            </div>

            {/* Decorative line */}
            <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
    );
}

function Card({ card, accentColor }: { card: any, accentColor: string }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotX = (y - centerY) / 10;
        const rotY = (centerX - x) / 10;
        setRotateX(rotX);
        setRotateY(rotY);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.02 }}
            animate={{ rotateX, rotateY }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-[300px] md:w-[500px] aspect-[4/5] md:aspect-[16/10] relative rounded-3xl overflow-hidden group bg-[#0A0A0A] border border-white/5 shadow-2xl"
            style={{ perspective: 1000 }}
        >
            <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-cover opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-1000 ease-out"
            />

            {/* Glassmorphism Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700" />

            {/* Radiant Ambient Glow on hover */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none z-10"
                style={{ background: `radial-gradient(circle at 70% 30%, ${accentColor}, transparent 60%)` }}
            />

            {/* Premium Rim Light */}
            <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 rounded-3xl transition-all duration-700 z-30" />

            {/* Content */}
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end z-20">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <span
                        className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] mb-4 md:mb-6 px-4 py-1.5 rounded-full w-fit backdrop-blur-xl border border-white/10 text-white"
                        style={{
                            backgroundColor: `rgba(255, 255, 255, 0.05)`,
                        }}
                    >
                        {card.tag}
                    </span>
                    <h4 className="text-2xl md:text-4xl font-bebas uppercase tracking-wide text-white leading-none">
                        {card.title}
                    </h4>
                </motion.div>
            </div>

            {/* Decorative corner accent */}
            <div
                className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 opacity-0 group-hover:opacity-20 transition-all duration-700 border-white"
            />
        </motion.div>
    );
}


