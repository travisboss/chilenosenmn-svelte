<script>
	const cards = [
		{
			img: 'https://live.staticflickr.com/65535/48580955261_58dfabf336_k.jpg',
			text: '',
			title: 'Fiestas Patrias',
			href: 'https://www.flickr.com/photos/141871767@N05/collections/72157710431083346/',
			alt: 'man and women dancing'
		},
		{
			img: 'https://live.staticflickr.com/65535/48580980252_5e272bf8c2_w.jpg',
			text: '',
			title: 'Picnics',
			href: 'https://www.flickr.com/photos/141871767@N05/collections/72157710431075261/',
			alt: 'food on a plate'
		},
		{
			img: 'https://live.staticflickr.com/65535/48581016737_fb58560f3e_w.jpg',
			text: '',
			title: 'Otros Eventos',
			href: 'https://www.flickr.com/photos/141871767@N05/collections/72157710431092156/',
			alt: 'large group of people dancing and singing'
		}
	];
</script>

<section class="cards">
	<div class="cards--wrapper" id="photo">
		<div class="relative mx-auto max-w-7xl">
			<div class="grid max-w-lg gap-12 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
				{#each cards as card}
					<div class="flex flex-col mb-12 overflow-hidden cursor-pointer">
						<a href={card.href}>
							<div class="flex-shrink-0">
								<img class="object-cover w-full h-48 rounded-lg" src={card.img} alt={card.alt} />
							</div>
						</a>
						<div class="flex flex-col justify-between flex-1">
							<div class="flex-1">
								<a href={card.href} class="block mt-2 space-y-6">
									<h3 class="cards--title">
										{card.title}
									</h3>
									{#if card.text}
										<p class="cards--text">
											{card.text}
										</p>
									{/if}
								</a>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.cards--wrapper {
		@apply relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl;
	}
	.cards--title {
		@apply text-2xl font-semibold leading-none tracking-tighter text-gray-600 dark:text-white;
	}
	.cards--text {
		@apply text-lg font-normal text-gray-500 dark:text-white;
	}
</style>
