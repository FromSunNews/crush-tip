import { SYSTEM_PROMPT } from './system-prompt';
import { SYSTEM_PROMPT_EN } from './system-prompt-en';

export type Language = 'vi' | 'en';

export function getSystemPrompt(lang: Language): string {
  return lang === 'en' ? SYSTEM_PROMPT_EN : SYSTEM_PROMPT;
}

export function getUserMessage(
  lang: Language,
  personality?: string,
  age?: number,
  gender?: string,
): string {
  if (lang === 'en') {
    let msg = 'Analyze the chat in the screenshot and suggest 3 replies.';
    if (personality) msg += ` User personality: ${personality}.`;
    if (age) msg += ` Age: ${age}.`;
    if (gender) msg += ` Gender: ${gender}.`;
    return msg;
  }

  let msg = 'Hãy phân tích cuộc trò chuyện trong ảnh và đề xuất 3 câu trả lời.';
  if (personality) msg += ` Tính cách người dùng: ${personality}.`;
  if (age) msg += ` Tuổi: ${age}.`;
  if (gender) msg += ` Giới tính: ${gender}.`;
  return msg;
}
