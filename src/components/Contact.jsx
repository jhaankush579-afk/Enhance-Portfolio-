import React from 'react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-8 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-12">
          LET'S<br /><span className="text-gradient">CREATE</span>
        </h2>
        <div className="flex flex-col gap-6">
          <a href="mailto:hello@neonvoid.xyz" className="flex items-center gap-6 group">
            <div className="w-16 h-16 border border-white/20 flex items-center justify-center group-hover:border-[#00d9ff] transition-all">
              <Icon icon="lucide:mail" className="text-2xl" />
            </div>
            <span className="text-xl font-bold tracking-widest group-hover:text-[#00d9ff] transition-all">hello@neonvoid.xyz</span>
          </a>
          <a href="#" className="flex items-center gap-6 group">
            <div className="w-16 h-16 border border-white/20 flex items-center justify-center group-hover:border-[#ff006e] transition-all">
              <Icon icon="lucide:twitter" className="text-2xl" />
            </div>
            <span className="text-xl font-bold tracking-widest group-hover:text-[#ff006e] transition-all">@neonvoid_dev</span>
          </a>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-[#141414] p-10 md:p-16 border border-white/10"
      >
        <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
          <div className="relative group">
            <input 
              type="text" 
              placeholder="NAME" 
              className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#00d9ff] transition-all uppercase tracking-widest text-xs font-bold placeholder:text-white/20"
            />
          </div>
          <div className="relative group">
            <input 
              type="email" 
              placeholder="EMAIL" 
              className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#00d9ff] transition-all uppercase tracking-widest text-xs font-bold placeholder:text-white/20"
            />
          </div>
          <div className="relative group">
            <textarea 
              placeholder="PROJECT BRIEF" 
              rows="4" 
              className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#00d9ff] transition-all uppercase tracking-widest text-xs font-bold placeholder:text-white/20 resize-none"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full py-6 bg-white text-black text-xs font-black uppercase tracking-[0.3em] hover:bg-[#00d9ff] transition-all"
          >
            Initialize Project
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
