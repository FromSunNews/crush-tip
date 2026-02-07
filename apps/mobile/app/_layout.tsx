import { useEffect, useState } from 'react';
import { Stack, useRouter, useSegments } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PaperProvider } from 'react-native-paper';
import { ShareIntentProvider } from 'expo-share-intent';
import { LanguageProvider } from '@/i18n/LanguageContext';
import { getUserId } from '@/utils/storage';
import 'react-native-reanimated';

const queryClient = new QueryClient();

export default function RootLayout() {
  const [isReady, setIsReady] = useState(false);
  const [hasUser, setHasUser] = useState(false);
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    async function checkAuth() {
      const userId = await getUserId();
      setHasUser(!!userId);
      setIsReady(true);
    }
    checkAuth();
  }, [segments]);

  useEffect(() => {
    if (!isReady) return;

    const inOnboarding = segments[0] === 'onboarding';

    if (!hasUser && !inOnboarding) {
      router.replace('/onboarding/step1');
    } else if (hasUser && inOnboarding) {
      router.replace('/(main)');
    }
  }, [isReady, hasUser, segments]);

  if (!isReady) return null;

  return (
    <ShareIntentProvider options={{ debug: __DEV__, resetOnBackground: true }}>
      <QueryClientProvider client={queryClient}>
        <PaperProvider>
          <LanguageProvider>
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="onboarding" />
              <Stack.Screen name="(main)" />
            </Stack>
            <StatusBar style="dark" />
          </LanguageProvider>
        </PaperProvider>
      </QueryClientProvider>
    </ShareIntentProvider>
  );
}
