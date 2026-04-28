export interface Pet {
  id: string;
  name: string;
  type: 'dog' | 'cat' | 'rabbit' | 'other';
  breed: string;
  age: string;
  gender: 'male' | 'female';
  description: string;
  image: string;
  tags: string[];
  status: 'available' | 'pending' | 'adopted';
}

export interface AdoptionApplication {
  petId: string;
  userName: string;
  userEmail: string;
  message: string;
}
