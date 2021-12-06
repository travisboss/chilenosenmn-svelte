<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { Pagination, Autoplay, A11y, EffectFade } from 'swiper';

	// Import Swiper styles
	import 'swiper/css';
	import 'swiper/css/a11y';
	import 'swiper/css/autoplay';
	import 'swiper/css/pagination';
	import 'swiper/css/effect-fade';

	const slides = [
		{
			img: 'https://source.unsplash.com/user/loacfr/H6KJ2D0LphU/1440x400',
			alt: 'valparaiso colorful buildings'
		},
		{ img: 'https://source.unsplash.com/9CPAjGVB378/1440x400', alt: 'st paul minnesota skyline' }
	];
</script>

<!-- <section class="container-fluid mx-auto mt-8">
	<div class="flex justify-center">
		<img src="https://source.unsplash.com/featured/1440x900/?chile,minneapolis" alt="" />
	</div>
</section> -->

<section class="container-fluid mx-auto mt-8 overflow-hidden">
	<Swiper
		modules={[Pagination, Autoplay, A11y, EffectFade]}
		effect="fade"
		pagination={{ clickable: true }}
		autoplay={{
			delay: 5000,
			disableOnInteraction: false
		}}
		loop={true}
	>
		{#each slides as slide}
			<SwiperSlide>
				<img src={slide.img} alt={slide.alt} />
			</SwiperSlide>
		{/each}
		<span slot="container-start" />
		<span slot="container-end" />
		<span slot="wrapper-start" />
		<span slot="wrapper-end" />
	</Swiper>
</section>
