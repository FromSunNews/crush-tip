import type { Dictionary } from './vi';

export const en: Dictionary = {
  nav: {
    logo: 'CrushTip',
    features: 'Features',
    howItWorks: 'How It Works',
    testimonials: 'Reviews',
    support: 'Support',
    cta: 'Get the app',
  },
  hero: {
    badge: 'v2.0 Now Available',
    title: 'AI suggests messages\nfor you in 3 seconds.',
    subtitle:
      "Stop staring at your screen. Screenshot your chat, and AI will suggest 3 replies in 3 different tones. Simple, fast, and effective!",
    cta_primary: 'Get the free app',
    cta_secondary: 'See how it works',
  },
  phoneMockup: {
    incomingMessage: 'Are you free tonight?',
    suggestionsTitle: '3 suggestions for you:',
    suggestions: [
      { icon: 'smile-plus', label: 'Playful', text: "Sure! Where are we going?", color: 'playful' },
      { icon: 'smile', label: 'Natural', text: 'Yeah, do you have any plans?', color: 'cool' },
      { icon: 'heart', label: 'Sweet', text: "I'm free, been wanting to see you", color: 'romantic' },
    ],
  },
  metrics: {
    users: { value: '50K', label: 'Happy Users' },
    tones: { value: '3', label: 'Reply Tones' },
    rating: { value: '4.9', label: 'App Store Rating' },
    speed: { value: '3s', label: 'Response Time' },
  },
  problemSection: {
    title: 'Stop overthinking your texts.',
    subtitle:
      'CrushTip brings all your reply suggestions into one place. Screenshot your chat and let AI handle the rest.',
  },
  features: {
    title: 'Key Features',
    subtitle: 'Designed for Gen Z',
  },
  featuresList: [
    {
      icon: 'sparkles',
      title: '3 reply styles',
      description: 'Playful, natural, sweet — always a style that fits you.',
      color: '#FF6B6B',
    },
    {
      icon: 'globe',
      title: 'Understands your culture',
      description: 'AI trained to understand the language and texting culture of Gen Z.',
      color: '#4ECDC4',
    },
    {
      icon: 'zap',
      title: 'Fast in 3 seconds',
      description: 'Get suggestions instantly, no waiting around.',
      color: '#C77DFF',
    },
  ],
  howItWorks: {
    title: 'How It Works',
    subtitle: 'Just 3 simple steps to get the perfect reply',
    stepLabel: 'Step',
  },
  steps: [
    {
      step: 1,
      icon: 'camera',
      title: 'Take a screenshot',
      description: 'Screenshot the conversation with your crush.',
    },
    {
      step: 2,
      icon: 'brain-circuit',
      title: 'AI analyzes',
      description: 'AI reads the context and creates 3 reply suggestions in seconds.',
    },
    {
      step: 3,
      icon: 'send',
      title: 'Pick & send',
      description: 'Choose the best reply, copy it, and send it to your crush!',
    },
  ],
  toneStyles: {
    badge: 'New Feature',
    title: '3 reply tones for\nevery mood.',
    subtitle:
      'Discover 3 different reply styles. Text your crush confidently with the tone that fits you best.',
    tones: [
      { name: 'Playful', icon: 'smile-plus', example: "Sure! Where are we going?", color: '#FF6B6B' },
      { name: 'Natural', icon: 'smile', example: 'Yeah, do you have any plans?', color: '#4ECDC4' },
      { name: 'Sweet', icon: 'heart', example: "I'm free, been wanting to see you", color: '#C77DFF' },
    ],
  },
  cultureFeature: {
    title: 'Understands your texting culture',
    description:
      'AI is trained to understand the language, style, and texting culture of Gen Z. Every suggestion feels natural, not robotic.',
    badge: 'Gets Gen Z',
  },
  speedFeature: {
    title: 'Instant suggestions in 3 seconds',
    description:
      "No more waiting. Get AI suggestions instantly when you need the perfect reply.",
    pushNotifications: 'Instant replies',
  },
  testimonials: {
    title: 'User Stories',
    subtitle: 'Thousands have succeeded with CrushTip',
    ageLabel: 'y/o',
  },
  testimonialsList: [
    {
      name: 'Minh Anh',
      age: 22,
      avatar: 'user-round',
      quote:
        'CrushTip makes me more confident texting my crush. The AI suggestions feel so natural!',
      rating: 5,
    },
    {
      name: 'Duc Huy',
      age: 24,
      avatar: 'user-round',
      quote:
        'I used to spend hours drafting texts. Now I get 3 great options in just 3 seconds!',
      rating: 5,
    },
  ],
  cta: {
    title: 'Ready to win over\nyour crush?',
    subtitle: 'Get CrushTip now and never run out of reply ideas again!',
    button: 'Get the free app',
  },
  footer: {
    copyright: '© 2025 CrushTip. Made with love in Vietnam.',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    contact: 'Contact',
    product: 'Product',
    company: 'Company',
    contactInfo: 'Contact',
    featuresLink: 'Features',
    toneStyles: 'Tone Styles',
    pricing: 'Pricing',
    howItWorksLink: 'How It Works',
    aboutUs: 'About Us',
    blog: 'Blog',
    email: 'support@crushtip.app',
  },
  metadata: {
    title: 'CrushTip - Your AI texting assistant for your crush',
    description:
      'AI suggests 3 replies (playful, natural, sweet) from your chat screenshot. Made for Gen Z.',
  },
};
