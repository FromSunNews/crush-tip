import { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from '@/components/themed-text';
import { ProgressIndicator } from '@/components/ProgressIndicator';
import { useOnboarding } from './_context';
import { useLanguage } from '@/i18n/LanguageContext';
import { PERSONALITIES } from '@/constants/personalities';
import { createUser } from '@/services/api';
import { setUserId, setUserProfile } from '@/utils/storage';

export default function Step3() {
  const router = useRouter();
  const { data, setPersonality } = useOnboarding();
  const { t } = useLanguage();
  const [selected, setSelected] = useState(data.personality);
  const [loading, setLoading] = useState(false);

  const handleFinish = async () => {
    if (!selected) return;
    setPersonality(selected);
    setLoading(true);

    try {
      const user = await createUser({
        name: data.name || undefined,
        age: data.age,
        gender: data.gender || undefined,
        personality: selected,
      });

      await setUserId(user.id);
      await setUserProfile(user);
      router.replace('/(main)');
    } catch (error) {
      Alert.alert(t.common.error, t.onboarding.step3.errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <ProgressIndicator currentStep={3} totalSteps={3} />

        <View style={styles.content}>
          <ThemedText style={styles.title}>{t.onboarding.step3.title}</ThemedText>
          <ThemedText style={styles.subtitle}>
            {t.onboarding.step3.subtitle}
          </ThemedText>

          <View style={styles.grid}>
            {PERSONALITIES.map((p) => {
              const pTexts = t.personalities[p.id as keyof typeof t.personalities];
              return (
                <TouchableOpacity
                  key={p.id}
                  style={[
                    styles.card,
                    { borderColor: p.color },
                    selected === p.id && { backgroundColor: p.color + '15' },
                  ]}
                  onPress={() => setSelected(p.id)}
                >
                  <View style={[styles.cardIconContainer, { backgroundColor: p.color + '15' }]}>
                    <Ionicons name={p.icon as any} size={28} color={p.color} />
                  </View>
                  <ThemedText style={[styles.cardLabel, { color: p.color }]}>
                    {pTexts.label}
                  </ThemedText>
                  <ThemedText style={styles.cardDesc}>{pTexts.description}</ThemedText>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <TouchableOpacity
          style={[styles.button, (!selected || loading) && styles.buttonDisabled]}
          onPress={handleFinish}
          disabled={!selected || loading}
        >
          <ThemedText style={styles.buttonText}>
            {loading ? t.onboarding.step3.creating : t.onboarding.step3.start}
          </ThemedText>
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
  container: {
    flex: 1,
    padding: 24,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 32,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'center',
  },
  card: {
    width: '47%',
    borderWidth: 2,
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  cardIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardLabel: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  cardDesc: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#FF6B6B',
    borderRadius: 16,
    padding: 18,
    alignItems: 'center',
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});
