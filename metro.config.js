const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
  
const config = getDefaultConfig(__dirname);

// 1. Let Metro understand .mjs (so it picks up the native build paths)
config.resolver.sourceExts = [
  ...config.resolver.sourceExts,
  "mjs",
];

// 2. Alias any react-dom import to a RN-compatible target
config.resolver.extraNodeModules = {
  ...config.resolver.extraNodeModules,

  // whenever someone does `import ... from "react-dom"`
  "react-dom": require.resolve("react-native-web"),

  // whenever someone does `import ... from "react-dom/client"`
  "react-dom/client": require.resolve("react-native-web"),
};

  
module.exports = withNativeWind(config, { input: './global.css' });