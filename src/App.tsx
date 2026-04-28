import Header from './components/Header';
import Hero from './components/Hero';
import PetGrid from './components/PetGrid';
import PetMatcher from './components/PetMatcher';
import { motion, useScroll, useSpring } from 'motion/react';
import { Heart } from 'lucide-react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen selection:bg-brand-olive/20 selection:text-brand-olive">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-brand-olive origin-left z-[100]" 
        style={{ scaleX }} 
      />
      
      <Header />
      
      <main>
        <Hero />
        
        <div className="py-24 bg-white/50 backdrop-blur-sm border-y border-brand-stone">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-md">
              <h3 className="text-3xl font-serif font-bold text-brand-olive mb-4 italic">为什么选择领养？</h3>
              <p className="text-brand-muted font-light leading-relaxed">
                领养不仅仅是给流浪动物一个家，更是对自己生活的一种丰富。相比购买，领养能有效减少非法虐待和无序繁育。
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              {[
                { label: '领养数', value: '1,240+' },
                { label: '救助点', value: '45' },
                { label: '志愿者', value: '3,000+' }
              ].map(stat => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-serif font-bold text-brand-heading">{stat.value}</div>
                  <div className="text-[10px] font-bold text-brand-clay uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <PetGrid />

        <div className="bg-brand-olive py-40 overflow-hidden relative">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-black/5 -skew-x-12 translate-x-1/2" />
          
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight italic">
                  想知道哪种宠物 <br />
                  <span className="text-brand-clay italic">最懂你的心？</span>
                </h2>
                <p className="text-white/60 text-lg font-light mb-12 max-w-lg leading-relaxed">
                  点击右侧的智能匹配系统，通过几个简单的问题，我们的 AI 将为您分析生活习惯并推荐契合的伙伴。
                </p>
                <div className="flex items-center gap-6">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="w-12 h-12 rounded-full border-4 border-brand-olive-dark overflow-hidden bg-brand-stone">
                        <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" className="opacity-80" />
                      </div>
                    ))}
                  </div>
                  <div className="text-white/50 text-xs italic font-medium tracking-wide uppercase">已有 1,240+ 领养者在这里相遇</div>
                </div>
              </div>
              
              <PetMatcher />
            </div>
          </div>
        </div>

        <section className="bg-brand-cream py-32 border-t border-brand-stone">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-serif font-bold text-brand-heading mb-16 italic underline decoration-brand-stone underline-offset-8">领养流程</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { title: '在线挑选', desc: '挑选投缘的伙伴' },
                { title: '填写申请', desc: '开启缘分第一步' },
                { title: '线下面谈', desc: '深度沟通与评估' },
                { title: '迎接回家', desc: '开启幸福新篇章' }
              ].map((step, i) => (
                <div key={i} className="p-10 bg-white rounded-[32px] border border-brand-stone relative group hover:border-brand-olive transition-all">
                  <div className="text-5xl font-serif font-black text-brand-olive/5 absolute top-4 left-4 group-hover:text-brand-olive/10 transition-colors">{i + 1}</div>
                  <h4 className="text-lg font-bold text-brand-heading mb-2 relative z-10">{step.title}</h4>
                  <p className="text-sm text-brand-muted font-light relative z-10 italic">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-brand-heading text-white py-24 px-4 overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20 mb-24 relative z-10">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-brand-olive rounded-full flex items-center justify-center text-white">
                <Heart size={16} fill="currentColor" />
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight">PetHaven</span>
            </div>
            <p className="text-white/40 font-light max-w-sm leading-relaxed italic">
              PetHaven 致力于寻找那些渴望陪伴的灵魂，通过专业且有温度的服务，为您牵线命中注定的缘分。
            </p>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 mb-8">平台导航</h4>
            <ul className="space-y-4 text-sm text-white/50 font-medium tracking-wide">
              <li><a href="#" className="hover:text-brand-clay transition-colors">寻找伙伴</a></li>
              <li><a href="#" className="hover:text-brand-clay transition-colors">成功故事</a></li>
              <li><a href="#" className="hover:text-brand-clay transition-colors">领养指南</a></li>
              <li><a href="#" className="hover:text-brand-clay transition-colors">联系我们</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 mb-8">联络信息</h4>
            <div className="text-sm text-white/50 font-medium tracking-wide leading-relaxed italic">
              上海市静安区延安中路 <br />
              阳光里救助中心 3楼 <br /><br />
              hello@pethaven.foundation <br />
              021-PETHAVEN
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-bold uppercase tracking-[0.3em] text-white/20">
          <div>© 2024 PETHAVEN FOUNDATION. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">隐私政策</a>
            <a href="#" className="hover:text-white transition-colors">领养协议</a>
            <a href="#" className="hover:text-white transition-colors">沪ICP备20230000号</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

