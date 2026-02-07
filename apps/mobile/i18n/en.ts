import type { Dictionary } from './vi';

export const en: Dictionary = {
  common: {
    continue: 'Continue',
    error: 'Error',
  },
  onboarding: {
    step1: {
      title: "What's your name?",
      subtitle: 'So the AI can understand you better!',
      placeholder: 'Enter your name...',
    },
    step2: {
      title: 'Age & Gender',
      subtitle: 'Helps AI create better suggestions',
      agePlaceholder: 'Your age (e.g. 22)',
      genders: {
        male: 'Male',
        female: 'Female',
        other: 'Other',
      },
    },
    step3: {
      title: 'Your personality?',
      subtitle: 'Pick the style that fits you best',
      creating: 'Creating...',
      start: "Let's go!",
      errorMessage: 'Could not create account. Please try again.',
    },
  },
  personalities: {
    playful: { label: 'Playful', description: 'Funny, loves to tease' },
    shy: { label: 'Shy', description: 'Gentle, quiet type' },
    confident: { label: 'Confident', description: 'Bold, takes the lead' },
    romantic: { label: 'Romantic', description: 'Sweet, shows emotions' },
  },
  home: {
    tagline: 'Message suggestions for your crush',
    permissionTitle: 'Permission needed',
    permissionMessage: 'Please allow access to your photo library',
    uploadTitle: 'Upload a chat screenshot',
    uploadHint: 'Pick a screenshot of your conversation with your crush',
    submitButton: 'Suggest for me!',
    disclaimer: 'Your photos are processed securely and not stored long-term',
    errorMessage: 'Could not generate suggestions. Please try again.',
  },
  result: {
    title: '3 suggestions for you',
    contextLabel: 'Context:',
    tryAgain: 'Try with another photo',
    copied: 'Copied!',
    copiedMessage: 'Suggestion copied to clipboard. Good luck!',
  },
  tones: {
    playful: 'Playful',
    neutral: 'Natural',
    sweet: 'Sweet',
  },
  suggestion: {
    tapToCopy: 'Tap to copy',
  },
  loading: {
    messages: [
      'Reading the conversation...',
      'AI is thinking...',
      'Creating suggestions for you...',
      'Almost done...',
      'Picking the sweetest words...',
      'Countdown 3... 2... 1...',
    ],
    subMessage: 'Usually takes about 2-3 seconds',
  },
  setup: {
    title: 'Quick Setup',
    subtitle: 'Set up CrushTip for faster access',
    step1Title: 'Enable AssistiveTouch',
    step1Desc: 'Go to Settings > Accessibility > Touch > AssistiveTouch > ON. Set "Single-Tap" to Screenshot.',
    step2Title: 'Screenshot & Share',
    step2Desc: 'Take a screenshot of the chat > Tap the preview in the bottom-left > Tap Share > Choose CrushTip.',
    step3Title: 'Get Suggestions',
    step3Desc: 'CrushTip will automatically open and analyze the chat screenshot, then give you message suggestions!',
    done: 'Got it!',
  },
};
