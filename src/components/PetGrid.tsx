import { useState, useMemo } from 'react';
import { MOCK_PETS } from '../constants';
import PetCard from './PetCard';
import { Filter } from 'lucide-react';

export default function PetGrid() {
  const [filter, setFilter] = useState<'all'|'dog'|'cat'|'rabbit'>('all');

  const filteredPets = useMemo(() => {
    return filter === 'all' ? MOCK_PETS : MOCK_PETS.filter(p => p.type === filter);
  }, [filter]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-20" id="pets">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4 italic">等待领养的伙伴</h2>
          <p className="text-stone-500 font-light leading-relaxed">
            我们这里的每一个小动物都经过了严格的健康检查和行为评估，只为能与您顺利开启新的生活旅程。
          </p>
        </div>

        <div className="flex items-center gap-2 p-1 bg-white rounded-full border border-brand-stone shadow-sm">
          {(['all', 'dog', 'cat', 'rabbit'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                filter === type 
                  ? 'bg-brand-cream border border-brand-olive text-brand-olive' 
                  : 'text-brand-muted hover:text-brand-olive border border-transparent'
              }`}
            >
              {type === 'all' ? '全部' : type === 'dog' ? '狗狗' : type === 'cat' ? '猫咪' : '兔子'}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPets.map((pet, i) => (
          <PetCard key={pet.id} pet={pet} index={i} />
        ))}
      </div>

      {filteredPets.length === 0 && (
        <div className="text-center py-20 border-2 border-dashed border-stone-200 rounded-[2rem]">
          <p className="text-stone-400 italic">暂时没有匹配的小可爱，您可以试试其他分类</p>
        </div>
      )}
    </section>
  );
}
