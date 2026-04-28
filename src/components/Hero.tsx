import { memo } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default memo(function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=80&w=2000" 
          alt="Pets" 
          className="w-full h-full object-cover opacity-30 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/20 via-transparent to-brand-cream" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-clay/10 text-brand-clay text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles size={14} />
            让爱延续
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-heading leading-tight mb-6">
            给流浪的<br />
            <span className="italic text-brand-clay italic">小生命</span><br />
            一个温暖的家
          </h1>
          <p className="text-lg md:text-xl text-brand-muted mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            每一个毛孩子都值得拥有被爱的一生。我们在城市中寻找那些渴望陪伴的灵魂，为您牵线那段命中注定的缘分。
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-10 py-4 bg-brand-olive text-white rounded-full font-bold text-lg hover:bg-brand-olive-dark transition-all shadow-xl shadow-brand-olive/20 flex items-center justify-center gap-2 group">
              立即寻找伙伴
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-10 py-4 bg-white/50 backdrop-blur-sm border border-brand-stone text-brand-heading rounded-full font-bold text-lg hover:border-brand-olive transition-all">
              AI 智能推荐
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className="w-px h-12 bg-stone-900" />
      </div>
    </section>
  );
});
