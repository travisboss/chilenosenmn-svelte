<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte';

	// Import Swiper styles
	import 'swiper/css';
	import 'swiper/css/a11y';
	import 'swiper/css/autoplay';
	import 'swiper/css/pagination';
	import 'swiper/css/navigation';

	import 'swiper/css/pagination';
	import 'swiper/css/navigation';

	// import Swiper core and required modules
	import SwiperCore, { Pagination, Autoplay } from 'swiper';

	// install Swiper modules
	SwiperCore.use([Pagination, Autoplay]);
</script>

<!-- <section class="container-fluid mx-auto mt-8">
	<div class="flex justify-center">
		<img src="https://source.unsplash.com/featured/1440x900/?chile,minneapolis" alt="" />
	</div>
</section> -->

<section class="container-fluid mx-auto mt-8">
	<Swiper
		pagination={{ clickable: true }}
		spaceBetween={30}
		centeredSlides={true}
		autoplay={{
			delay: 5000
		}}
		class="mySwiper"
	>
		<SwiperSlide>
			<img src="https://source.unsplash.com/featured/1440x900/?minneapolis" alt="minneapolis" />
		</SwiperSlide>
		<SwiperSlide>
			<img src="https://source.unsplash.com/featured/1440x900/?chile" alt="chile" />
		</SwiperSlide>
	</Swiper>
</section>
