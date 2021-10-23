<script>
	const cards = [
		{
			img: 'https://source.unsplash.com/random',
			title: 'card title',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sequi tenetur, voluptatibus harum consequuntur alias quaerat excepturi temporibus nisi commodi, ex, ratione quae soluta!  Saepe alias dolores dolorem assumenda totam?'
		},
		{
			img: 'https://source.unsplash.com/random',
			title: 'card title',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sequi tenetur, voluptatibus harum consequuntur alias quaerat excepturi temporibus nisi commodi, ex, ratione quae soluta!  Saepe alias dolores dolorem assumenda totam?'
		},
		{
			img: 'https://source.unsplash.com/random',
			title: 'card title',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sequi tenetur, voluptatibus harum consequuntur alias quaerat excepturi temporibus nisi commodi, ex, ratione quae soluta!  Saepe alias dolores dolorem assumenda totam?'
		}
	];
</script>

<section class="container mx-auto flex flex-wrap justify-around">
	{#each cards as card}
		<div class="shadow-md rounded-md overflow-hidden m-4 flex-3 lg:flex-2">
			<img src={card.img} class="w-full" alt="" />

			<div class="p-4">
				<h5 class="text-xl font-semibold mb-2 dark:text-white">{card.title}</h5>

				<p class="mb-4 dark:text-white">{card.text}</p>

				<button
					class="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
					type="button"
				>
					Button
				</button>
			</div>
		</div>
	{/each}
</section>
