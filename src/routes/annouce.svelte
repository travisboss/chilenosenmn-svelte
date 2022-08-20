<script>
	// import i18n
	import { _ } from 'svelte-i18n';

	const title = '¡Tiki tiki tiii amigos del Club Chileno de Minnesota!';
	const announcements = [
		{
			paragraph:
				'Como ya es tradición, nuestra fiesta de celebración de Fiestas Patrias se realizará en Snail Lake Park, el sábado 17 de septiembre. Este año tendremos stands o puestos de comida donde podrán comprar comida chilena, como empanadas, pastel de choclo y una de las novedades, berlines. '
		},
		{
			paragraph:
				'Además, tendremos una serie de juegos y competencias durante el día, bailes folklóricos y música en vivo con los grupos musicales: “Ina Yukka” y Alma Andina.'
		},
		{
			paragraph:
				'La entrada de preventa (hasta el miércoles 14 de septiembre) tendrá un costo de <b>$3</b> (5 a 15 años) y <b>$5</b> (mayores de 15 años). Si compras la entrada en el parque, tendrá un costo de <b>$5</b> (5 a 15 años) y <b>$10</b> (mayores de 15 años). Las entradas para nuestra fiesta podrán comprarse:'
		},
		{
			paragraph:
				'- enviando el formulario más el pago correspondiente, en un cheque a nombre del Club Chileno de Minnesota a la dirección c/o Paula Hernández 1140 St Paul Avenue, St Paul MN 55116'
		},
		{
			paragraph: ' - o a la cuenta de Venmo: @Paula-StJohn-1'
		},
		{
			paragraph:
				'No se olviden que quienes quieran participar en la venta de comida (y/u otros), deben enviar el formulario de solicitud (adjunto en este email) antes del 5 de septiembre, del 2022.'
		},
		{
			paragraph:
				'Desde ya muchas gracias a todos por su participación y esperamos verlos en nuestra celebración de Fiestas Patrias'
		}
	];

	const image = 'https://i.postimg.cc/bY1G45r7/chileno-Image.jpg';
</script>

<section class="container mx-auto announce" id="announce">
	<div class="flex justify-center pt-4">
		<img class="aspect-auto" src={image} alt="party information" />
	</div>
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
						<p class="my-2">{@html paragraph}</p>
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
