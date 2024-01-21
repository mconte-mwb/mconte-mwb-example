import { getDefaultConfig } from 'expo/metro-config';

const config = getDefaultConfig(__dirname);

// TODO: by next link this seems to be required but I forgot to add and the project was starting anyway locally on ExpoGo
// @ts-expect-error this is the explained method in https://github.com/storybookjs/react-native/blob/next/MANUAL_SETUP.md
config.resolver.resolverMainFields.unshift('sbmodern');

module.exports = config;
