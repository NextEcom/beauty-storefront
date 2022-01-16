import path from "path";
import webpack from "webpack";

const toPath = (_path) => path.join(process.cwd(), _path);

export default {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  // babel: async options => {
  //   options.presets.push("@emotion/babel-preset-css-prop");
  //   return options;
  // },
  webpackFinal: async (config) => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, "../"),
    ];
    config.resolve.alias = {
      ...config.resolve?.alias,
      "@emotion/core": toPath("node_modules/@emotion/react"),
      "@emotion/styled": toPath("node_modules/@emotion/styled"),
      "emotion-theming": toPath("node_modules/@emotion/react"),
      "@/components": toPath("src/components"),
      "@/styles": toPath("src/styles"),
      "@/pages": toPath("src/pages"),
    };
    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env.__NEXT_IMAGE_OPTS": JSON.stringify({
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          loader: "default",
        }),
      })
    );
    return config;
  },
};
export const core = {
  builder: "webpack5",
};
