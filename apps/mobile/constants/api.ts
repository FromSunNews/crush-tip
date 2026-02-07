import Constants from 'expo-constants';

const getDevBaseUrl = () => {
  const debuggerHost = Constants.expoConfig?.hostUri?.split(':')[0];
  if (debuggerHost) {
    return `http://${debuggerHost}:7777/api`;
  }
  // Fallback to localhost (works on iOS simulator)
  return 'http://localhost:7777/api';
};

export const API_BASE_URL = __DEV__
  ? getDevBaseUrl()
  : 'https://api.crushtip.com/api';

export const TIMEOUTS = {
  default: 10000,
  upload: 30000,
};
