module.exports = {
	useTabs: true,
	singleQuote: false,
	trailingComma: "none",
	semi: false,
	printWidth: 100,
	bracketSameLine: true,
	htmlWhitespaceSensitivity: "ignore",
	plugins: [
		"./node_modules/prettier-plugin-svelte",
		"./node_modules/prettier-plugin-tailwindcss",
	],
	pluginSearchDirs: false,
	overrides: [
		{
			files: "**/*.svelte",
			options: {
				parser: "svelte",
				svelteSortOrder: "scripts-styles-markup",
				svelteStrictMode: false,
				svelteBracketNewLine: false,
				svelteAllowShorthand: true,
				svelteIndentScriptAndStyle: true,
			},
		},
	],
}
