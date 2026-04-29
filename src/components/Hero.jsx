import React from 'react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen pt-20 grid grid-cols-1 lg:grid-cols-2 relative overflow-hidden">
      {/* Left: Content */}
      <div className="flex flex-col justify-center px-8 md:px-24 py-12 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8 inline-flex items-center gap-3 glass px-4 py-1.5 rounded-full w-fit"
        >
          <span className="w-2 h-2 bg-[#00d9ff] rounded-full animate-pulse"></span>
          <span className="text-[10px] tracking-widest uppercase font-bold text-[#00d9ff]">Available for projects</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[10vw] font-black leading-[0.9] tracking-tighter mb-8"
        >
          CRAFTING <br />
          <span className="text-gradient">DIGITAL</span> <br />
          <span className="text-outline">VIRTUE</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg text-white/60 max-w-lg mb-12"
        >
          Full-stack developer focused on brutalist aesthetics and high-performance immersive web experiences.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex gap-6"
        >
          <a href="#portfolio" className="px-8 py-4 bg-white text-black font-bold uppercase text-xs tracking-widest hover:bg-[#ff006e] hover:text-white transition-all">View Works</a>
          <a href="#" className="px-8 py-4 border border-white/20 font-bold uppercase text-xs tracking-widest hover:border-white transition-all">Play Reel</a>
        </motion.div>
      </div>

      {/* Right: Visual (3D Cube) */}
      <div className="hidden lg:flex items-center justify-center relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="cube-container"
        >
          <div className="cube">
            <div className="cube-face front"><Icon icon="logos:react" className="text-6xl" /></div>
            <div className="cube-face back"><Icon icon="logos:threejs" className="text-6xl invert" /></div>
            <div className="cube-face right"><Icon icon="logos:tailwindcss-icon" className="text-6xl" /></div>
            <div className="cube-face left"><Icon icon="logos:typescript-icon" className="text-6xl" /></div>
            <div className="cube-face top"><Icon icon="logos:nextjs-icon" className="text-6xl invert" /></div>
            <div className="cube-face bottom"><Icon icon="logos:vitejs" className="text-6xl" /></div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[10px] tracking-widest uppercase text-white/40">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#00d9ff] to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
