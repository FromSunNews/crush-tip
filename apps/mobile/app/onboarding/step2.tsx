import { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from '@/components/themed-text';
import { ProgressIndicator } from '@/components/ProgressIndicator';
import { useOnboarding } from './_context';
import { useLanguage } from '@/i18n/LanguageContext';

const GENDER_IDS = [
  { id: 'male', icon: 'male' as const },
  { id: 'female', icon: 'female' as const },
  { id: 'other', icon: 'people-outline' as const },
] as const;

export default function Step2() {
  const router = useRouter();
  const { data, setAge, setGender } = useOnboarding();
  const { t } = useLanguage();
  const [age, setLocalAge] = useState(data.age ? String(data.age) : '');
  const [gender, setLocalGender] = useState(data.gender);

  const handleNext = () => {
    const ageNum = parseInt(age, 10);
    if (ageNum >= 18 && ageNum <= 99) setAge(ageNum);
    setGender(gender);
    router.push('/onboarding/step3');
  };

  const isValid = age && parseInt(age, 10) >= 18 && gender;

  return (
    <SafeAreaView style={styles.safe}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <ProgressIndicator currentStep={2} totalSteps={3} />

          <View style={styles.content}>
            <View style={styles.iconContainer}>
              <Ionicons name="star-outline" size={48} color="#FF6B6B" />
            </View>
            <ThemedText style={styles.title}>{t.onboarding.step2.title}</ThemedText>
            <ThemedText style={styles.subtitle}>
              {t.onboarding.step2.subtitle}
            </ThemedText>

            <TextInput
              style={styles.input}
              placeholder={t.onboarding.step2.agePlaceholder}
              placeholderTextColor="#999"
              value={age}
              onChangeText={setLocalAge}
              keyboardType="number-pad"
              maxLength={2}
            />

            <View style={styles.genderRow}>
              {GENDER_IDS.map((g) => (
                <TouchableOpacity
                  key={g.id}
                  style={[
                    styles.genderChip,
                    gender === g.id && styles.genderChipActive,
                  ]}
                  onPress={() => setLocalGender(g.id)}
                >
                  <Ionicons
                    name={g.icon}
                    size={20}
                    color={gender === g.id ? '#FF6B6B' : '#666'}
                  />
                  <ThemedText
                    style={[
                      styles.genderLabel,
                      gender === g.id && styles.genderLabelActive,
                    ]}
                  >
                    {t.onboarding.step2.genders[g.id]}
                  </ThemedText>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <TouchableOpacity
            style={[styles.button, !isValid && styles.buttonDisabled]}
            onPress={handleNext}
            disabled={!isValid}
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
    marginBottom: 24,
  },
  genderRow: {
    flexDirection: 'row',
    gap: 12,
  },
  genderChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#E0E0E0',
    backgroundColor: '#fff',
  },
  genderChipActive: {
    borderColor: '#FF6B6B',
    backgroundColor: '#FFF0F0',
  },
  genderLabel: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
  genderLabelActive: {
    color: '#FF6B6B',
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
