import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 px-8 md:px-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 bg-gradient-to-br from-[#00d9ff] to-[#ff006e] rounded-sm"></div>
        <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-white/40">© 2024 NEONVOID V1.0</span>
      </div>
      <div className="flex gap-8">
        <a href="#" className="text-[10px] tracking-widest uppercase text-white/40 hover:text-white transition-colors">Github</a>
        <a href="#" className="text-[10px] tracking-widest uppercase text-white/40 hover:text-white transition-colors">LinkedIn</a>
        <a href="#" className="text-[10px] tracking-widest uppercase text-white/40 hover:text-white transition-colors">Dribbble</a>
      </div>
    </footer>
  );
};

export default Footer;
