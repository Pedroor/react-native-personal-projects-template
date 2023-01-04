const presets = ["module:metro-react-native-babel-preset"];
const plugins = [
  [
    "babel-plugin-root-import",
    {
      rootPathSuffix: "src",
    },
  ],
  [
    "module-resolver",
    {
      root: ["./src"],
      extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
      alias: {
        "@": "./src/",
      },
    },
  ],
  [
    "module:react-native-dotenv",
    {
      moduleName: "react-native-dotenv",
    },
  ],
  "react-native-reanimated/plugin",
];

module.exports = {
  presets,
  plugins,
};
