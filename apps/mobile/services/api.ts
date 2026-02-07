import axios from 'axios';
import { API_BASE_URL, TIMEOUTS } from '@/constants/api';
import { UserProfile, SuggestionResponse, CreateUserPayload } from '@/types';

const client = axios.create({
  baseURL: API_BASE_URL,
  timeout: TIMEOUTS.default,
});

if (__DEV__) {
  client.interceptors.response.use(
    (res) => {
      console.log(`✅ ${res.config.method?.toUpperCase()} ${res.config.url}`, res.status, res.data);
      return res;
    },
    (err) => {
      console.log(`❌ ${err.config?.method?.toUpperCase()} ${err.config?.url}`, err.response?.status, err.response?.data, err.message);
      return Promise.reject(err);
    },
  );
}

export async function createUser(payload: CreateUserPayload): Promise<UserProfile> {
  const { data } = await client.post<UserProfile>('/users', payload);
  return data;
}

export async function getUser(id: string): Promise<UserProfile> {
  const { data } = await client.get<UserProfile>(`/users/${id}`);
  return data;
}

export async function generateSuggestions(
  imageUri: string,
  userId: string,
  personality?: string,
  age?: number,
  gender?: string,
  language?: string,
): Promise<SuggestionResponse> {
  const formData = new FormData();

  const filename = imageUri.split('/').pop() || 'screenshot.jpg';
  const match = /\.(\w+)$/.exec(filename);
  const type = match ? `image/${match[1]}` : 'image/jpeg';

  formData.append('screenshot', {
    uri: imageUri,
    name: filename,
    type,
  } as any);
  formData.append('userId', userId);
  if (personality) formData.append('personality', personality);
  if (age) formData.append('age', String(age));
  if (gender) formData.append('gender', gender);
  if (language) formData.append('language', language);

  const { data } = await client.post<SuggestionResponse>(
    '/suggestions/with-screenshot',
    formData,
    {
      headers: { 'Content-Type': 'multipart/form-data' },
      timeout: TIMEOUTS.upload,
    },
  );
  return data;
}

export async function selectSuggestion(
  suggestionId: string,
  selectedIndex: number,
): Promise<void> {
  await client.patch(`/suggestions/${suggestionId}/select`, { selectedIndex });
}
