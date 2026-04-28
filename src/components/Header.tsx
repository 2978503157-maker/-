import { memo } from 'react';
import { Heart, Search, Menu, UserCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default memo(function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/50 backdrop-blur-sm border-b border-brand-stone">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="w-8 h-8 bg-brand-olive rounded-full flex items-center justify-center text-white">
            <Heart size={16} fill="currentColor" />
          </div>
          <span className="text-xl font-semibold tracking-tight text-brand-heading">萌宠之家 PetHaven</span>
        </motion.div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-brand-muted">
          <a href="#" className="text-brand-olive border-b-2 border-brand-olive pb-1 transition-colors">寻找伙伴</a>
          <a href="#" className="hover:text-brand-olive transition-colors">领养指南</a>
          <a href="#" className="hover:text-brand-olive transition-colors">关于我们</a>
          <a href="#" className="hover:text-brand-olive transition-colors">成功案例</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="p-2 text-brand-muted hover:text-brand-olive transition-colors">
            <Search size={20} />
          </button>
          <button className="hidden sm:flex items-center gap-2 px-6 py-2 bg-brand-olive text-white rounded-full text-sm font-medium hover:bg-brand-olive-dark transition-all shadow-sm">
            登录 / 注册
          </button>
          <button className="md:hidden p-2 text-brand-muted">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
});
