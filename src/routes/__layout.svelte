<script>
	import '../app.css';
	import Header from './header.svelte';
	import Footer from './footer.svelte';
	import Carousel from './carousel.svelte';
	import Annouce from './annouce.svelte';
	import Form from './form.svelte';
	import Card from './card.svelte';
	import { waitLocale } from 'svelte-i18n';

	export async function preload() {
		// awaits for the loading of the 'es' dictionaries
		return waitLocale();
	}
</script>

<div class="dark:bg-gray-800">
	<Header />
	<Carousel />
	<Annouce />
	<Card />
	<Form />
	<Footer />
</div>
