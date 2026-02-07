import { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { useLanguage } from '@/i18n/LanguageContext';

export function LoadingAnimation() {
  const { t } = useLanguage();
  const messages = t.loading.messages;
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#FF6B6B" />
      <ThemedText style={styles.message}>{messages[messageIndex]}</ThemedText>
      <ThemedText style={styles.subMessage}>
        {t.loading.subMessage}
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    gap: 16,
  },
  message: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  subMessage: {
    fontSize: 14,
    color: '#999',
  },
});
