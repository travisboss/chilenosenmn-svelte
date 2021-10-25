<script>
	const cards = [
		{
			img: 'https://source.unsplash.com/random/350x196/?chile',
			title: 'card title'
		},
		{
			img: 'https://source.unsplash.com/random/350x196/?chile',
			title: 'card title'
		},
		{
			img: 'https://source.unsplash.com/random/350x196/?chile',
			title: 'card title'
		}
	];
</script>

<section class="container mx-auto flex flex-wrap justify-around">
	{#each cards as card}
		<div class="card shadow-md rounded-md overflow-hidden m-4 flex-3 lg:flex-2">
			<img src={card.img} class="card__image w-96 h-56" alt="" />

			<div class="p-4 flex justify-center flex-col">
				<h2 class="card__title text-xl font-semibold mb-2 dark:text-white text-center capitalize">
					{card.title}
				</h2>
				<p class="mb-4 dark:text-white">{card.text}</p>

				<button
					class="card-button bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
					type="button"
				>
					View
				</button>
			</div>
		</div>
	{/each}
</section>
