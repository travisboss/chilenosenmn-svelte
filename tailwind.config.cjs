const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		container: {
			center: true
		},
		extend: {}
	},

	plugins: [require('@tailwindcss/forms')]
};

module.exports = config;
