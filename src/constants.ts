import { Pet } from './types';

export const MOCK_PETS: Pet[] = [
  {
    id: '1',
    name: '豆豆 (Dou Dou)',
    type: 'dog',
    breed: '金毛寻回犬 (Golden Retriever)',
    age: '2岁',
    gender: 'male',
    description: '非常活泼友好，喜欢玩球，已经完成了全部疫苗接种。',
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=800',
    tags: ['活泼', '亲人', '已驱虫'],
    status: 'available'
  },
  {
    id: '2',
    name: '咪咪 (Mi Mi)',
    type: 'cat',
    breed: '英国短毛猫 (British Shorthair)',
    age: '1岁',
    gender: 'female',
    description: '性格文静，喜欢安静地呆在阳台晒太阳，是一个完美的陪伴者。',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800',
    tags: ['安静', '健康', '已绝育'],
    status: 'available'
  },
  {
    id: '3',
    name: '年糕 (Nian Gao)',
    type: 'rabbit',
    breed: '荷兰垂耳兔 (Holland Lop)',
    age: '6个月',
    gender: 'female',
    description: '非常可爱的小兔子，喜欢吃胡萝卜和干净的提摩西草。',
    image: 'https://images.unsplash.com/photo-1585110396000-c9fbedb0426d?auto=format&fit=crop&q=80&w=800',
    tags: ['呆萌', '草食', '软绵绵'],
    status: 'available'
  },
  {
    id: '4',
    name: '大黄 (Da Huang)',
    type: 'dog',
    breed: '中华田园犬 (CGC)',
    age: '3岁',
    gender: 'male',
    description: '忠诚可靠的看门好手，也非常听话，期待一个温暖的家。',
    image: 'https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?auto=format&fit=crop&q=80&w=800',
    tags: ['忠诚', '稳重', '体质好'],
    status: 'available'
  },
  {
    id: '5',
    name: '小黑 (Xiao Hei)',
    type: 'cat',
    breed: '孟买猫 (Bombay Cat)',
    age: '2岁',
    gender: 'male',
    description: '一身乌黑亮丽的毛发，性格稍微有点害羞，但熟了之后非常粘人。',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800',
    tags: ['粘人', '帅气', '已接种'],
    status: 'available'
  }
];
