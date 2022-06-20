<script>
	// import i18n
	import { _ } from 'svelte-i18n';

	const title = 'Actividades 2022';
	const announcements = [
		{
			paragraph:
				'Después de una larga espera, ¡ha salido el sol en Minnesota! Razón suficiente para volver a vernos en persona, celebrar juntos la llegada de la primavera y volver a mostrar nuestras sonrisas. Los invitamos a dar inicio de la temporada con dos picnics:'
		},
		{
			paragraph: 'Cuándo: el 25 de junio y el 13 de agosto'
		},
		{
			paragraph: 'Hora: a partir de las 12 del día.'
		},
		{
			paragraph: 'Lugar: Bryant Lake, 6800 Rowland Rd, Eden Prairie, MN 55344.'
		},
		{
			paragraph:
				'Estaremos ubicados cerca de los juegos de niños. Como ya es costumbre, el club pone el carbón para las parrillas del parque, bebidas, platos y servicios. Cada familia trae su comida, y algo extra para compartir con los demás. ¡Esto no es todo! Marquen sus calendarios para celebrar las fiestas patrias el día 17 de septiembre, en Snail Lake Pavillion at Snail Lake Regional Park, ubicado en 4191 Snail Lake Blvd, Shoreview, MN 55126. Estaremos comunicando más detalles de esta celebración más adelante.'
		},
		{
			paragraph:
				'Y el último anuncio, pero no por eso menos importante, es comunicarles que quienes integramos este comité de organización, hemos decidido dar por finalizada nuestra labor a fines del año 2022. Ha sido una larga etapa de muchos años en los que hemos puesto lo mejor de nosotros para formar una comunidad y también para crear nuevas amistades disfrutando de las tradiciones chilenas.'
		},
		{
			paragraph:
				'No tenemos duda de que hay personas que pueden continuar con nuestra labor y que incluso pueden hacerlo mejor. Invitamos a todos los interesados en formar un nuevo comité a comunicarse con nosotros, pues estaremos más que felices de responder sus preguntas y darles la información que necesiten.'
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
