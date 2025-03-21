import antfu from '@antfu/eslint-config'

export default antfu({
  // From CJ: https://gist.github.com/w3cj/21b1f1b4857ecd13d076075a5c5aaf13/
  type: 'app',
  typescript: true,
  formatters: true,
  react: true,
  // Add Next.js specific configuration
  // extends: [
  //   'plugin:@next/next/recommended',
  //   'plugin:@next/next/core-web-vitals',
  //   'next/typescript',
  // ],
  rules: {
    'ts/no-redeclare': 'off',
    'ts/consistent-type-definitions': ['error', 'type'],
    'no-console': ['warn'],
    'antfu/no-top-level-await': ['off'],
    'node/prefer-global/process': ['off'],
    'node/no-process-env': ['error'],
    'perfectionist/sort-imports': ['error', {
      tsconfigRootDir: '.',
    }],
    'unicorn/filename-case': ['error', {
      case: 'kebabCase',
      ignore: ['README.md'],
    }],
  },
})
