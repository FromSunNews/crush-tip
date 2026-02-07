export interface UserProfile {
  id: string;
  name?: string;
  age?: number;
  gender?: string;
  personality?: string;
  totalRequests: number;
  createdAt: string;
}

export interface AiSuggestion {
  tone: 'playful' | 'neutral' | 'sweet';
  text: string;
}

export interface SuggestionResponse {
  id: string;
  suggestions: AiSuggestion[];
  context: string;
  processingTime: number;
}

export interface CreateUserPayload {
  name?: string;
  age?: number;
  gender?: string;
  personality?: string;
}
