const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	darkMode: 'media',
	theme: {
		container: {
			center: true
		},
		flex: {
			2: '1 0 calc(25% - 1rem)',
			3: '1 0 calc(100% - 1rem)'
		},
		extend: {}
	},

	plugins: []
};

module.exports = config;
