module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint', 'perfectionist'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/explicit-function-return-type':[
      'error',
      {
        allowExpressions: true
      }
    ],
    "perfectionist/sort-imports": [
      "error",
      {
        "type": "natural",
        "order": "asc",
        "groups": [
          "type",
          "react",
          "nanostores",
          ["builtin", "external"],
          "internal-type",
          "internal",
          ["parent-type", "sibling-type", "index-type"],
          ["parent", "sibling", "index"],
          "side-effect",
          "style",
          "object",
          "unknown"
        ],
        "custom-groups": {
          "value": {
            "react": ["react", "react-*"],
            "nanostores": "@nanostores/**"
          },
          "type": {
            "react": "react"
          }
        },
        "newlines-between": "never",
        "internal-pattern": [
          "@/components/**",
          "@/stores/**",
          "@/pages/**",
          "@/lib/**"
        ]
      }
    ]
  },
}
