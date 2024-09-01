module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    testMatch: ['**/src/__tests__/**/*.(js|ts|jsx|tsx)', '**/?(*.)+(spec|test).(js|ts|jsx|tsx)'],
};
