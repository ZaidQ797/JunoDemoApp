module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@screens': './src/screens',
          '@components': './src/components',
          '@navigation': './src/navigation',
          '@redux': './src/redux',
          '@services': './src/services',
          '@slices': './src/redux/slices',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
