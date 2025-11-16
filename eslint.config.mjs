import next from "eslint-config-next";

export default [
  {
    ignores: ["**/node_modules/**", ".next/**"],
  },
  ...next,
  {
    rules: {
      "react/jsx-key": ["warn", { checkFragmentShorthand: true }],
    },
  },
];
