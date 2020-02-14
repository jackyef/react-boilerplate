module.exports = {
	testMatch: [
		"<rootDir>/src/**/__tests__/**/*.{js,jsx}",
		"<rootDir>/src/**/*.{spec,test}.{js,jsx}"
	],
	transform: {
		'^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
		'^.+\\.(css|less)$': '<rootDir>/jest-transformer/css.js',
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '<rootDir>/jest-transformer/assets.js',
	},
	transformIgnorePatterns: [
		'[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
		'^.+\\.module\\.(css|less)$'
	],
	moduleNameMapper: {
		'^.+\\.(css|less)$': 'identity-obj-proxy'
	},
	moduleFileExtensions: [
		'js',
		'json',
		'jsx',
		'node'
	],
  collectCoverageFrom: [
    '<rootDir>/**/*.js',

    // webpack configs
    '!**/webpack/**/*.js',

    // configs files
    '!**/*.config.js',

    // entry points
    '!<rootDir>/server/index.js',
    '!<rootDir>/server/index.dev.js',
    '!<rootDir>/client/index.js',
    '!<rootDir>/client/app.js',
    '!<rootDir>/client/routes/index.js',

    // Third party codes
    '!**/node_modules/**',

    // Generated files (built files)
    '!<rootDir>/**/build/**',
    '!<rootDir>/**/dist/**',

    // Jest files
    '!<rootDir>/**/coverage/**',
    '!<rootDir>/**/jest.config.js',

    // Test.
    '!**/__tests__/**',
    '!**/__mocks__/**',
    '!**/__data_mocks__/**',
    '!**/__gql_mocks__/**',
  ],
};
