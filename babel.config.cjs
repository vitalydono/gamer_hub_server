module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current", // Use the current version of Node.js
        },
        modules: "auto", // Enable automatic module transformation
      },
    ],
    "@babel/preset-typescript", // Add this if you're using TypeScript
  ],
};
