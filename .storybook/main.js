const { loadConfigFromFile, mergeConfig } = require("vite");
const path = require('path');

module.exports = {
  async viteFinal(config, { configType }) {
    config.resolve.dedupe = ["@storybook/client-api"];
    return config;
  },
  "stories": [
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/web-components",
  "core": {
    "builder": "@storybook/builder-vite"
  }
}
