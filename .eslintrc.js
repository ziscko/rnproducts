module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        destructuredArrayPattern: 'all',
      },
    ],
    'no-unused-vars': 'off',

    'react/react-in-jsx-scope': 'off',
    'react-native/no-unused-styles': 'warn',
    'react-native/no-inline-styles': 'warn',

    'no-console': 'warn',
    eqeqeq: ['error', 'always'],
    curly: ['warn', 'all'],
  },
}
