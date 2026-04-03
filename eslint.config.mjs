import eslintPluginAstro from 'eslint-plugin-astro';
import tsEslint from 'typescript-eslint';

export default tsEslint.config(
  // Use TypeScript's config helper
  tsEslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    // Ignores
    ignores: ['dist/', '.astro/', 'node_modules/'],
  },
  {
    // Custom rules or overrides
    files: ['**/*.astro'],
    languageOptions: {
      parser: eslintPluginAstro.parser,
      parserOptions: {
        parser: tsEslint.parser,
        extraFileExtensions: ['.astro'],
      },
    },
  },
);
