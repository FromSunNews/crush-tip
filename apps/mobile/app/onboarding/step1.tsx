import { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from '@/components/themed-text';
import { ProgressIndicator } from '@/components/ProgressIndicator';
import { useOnboarding } from './_context';
import { useLanguage } from '@/i18n/LanguageContext';
import { TouchableOpacity } from 'react-native';

export default function Step1() {
  const router = useRouter();
  const { data, setName } = useOnboarding();
  const { t } = useLanguage();
  const [name, setLocalName] = useState(data.name);

  const handleNext = () => {
    setName(name.trim());
    router.push('/onboarding/step2');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <ProgressIndicator currentStep={1} totalSteps={3} />

          <View style={styles.content}>
            <View style={styles.iconContainer}>
              <Ionicons name="hand-left-outline" size={48} color="#FF6B6B" />
            </View>
            <ThemedText style={styles.title}>{t.onboarding.step1.title}</ThemedText>
            <ThemedText style={styles.subtitle}>
              {t.onboarding.step1.subtitle}
            </ThemedText>

            <TextInput
              style={styles.input}
              placeholder={t.onboarding.step1.placeholder}
              placeholderTextColor="#999"
              value={name}
              onChangeText={setLocalName}
              autoFocus
              maxLength={30}
            />
          </View>

          <TouchableOpacity
            style={[styles.button, !name.trim() && styles.buttonDisabled]}
            onPress={handleNext}
            disabled={!name.trim()}
          >
            <ThemedText style={styles.buttonText}>{t.common.continue}</ThemedText>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
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
    alignItems: 'center',
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FFF0F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 32,
  },
  input: {
    width: '100%',
    fontSize: 18,
    borderWidth: 2,
    borderColor: '#FFB6C1',
    borderRadius: 16,
    padding: 16,
    backgroundColor: '#fff',
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
