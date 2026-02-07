import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from '@/components/themed-text';
import { SetupStep } from '@/components/SetupStep';
import { useLanguage } from '@/i18n/LanguageContext';

export default function SetupScreen() {
  const router = useRouter();
  const { t } = useLanguage();

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <ThemedText style={styles.headerTitle}>{t.setup.title}</ThemedText>
        <View style={styles.backBtn} />
      </View>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <ThemedText style={styles.subtitle}>{t.setup.subtitle}</ThemedText>

        <View style={styles.stepsContainer}>
          <SetupStep
            step={1}
            icon="settings-outline"
            title={t.setup.step1Title}
            description={t.setup.step1Desc}
          />
          <SetupStep
            step={2}
            icon="share-outline"
            title={t.setup.step2Title}
            description={t.setup.step2Desc}
          />
          <SetupStep
            step={3}
            icon="bulb-outline"
            title={t.setup.step3Title}
            description={t.setup.step3Desc}
          />
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.doneBtn} onPress={() => router.back()}>
          <ThemedText style={styles.doneBtnText}>{t.setup.done}</ThemedText>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backBtn: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
  },
  scroll: {
    flex: 1,
  },
  content: {
    padding: 24,
  },
  subtitle: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    marginBottom: 32,
  },
  stepsContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  footer: {
    padding: 24,
  },
  doneBtn: {
    backgroundColor: '#FF6B6B',
    borderRadius: 16,
    padding: 18,
    alignItems: 'center',
  },
  doneBtnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});
