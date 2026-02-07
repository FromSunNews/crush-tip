export interface PersonalityOption {
  id: string;
  icon: string;
  color: string;
}

export const PERSONALITIES: PersonalityOption[] = [
  {
    id: 'playful',
    icon: 'happy-outline',
    color: '#FF6B6B',
  },
  {
    id: 'shy',
    icon: 'flower-outline',
    color: '#FFB6C1',
  },
  {
    id: 'confident',
    icon: 'flash-outline',
    color: '#4ECDC4',
  },
  {
    id: 'romantic',
    icon: 'heart-outline',
    color: '#C77DFF',
  },
];
