import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserProfile } from '@/types';

const KEYS = {
  USER_ID: 'crush_tip_user_id',
  USER_PROFILE: 'crush_tip_user_profile',
  CONSENT_GIVEN: 'crush_tip_consent_given',
};

export async function getUserId(): Promise<string | null> {
  return AsyncStorage.getItem(KEYS.USER_ID);
}

export async function setUserId(id: string): Promise<void> {
  await AsyncStorage.setItem(KEYS.USER_ID, id);
}

export async function getUserProfile(): Promise<UserProfile | null> {
  const data = await AsyncStorage.getItem(KEYS.USER_PROFILE);
  return data ? JSON.parse(data) : null;
}

export async function setUserProfile(profile: UserProfile): Promise<void> {
  await AsyncStorage.setItem(KEYS.USER_PROFILE, JSON.stringify(profile));
}

export async function getConsentGiven(): Promise<boolean> {
  const val = await AsyncStorage.getItem(KEYS.CONSENT_GIVEN);
  return val === 'true';
}

export async function setConsentGiven(given: boolean): Promise<void> {
  await AsyncStorage.setItem(KEYS.CONSENT_GIVEN, given ? 'true' : 'false');
}

export async function clearAll(): Promise<void> {
  await AsyncStorage.multiRemove(Object.values(KEYS));
}
