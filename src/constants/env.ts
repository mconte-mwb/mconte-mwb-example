import Constants, { ExecutionEnvironment } from 'expo-constants';
import { Platform } from 'react-native';

const ExpoConfigVersion = Constants.expoConfig?.version;
const ExpoClientVersion = Constants.manifest2?.extra?.expoClient?.version;

const Env = {
  EXPO_PUBLIC_UX_CAM_APP_KEY: process.env.EXPO_PUBLIC_UX_CAM_APP_KEY,
  IS_ANDROID: Platform.OS === 'android',
  IS_EXPO_GO: Constants.executionEnvironment === ExecutionEnvironment.StoreClient,
  IS_IOS: Platform.OS === 'ios',
  IS_WEB: Platform.OS === 'web',
  STORYBOOK_ENABLED: process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === 'true',
  VERSION: ExpoConfigVersion ?? ExpoClientVersion ?? 'UNKNOWN',
};

export { Env };
