import { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from '@/components/themed-text';
import { SuggestionCard } from '@/components/SuggestionCard';
import { useLanguage } from '@/i18n/LanguageContext';
import { selectSuggestion } from '@/services/api';
import { AiSuggestion } from '@/types';

export default function ResultScreen() {
  const router = useRouter();
  const { t } = useLanguage();
  const params = useLocalSearchParams<{
    suggestionId: string;
    suggestions: string;
    context: string;
    processingTime: string;
  }>();

  const suggestions: AiSuggestion[] = JSON.parse(params.suggestions || '[]');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (index: number) => {
    setCopiedIndex(index);

    try {
      await selectSuggestion(params.suggestionId, index);
    } catch {
      // silently fail tracking
    }

    Alert.alert(t.result.copied, t.result.copiedMessage);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <View style={styles.titleRow}>
          <Ionicons name="bulb-outline" size={22} color="#FF6B6B" />
          <ThemedText style={styles.title}>{t.result.title}</ThemedText>
        </View>
        {params.processingTime && (
          <View style={styles.timeRow}>
            <Ionicons name="flash" size={14} color="#4ECDC4" />
            <ThemedText style={styles.time}>
              {parseFloat(params.processingTime).toFixed(1)}s
            </ThemedText>
          </View>
        )}
      </View>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
        {suggestions.map((suggestion, index) => (
          <SuggestionCard
            key={index}
            suggestion={suggestion}
            index={index}
            onCopy={handleCopy}
          />
        ))}

        {params.context && (
          <View style={styles.contextBox}>
            <ThemedText style={styles.contextLabel}>{t.result.contextLabel}</ThemedText>
            <ThemedText style={styles.contextText}>{params.context}</ThemedText>
          </View>
        )}
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.back()}
        >
          <ThemedText style={styles.buttonText}>{t.result.tryAgain}</ThemedText>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FFFAF9',
  },
  header: {
    padding: 24,
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#333',
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  time: {
    fontSize: 14,
    color: '#4ECDC4',
    fontWeight: '600',
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: 24,
    paddingTop: 8,
  },
  contextBox: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 16,
    marginTop: 8,
  },
  contextLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#999',
    marginBottom: 4,
  },
  contextText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  footer: {
    padding: 24,
    paddingTop: 12,
  },
  button: {
    backgroundColor: '#FF6B6B',
    borderRadius: 16,
    padding: 18,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});
