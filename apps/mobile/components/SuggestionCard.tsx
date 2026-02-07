import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from '@/components/themed-text';
import * as Clipboard from 'expo-clipboard';
import * as Haptics from 'expo-haptics';
import { useLanguage } from '@/i18n/LanguageContext';
import { AiSuggestion } from '@/types';

const TONE_STYLES: Record<string, { icon: string; color: string }> = {
  playful: { icon: 'happy-outline', color: '#FF6B6B' },
  neutral: { icon: 'chatbubble-outline', color: '#4ECDC4' },
  sweet: { icon: 'heart-outline', color: '#C77DFF' },
};

interface SuggestionCardProps {
  suggestion: AiSuggestion;
  index: number;
  onCopy?: (index: number) => void;
}

export function SuggestionCard({ suggestion, index, onCopy }: SuggestionCardProps) {
  const { t } = useLanguage();
  const style = TONE_STYLES[suggestion.tone] || TONE_STYLES.neutral;
  const toneLabel = t.tones[suggestion.tone as keyof typeof t.tones] || suggestion.tone;

  const handleCopy = async () => {
    await Clipboard.setStringAsync(suggestion.text);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    onCopy?.(index);
  };

  return (
    <TouchableOpacity
      style={[styles.card, { borderLeftColor: style.color }]}
      onPress={handleCopy}
      activeOpacity={0.7}
    >
      <View style={styles.header}>
        <Ionicons name={style.icon as any} size={22} color={style.color} />
        <ThemedText style={[styles.label, { color: style.color }]}>
          {toneLabel}
        </ThemedText>
      </View>
      <ThemedText style={styles.text}>{suggestion.text}</ThemedText>
      <ThemedText style={styles.hint}>{t.suggestion.tapToCopy}</ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 12,
    borderLeftWidth: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    marginBottom: 8,
  },
  hint: {
    fontSize: 12,
    color: '#999',
    textAlign: 'right',
  },
});
