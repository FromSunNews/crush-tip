import { createContext, useContext, useState, ReactNode } from 'react';

interface OnboardingData {
  name: string;
  age: number | undefined;
  gender: string;
  personality: string;
}

interface OnboardingContextType {
  data: OnboardingData;
  setName: (name: string) => void;
  setAge: (age: number | undefined) => void;
  setGender: (gender: string) => void;
  setPersonality: (personality: string) => void;
}

const OnboardingContext = createContext<OnboardingContextType | null>(null);

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<OnboardingData>({
    name: '',
    age: undefined,
    gender: '',
    personality: '',
  });

  return (
    <OnboardingContext.Provider
      value={{
        data,
        setName: (name) => setData((prev) => ({ ...prev, name })),
        setAge: (age) => setData((prev) => ({ ...prev, age })),
        setGender: (gender) => setData((prev) => ({ ...prev, gender })),
        setPersonality: (personality) => setData((prev) => ({ ...prev, personality })),
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  const context = useContext(OnboardingContext);
  if (!context) throw new Error('useOnboarding must be used within OnboardingProvider');
  return context;
}
