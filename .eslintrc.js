module.exports = {
  env: {
    'jest/globals': true
  },
  root: true,
  extends: ['prettier', '@react-native-community'],
  plugins: ['jest'],
  rules: {
    semi: 0,
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'react/require-default-props': [0],
    curly: ['error', 'multi-line'],
    'react/default-props-match-prop-types': ['error'],
    'react/sort-prop-types': ['error'],
    'comma-dangle': ['error', 'never'],
    'no-shadow': [0]
  },
  settings: {
    'import/resolver': {
      'babel-module': {}
    }
  }
};
