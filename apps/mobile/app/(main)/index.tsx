import { useState, useEffect, useCallback, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useShareIntentContext } from 'expo-share-intent';
import { ThemedText } from '@/components/themed-text';
import { LoadingAnimation } from '@/components/LoadingAnimation';
import { useLanguage } from '@/i18n/LanguageContext';
import { generateSuggestions } from '@/services/api';
import { getUserId, getUserProfile } from '@/utils/storage';

export default function HomeScreen() {
  const router = useRouter();
  const { language, t } = useLanguage();
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { hasShareIntent, shareIntent, resetShareIntent } = useShareIntentContext();
  const shareHandled = useRef(false);

  const submitImage = useCallback(async (uri: string) => {
    setLoading(true);

    try {
      const userId = await getUserId();
      if (!userId) {
        router.replace('/onboarding/step1');
        return;
      }

      const profile = await getUserProfile();
      const result = await generateSuggestions(
        uri,
        userId,
        profile?.personality,
        profile?.age,
        profile?.gender,
        language,
      );

      router.push({
        pathname: '/(main)/result',
        params: {
          suggestionId: result.id,
          suggestions: JSON.stringify(result.suggestions),
          context: result.context,
          processingTime: String(result.processingTime),
        },
      });
    } catch (error: any) {
      Alert.alert(
        t.common.error,
        error?.response?.data?.message || t.home.errorMessage,
      );
    } finally {
      setLoading(false);
      setImageUri(null);
    }
  }, [language, router, t]);

  // Handle incoming share intent
  useEffect(() => {
    if (hasShareIntent && shareIntent.files?.[0]?.path && !shareHandled.current) {
      shareHandled.current = true;
      const filePath = shareIntent.files[0].path;
      setImageUri(filePath);
      resetShareIntent();
      submitImage(filePath);
    }
    if (!hasShareIntent) {
      shareHandled.current = false;
    }
  }, [hasShareIntent, shareIntent, resetShareIntent, submitImage]);

  const pickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      Alert.alert(t.home.permissionTitle, t.home.permissionMessage);
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      quality: 0.8,
      allowsEditing: false,
    });

    if (!result.canceled && result.assets[0]) {
      setImageUri(result.assets[0].uri);
    }
  };

  const handleSubmit = async () => {
    if (!imageUri) return;
    await submitImage(imageUri);
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.safe}>
        <LoadingAnimation />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View style={styles.header}>
          <ThemedText style={styles.logo}>CrushTip</ThemedText>
          <ThemedText style={styles.tagline}>
            {t.home.tagline}
          </ThemedText>
          <TouchableOpacity
            style={styles.setupBtn}
            onPress={() => router.push('/(main)/setup')}
          >
            <Ionicons name="information-circle-outline" size={24} color="#999" />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          {imageUri ? (
            <View style={styles.previewContainer}>
              <Image source={{ uri: imageUri }} style={styles.preview} />
              <TouchableOpacity style={styles.removeBtn} onPress={() => setImageUri(null)}>
                <Ionicons name="close" size={18} color="#fff" />
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity style={styles.uploadArea} onPress={pickImage}>
              <View style={styles.uploadIconContainer}>
                <Ionicons name="camera-outline" size={40} color="#FF6B6B" />
              </View>
              <ThemedText style={styles.uploadTitle}>{t.home.uploadTitle}</ThemedText>
              <ThemedText style={styles.uploadHint}>
                {t.home.uploadHint}
              </ThemedText>
            </TouchableOpacity>
          )}
        </View>

        <TouchableOpacity
          style={[styles.button, !imageUri && styles.buttonDisabled]}
          onPress={handleSubmit}
          disabled={!imageUri}
        >
          <Ionicons name="bulb-outline" size={20} color="#fff" style={{ marginRight: 8 }} />
          <ThemedText style={styles.buttonText}>{t.home.submitButton}</ThemedText>
        </TouchableOpacity>

        <ThemedText style={styles.disclaimer}>
          {t.home.disclaimer}
        </ThemedText>
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
  header: {
    alignItems: 'center',
    marginBottom: 32,
    position: 'relative',
  },
  logo: {
    fontSize: 32,
    fontWeight: '800',
    color: '#FF6B6B',
    marginBottom: 4,
  },
  tagline: {
    fontSize: 14,
    color: '#999',
  },
  setupBtn: {
    position: 'absolute',
    right: 0,
    top: 4,
    padding: 4,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  uploadArea: {
    borderWidth: 2,
    borderColor: '#FFB6C1',
    borderStyle: 'dashed',
    borderRadius: 20,
    padding: 40,
    alignItems: 'center',
    backgroundColor: '#FFF5F5',
  },
  uploadIconContainer: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#FFF0F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  uploadTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  uploadHint: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
  },
  previewContainer: {
    borderRadius: 20,
    overflow: 'hidden',
    position: 'relative',
  },
  preview: {
    width: '100%',
    height: 300,
    borderRadius: 20,
    resizeMode: 'contain',
    backgroundColor: '#f0f0f0',
  },
  removeBtn: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FF6B6B',
    borderRadius: 16,
    padding: 18,
    alignItems: 'center',
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  disclaimer: {
    fontSize: 11,
    color: '#bbb',
    textAlign: 'center',
    marginTop: 12,
  },
});
