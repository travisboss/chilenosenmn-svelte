<script>
	import '../app.css';
	import Header from './header.svelte';
	import Footer from './footer.svelte';
	import Carousel from './carousel.svelte';
	import Annouce from './annouce.svelte';
	import Form from './form.svelte';
</script>

<Header />
<Annouce />
<slot />
<Form />
<Footer />
