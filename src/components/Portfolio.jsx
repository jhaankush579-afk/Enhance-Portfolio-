import React from 'react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const projects = [
    { id: '01', title: 'Project Neon', category: 'Interaction', desc: 'WebGL experimentation with noise algorithms.', size: 'large' },
    { id: '02', title: 'Aura Luxury', category: 'e-Commerce', size: 'medium' },
    { id: '03', title: 'Void Dash', category: 'Dashboard', size: 'small' },
    { id: '04', title: 'Synth Map', category: 'Visualization', size: 'small' },
    { id: '05', title: 'Re-Engineering the Grid', category: 'Case Study', size: 'wide' },
  ];

  return (
    <section id="portfolio" className="py-32 px-8 md:px-16">
      <div className="mb-20">
        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4">
          Our<br /><span className="text-outline">Projects</span>
        </h2>
        <p className="text-white/40 uppercase tracking-[0.3em] text-xs">Engineering visceral interactions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[320px] gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`
              bg-[#141414] border border-white/10 p-8 flex flex-col justify-between 
              hover:scale-[1.02] transition-transform cursor-pointer group
              ${project.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
              ${project.size === 'medium' ? 'md:col-span-2' : ''}
              ${project.size === 'wide' ? 'md:col-span-2' : ''}
            `}
          >
            <div className="flex justify-between items-start">
              <span className="text-sm font-bold opacity-30 group-hover:opacity-100 transition-opacity">{project.id}</span>
              {project.category && (
                <div className="px-3 py-1 border border-white/20 text-[10px] tracking-widest uppercase">
                  {project.category}
                </div>
              )}
            </div>
            <div>
              <h3 className={`font-black uppercase mb-2 ${project.size === 'large' ? 'text-4xl' : 'text-2xl'}`}>
                {project.title}
              </h3>
              {project.desc && <p className="text-white/50 text-sm mb-6">{project.desc}</p>}
              <Icon
                icon="lucide:arrow-up-right"
                className={`text-3xl transition-transform group-hover:translate-x-2 
                  ${project.id === '02' ? 'group-hover:text-[#ff006e]' : 'text-[#00d9ff]'}
                `}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
