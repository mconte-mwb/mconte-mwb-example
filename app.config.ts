import 'ts-node/register'; // Add this to import TypeScript files

import { type ConfigContext, type ExpoConfig } from 'expo/config';

const baseIdentifier = 'com.mconte.mwb.example';

/**
 * increment `version.version` to allow a new Apple Store submission
 * increment `version.versionCode` to allow a new Play Store submission
 */
const version = {
  version: '1.0.0',
  versionCode: 1,
};

/**
 * @see https://docs.expo.dev/workflow/configuration/#configuration-resolution-rules
 */
export default function getExpoAppConfig({ config }: ConfigContext): ExpoConfig {
  config.version = version.version;
  config.android!.versionCode = version.versionCode;

  config.android = Object.assign({}, config.android, { package: baseIdentifier });

  config.ios = Object.assign({}, config.ios, { bundleIdentifier: baseIdentifier });

  return config as ExpoConfig;
}
