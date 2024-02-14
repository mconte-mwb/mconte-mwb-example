module.exports = function (api) {
  api.cache(true);
  return {
    plugins: ['@babel/plugin-proposal-export-namespace-from', 'react-native-reanimated/plugin'],
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ['transform-remove-console'],
      },
    },
  };
};
