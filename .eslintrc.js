module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 'off',
		'import/no-cycle': [
			2,
			{
				maxDepth: 1
			},
		],
	},
};
