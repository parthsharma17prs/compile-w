"use client";

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import GiantText from '@/components/GiantText';
import FeaturedWorks from '@/components/FeaturedWorks';
import WhatWeDo from '@/components/WhatWeDo';
import ProcessGrid from '@/components/ProcessGrid';
import GoodWords from '@/components/GoodWords';
import Awards from '@/components/Awards';
import LabNotes from '@/components/LabNotes';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import Preloader from '@/components/Preloader';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <CustomCursor />

      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen bg-[#050505] text-white selection:bg-accent-blue selection:text-white relative"
      >
        {/* Global Rim Light - CompliLedger Inspired */}
        <div className="fixed inset-0 pointer-events-none z-[999] border-[1px] border-white/5 shadow-[inset_0_0_150px_rgba(255,255,255,0.05)]" />

        {/* Sticky Status Bar - CompliLedger Theme */}
        <div className="fixed top-8 right-24 z-[100] hidden lg:flex items-center gap-6 mix-blend-difference">
          <div className="flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-[10px] font-bebas tracking-[0.2em] text-white/60">EST. {currentTime}</span>
          </div>
          <div className="h-4 w-[1px] bg-white/20" />
          <span className="text-[10px] font-bebas tracking-[0.2em] text-white/40 uppercase tracking-widest">Protocol Active</span>
        </div>

        <Navbar />
        <Hero />
        <Marquee text="Immutable Audit Anchoring  •  Algorithmically Verifiable  •  Decentralized Trust  •  No Raw Evidence Centralization  •  " />
        <WhatWeDo />
        <ProcessGrid />
        <FeaturedWorks />
        <GoodWords />
        <GiantText text="+COMPLILEDGER®" />
        <Awards />
        <LabNotes />
        <Footer />
      </motion.main>
    </>
  );
}

