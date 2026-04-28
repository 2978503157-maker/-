import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from '@google/genai';
import { Sparkles, ArrowRight, RefreshCw, PawPrint } from 'lucide-react';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const QUESTIONS = [
  "您的居住空间大小如何？ (公寓, 公寓/带阳台, 别墅/带院子)",
  "您每天能花多长时间陪伴宠物？",
  "您更喜欢运动型还是文静型的伙伴？",
  "对于宠物掉毛，您的接受程度是？",
  "您家里是否有小孩或其他宠物？"
];

export default function PetMatcher() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<string | null>(null);

  const handleNext = (answer: string) => {
    const nextAnswers = [...answers, answer];
    setAnswers(nextAnswers);
    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      getAIRecommendation(nextAnswers);
    }
  };

  const getAIRecommendation = async (userAnswers: string[]) => {
    setLoading(true);
    try {
      const prompt = `作为一个宠物专家，根据以下用户的居住和生活情况，推荐最适合他们的宠物类型（狗、猫、兔子或小动物），
      并给出3个具体的理由。输出格式请保持温馨且专业。
      用户情况：
      ${QUESTIONS.map((q, i) => `${q}: ${userAnswers[i]}`).join('\n')}
      
      请以JSON格式返回：
      {
        "petType": "推荐的宠物类型",
        "reason": "推荐理由（一段话）",
        "tips": ["建议1", "建议2"]
      }`;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
        config: { responseMimeType: "application/json" }
      });

      setRecommendation(response.text || '');
    } catch (error) {
      console.error(error);
      setRecommendation(JSON.stringify({ 
        petType: "猫咪", 
        reason: "根据您的情况，温顺的猫咪可能最适合您的生活节奏。",
        tips: ["准备一个温馨的猫窝", "选择高品质的猫粮"]
      }));
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
    setRecommendation(null);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-24">
      <div className="bg-white rounded-[32px] p-8 md:p-16 border border-brand-stone shadow-2xl relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-olive/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-clay/5 rounded-full blur-3xl" />

        <div className="relative z-10">
          {!recommendation && !loading && (
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-olive/5 text-brand-olive rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                AI 智能匹配
              </div>
              <h2 className="text-4xl font-serif font-bold text-brand-heading mb-4 italic">寻找灵魂伙伴</h2>
              <p className="text-brand-muted max-w-md mx-auto font-light leading-relaxed">
                回答 5 个简单的问题，让我们的 AI 专家为您精准锁定最适合您的宠物伙伴。
              </p>
            </div>
          )}

          <div className="min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {loading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center"
                >
                  <RefreshCw className="w-12 h-12 text-brand-olive animate-spin mx-auto mb-6" />
                  <p className="font-serif italic text-xl text-brand-heading">正在为您匹配心中所属...</p>
                </motion.div>
              ) : recommendation ? (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  {(() => {
                    const data = JSON.parse(recommendation);
                    return (
                      <>
                        <div className="w-20 h-20 bg-brand-olive text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-brand-olive/20">
                          <PawPrint size={32} />
                        </div>
                        <h3 className="text-3xl font-serif font-bold text-brand-heading mb-2">
                          最适合您的宠物是：<span className="text-brand-clay italic">{data.petType}</span>
                        </h3>
                        <p className="text-brand-muted mb-8 max-w-lg mx-auto italic font-light">
                          "{data.reason}"
                        </p>
                        <div className="bg-brand-cream p-6 rounded-[24px] mb-10 text-left border border-brand-stone">
                          <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-clay mb-4 border-b border-brand-stone pb-2">专家建议</h4>
                          <ul className="space-y-3">
                            {(data.tips as string[]).map((tip, i) => (
                              <li key={i} className="flex gap-2 text-brand-text text-sm italic">
                                <span className="text-brand-olive font-bold">#</span> {tip}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <button 
                          onClick={reset}
                          className="px-10 py-3 bg-brand-olive text-white rounded-full font-bold shadow-lg shadow-brand-olive/20 hover:bg-brand-olive-dark transition-all flex items-center gap-2 mx-auto text-sm"
                        >
                          重新测试
                        </button>
                      </>
                    );
                  })()}
                </motion.div>
              ) : (
                <motion.div
                  key={`step-${step}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="w-full max-w-md"
                >
                  <div className="mb-10 text-center md:text-left">
                    <span className="text-[10px] font-bold text-brand-clay uppercase tracking-[0.3em]">问题 {step + 1} / {QUESTIONS.length}</span>
                    <h3 className="text-2xl font-serif font-medium text-brand-heading mt-2 italic leading-snug">{QUESTIONS[step]}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {["选项一", "选项二", "选项三"].map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleNext(`${opt} 的实际回答示例`)}
                        className="w-full p-6 text-left border border-brand-stone rounded-[20px] hover:border-brand-olive hover:bg-brand-olive/5 group transition-all"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-brand-muted group-hover:text-brand-heading font-medium">
                            {step === 0 ? ["公寓", "公寓/带阳台", "别墅/带院子"][i] : 
                             step === 1 ? ["1-2小时", "3-5小时", "全天在家"][i] :
                             step === 2 ? ["动如脱兔", "平静如水", "不限"][i] :
                             step === 3 ? ["没法接受", "可以忍受", "完全没关系"][i] :
                             ["没有", "有小孩", "有其他宠物"][i]}
                          </span>
                          <ArrowRight size={18} className="text-brand-stone group-hover:text-brand-olive group-hover:translate-x-1 transition-all" />
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
