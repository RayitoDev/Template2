import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends('next/core-web-vitals', 'next/typescript'),

    {
        rules: {
            indent: ['error', 4],
            'linebreak-style': 0,
            quotes: ['error', 'single'],
            semi: ['error', 'always'],
            'no-empty': 'warn',
            'no-cond-assign': ['error', 'always'],
            'for-direction': 'off',
        },
    },
];

export default eslintConfig;
