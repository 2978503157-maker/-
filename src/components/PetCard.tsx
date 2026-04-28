import { memo } from 'react';
import { Pet } from '../types';
import { motion } from 'motion/react';
import { MapPin, Info, Heart } from 'lucide-react';

interface PetCardProps {
  pet: Pet;
  index: number;
}

export default memo(function PetCard({ pet, index }: PetCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white rounded-[32px] overflow-hidden border border-brand-stone shadow-sm hover:shadow-xl transition-all duration-500"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-brand-stone">
        <img 
          src={pet.image} 
          alt={pet.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4">
          <div className="bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-brand-olive">
            {pet.breed}
          </div>
        </div>
        <div className="absolute bottom-4 left-4 flex gap-2">
          {pet.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold rounded-full uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="p-8">
        <div className="flex justify-between items-baseline mb-4">
          <h3 className="text-2xl font-serif text-brand-heading">{pet.name}</h3>
          <span className="text-xs font-bold text-brand-clay uppercase tracking-widest">{pet.age}</span>
        </div>
        
        <p className="text-sm text-brand-muted line-clamp-2 mb-8 font-light leading-relaxed italic">
          "{pet.description}"
        </p>

        <div className="flex items-center justify-between pt-6 border-t border-brand-cream">
          <div className="flex items-center gap-1 text-brand-clay font-semibold">
            <MapPin size={12} />
            <span className="text-[10px] uppercase tracking-widest">上海, 静安</span>
          </div>
          <button className="text-sm font-bold text-brand-olive underline underline-offset-4 hover:text-brand-clay transition-colors">
            查看详情
          </button>
        </div>
      </div>
    </motion.div>
  );
});

function ArrowRight({ size, className }: { size?: number, className?: string }) {
  return (
    <svg 
      width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" 
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" 
      className={className}
    >
      <path d="M5 12h14m-7-7 7 7-7 7"/>
    </svg>
  );
}
