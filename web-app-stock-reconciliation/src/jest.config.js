/* eslint-disable @typescript-eslint/no-unused-vars */
const { defaults } = require('jest-config');
module.exports = {
    testEnvironment: 'jsdom',
    testMatch: ['**/__tests__/**/*.test.tsx'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};