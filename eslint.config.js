import eslint from '@eslint/js'
import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'

export default [
    {ignores: ['dist']},
    eslint.configs.recommended,
    reactHooks.configs.flat.recommended,
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: globals.browser,
            parser: tsParser,
            parserOptions: {
                ecmaFeatures: {jsx: true},
            },
        },
        plugins: {
            '@typescript-eslint': tsPlugin,
            'react-refresh': reactRefresh,
        },
        rules: {
            ...tsPlugin.configs.recommended.rules,
            'react-refresh/only-export-components': [
                'warn',
                {allowConstantExport: true},
            ],
        },
    },
]
