export default {
  // Specify the root directory for your tests
  rootDir: "./",

  // Define test environment, for example, Node.js
  testEnvironment: "node",

  // Specify the directories that Jest should search for tests in
  testMatch: [
    "**/__tests__/**/*.js",
    "**/__tests__/**/*.mjs",
    "**/?(*.)+(spec|test).js",
    "**/?(*.)+(spec|test).mjs",
  ],

  // Transform files with ts-jest for TypeScript support
  transform: {
    "^.+\\.(js|mjs)$": "babel-jest",
    // "^.+\\.(ts|tsx)$": "ts-jest",
  },

  // Define module name mappings for import statements (if needed)
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },

  // Other Jest configurations as needed
};
