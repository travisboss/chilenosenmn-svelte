<script>
	// import i18n
	import { _ } from 'svelte-i18n';

	const title = 'Anuncio Fiestas Patrias 2021';
	const announcements = [
		{ paragraph: 'Queridos amigos del club chileno en Minnesota,' },
		{
			paragraph:
				'Con gran pesar les queremos comunicar que debido a la situación que estamos viviendo con COVID-19 y las implicancias de esta emergencia sanitaria, nuestra tradicional celebración de las fiestas patrias será suspendida hasta el próximo año. Así que marquen sus calendarios porque ya tenemos listo el parque para el 17 de septiembre del 2022.'
		},
		{
			paragraph:
				'Pero como la buena y rica comida chilena no debe faltar en la mesa, pronto estaremos enviándoles un email con toda la información acerca de dónde pueden comprar empanadas entre otros ricos platos para que puedan disfrutar este 17 de septiembre.'
		},
		{
			paragraph:
				'Un saludo cordial para todos ustedes, esperando que todos estén bien y que esta pandemia no nos impida seguir en contacto con nuestras tradiciones de manera segura.'
		}
	];
</script>

<section class="container mx-auto announce" id="announce">
	<div class="announce--wrapper">
		<div class="announce--svg">
			<svg
				class="w-6 h-6 text-white fill-current"
				viewBox="0 0 40 40"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"
				/>
			</svg>
		</div>

		<div class="px-4 py-2 -mx-3">
			<div class="mx-3">
				<h2 class="font-semibold text-blue-800 dark:text-gray-50">{title}</h2>
				<div class="text-sm text-gray-600 dark:text-white">
					{#each announcements as { paragraph }}
						<p class="my-2">{paragraph}</p>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.announce--wrapper {
		@apply flex mx-4 overflow-hidden bg-white rounded-lg shadow-md dark:shadow-none dark:bg-gray-800 my-5;
	}
	.announce--svg {
		@apply flex items-center justify-center w-12 bg-blue-800 dark:bg-transparent;
	}
</style>
