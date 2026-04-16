import nextConfig from "eslint-config-next";

const config = [
  {
    ignores: ["components/ui/*.tsx"],
  },
  ...nextConfig,
  {
    rules: {
      // custom rules or overrides here
    },
  },
];

export default config;
