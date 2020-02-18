module.exports = {
	testMatch: [
		"<rootDir>/src/**/*.{spec,test}.{js,jsx}"
	],
	transform: {
		'^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
		'^.+\\.(gql|graphql)$': '<rootDir>/node_modules/jest-transform-graphql',
		'^.+\\.(css|less)$': '<rootDir>/jest-transformer/css.js',
    '^(?!.*\\.(js|jsx|css|less|gql|graphql)$)': '<rootDir>/jest-transformer/assets.js',
	},
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
    '<rootDir>/src/**/*.js',

    // webpack configs
    '!**/webpack/**/*.js',

    // configs files
    '!**/*.config.js',

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
    '!**/__test_utils__/**',
  ],
};
