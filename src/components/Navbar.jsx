import React from 'react';
import { Icon } from '@iconify/react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-20 z-50 glass flex items-center justify-between px-8 md:px-16 border-b">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-gradient-to-br from-[#00d9ff] to-[#ff006e] rounded-sm"></div>
        <span className="text-sm font-bold tracking-[0.3em] uppercase">NeonVoid</span>
      </div>
      
      <div className="hidden md:flex items-center gap-12">
        <a href="#portfolio" className="text-sm uppercase tracking-widest hover:text-[#00d9ff] transition-colors">Work</a>
        <a href="#pricing" className="text-sm uppercase tracking-widest hover:text-[#00d9ff] transition-colors">Services</a>
        <a href="#contact" className="text-sm uppercase tracking-widest hover:text-[#00d9ff] transition-colors">Connect</a>
      </div>

      <a href="#contact" className="px-6 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-[#00d9ff] transition-all">
        Let's Talk <Icon icon="lucide:arrow-right" />
      </a>
    </nav>
  );
};

export default Navbar;
