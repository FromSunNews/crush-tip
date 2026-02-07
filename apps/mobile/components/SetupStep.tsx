import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from '@/components/themed-text';

type Props = {
  step: number;
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  description: string;
};

export function SetupStep({ step, icon, title, description }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.stepBadge}>
        <ThemedText style={styles.stepNumber}>{step}</ThemedText>
      </View>
      <View style={styles.content}>
        <View style={styles.titleRow}>
          <Ionicons name={icon} size={20} color="#FF6B6B" style={styles.icon} />
          <ThemedText style={styles.title}>{title}</ThemedText>
        </View>
        <ThemedText style={styles.description}>{description}</ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 24,
    alignItems: 'flex-start',
  },
  stepBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#FF6B6B',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    marginTop: 2,
  },
  stepNumber: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },
  content: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  icon: {
    marginRight: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});
