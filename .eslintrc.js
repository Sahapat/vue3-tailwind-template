module.exports = {
	"parser": "vue-eslint-parser",
	"env": {
		"browser": true,
		"commonjs": true,
		"es2021": true
	},
	"parserOptions": {
		"ecmaVersion": 2021,
		"parser": "@typescript-eslint/parser",
		"sourceType": "module",
		"ecmaFeatures": {
			"jsx": true
		}
	},
	"extends": [
		"eslint:recommended",
		"plugin:vue/vue3-essential",
		"plugin:@typescript-eslint/recommended",
	],
	"plugins": [
		"vue",
		"@typescript-eslint",
	],
	"rules": {
		"@typescript-eslint/ban-types": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"import/extensions": "off",
		indent: [
            'error',
            4, {
                SwitchCase: 1
            }
        ],
		'vue/html-indent': [
            'error',
            4, {
                alignAttributesVertically: true
            }
        ],
        quotes: [
            'error',
            'single', {
                avoidEscape: true
            }
        ],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		"import/no-unresolved": "off",
		"import/prefer-default-export": "off",
		"no-param-reassign": "warn",
		"import/no-extraneous-dependencies": "off",
		"max-len": "off",
		"no-restricted-syntax": "off",
		"no-bitwise": "off",
		"no-case-declarations": "off",
		"@typescript-eslint/no-namespace": "off",
		"no-undef": "off",
		"no-promise-executor-return": "off",
		"vue/multi-word-component-names": "off"
	}
}