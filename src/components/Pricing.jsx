import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: 'Starter',
      price: billingCycle === 'monthly' ? '$1,200' : '$960',
      icon: 'lucide:zap',
      color: '#00d9ff',
      features: ['Single Page Dev', 'SEO Optimization', '2 Revisions'],
      featured: false
    },
    {
      name: 'Studio',
      price: billingCycle === 'monthly' ? '$3,500' : '$2,800',
      icon: 'lucide:layers',
      color: '#b537f2',
      features: ['Up to 5 Pages', 'Immersive Animations', 'CMS Integration', '4 Revisions'],
      featured: true
    },
    {
      name: 'Custom',
      price: 'Tailored',
      icon: 'lucide:globe',
      color: '#ff006e',
      features: ['Full System Design', 'Custom WebGL Components', 'Unlimited Support'],
      featured: false
    }
  ];

  return (
    <section id="pricing" className="py-32 px-8 md:px-16 bg-[#0c0c0c]">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-7xl md:text-8xl font-black uppercase tracking-tighter mb-8">Investment</h2>
        
        <div className="inline-flex items-center gap-4 glass p-1.5 rounded-sm mb-12">
          <button 
            onClick={() => setBillingCycle('monthly')}
            className={`px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all ${billingCycle === 'monthly' ? 'pricing-toggle-active' : 'text-white/50'}`}
          >
            Monthly
          </button>
          <button 
            onClick={() => setBillingCycle('yearly')}
            className={`px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all ${billingCycle === 'yearly' ? 'pricing-toggle-active' : 'text-white/50'}`}
          >
            Yearly
          </button>
          <span className="ml-4 px-3 py-1 bg-gradient-to-r from-[#00d9ff] to-[#ff006e] text-[10px] font-black uppercase tracking-widest rounded-full">Save 20%</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-center">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: plan.featured ? 1.05 : 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`
              glass p-10 border border-white/10 hover:border-opacity-30 transition-all relative
              ${plan.featured ? 'border-2 border-[#b537f2]/50 neon-purple-glow z-10 p-12' : 'hover:border-white/30'}
            `}
            style={plan.featured ? {} : { borderColor: `${plan.color}33` }}
          >
            {plan.featured && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#b537f2] to-[#ff006e] px-4 py-1 text-[10px] font-black uppercase tracking-widest">
                Most Popular
              </div>
            )}
            <div className="w-12 h-12 glass flex items-center justify-center mb-6">
              <Icon icon={plan.icon} className="text-2xl" style={{ color: plan.color }} />
            </div>
            <h4 className="text-sm uppercase tracking-widest font-bold mb-2">{plan.name}</h4>
            <div className="flex items-baseline gap-2 mb-8">
              <span className={`font-black ${plan.featured ? 'text-5xl' : 'text-4xl'}`}>{plan.price}</span>
              {plan.price !== 'Tailored' && <span className="text-white/40 text-xs">/ project</span>}
            </div>
            <ul className="space-y-4 mb-10 text-sm text-white/60">
              {plan.features.map(feature => (
                <li key={feature} className="flex items-center gap-3">
                  <Icon icon="lucide:check" style={{ color: plan.color }} /> {feature}
                </li>
              ))}
            </ul>
            <a 
              href="#" 
              className={`
                block text-center py-4 text-xs font-bold uppercase tracking-widest transition-all
                ${plan.featured ? 'bg-white text-black hover:bg-[#b537f2] hover:text-white' : 'border border-white/20 hover:border-white'}
              `}
            >
              {plan.name === 'Starter' ? 'Get Started' : plan.name === 'Studio' ? 'Work with me' : 'Request Quote'}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
