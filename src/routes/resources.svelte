<script>
	const resources = [
		{
			title: 'Consulado Honorario en Minnesota',
			link: 'https://serviciosconsulares.cl/tramites/consulados-en-el-exterior/estados-unidos/minneapolis-minnesota/consulado-honorario-en-minneapolis-minnesota'
		},
		{
			title: 'Voto Chileno en Exterior',
			link: 'https://www.votoenelexterior.cl/'
		},
		{
			title: 'Venta de Empanadas en Minnesota',
			link: 'https://www.facebook.com/atacamacatering/photos/?ref=page_internal'
		}
	];
</script>

<section class="flex justify-center">
	{#each resources as resource}
		<div class="max-w-sm w-1/3 rounded-lg shadow-lg dark:shadow-none p-4">
			<h3 class="font-semibold text-lg tracking-wide dark:text-white">{resource.title}</h3>
			<div class="mt-2">
				<a
					href={resource.link}
					class="text-blue-700  inline-flex items-center font-semibold tracking-wide"
				>
					<span class="hover:underline dark:text-white"> Continue to link </span>
					<span class="text-xl ml-2 dark:text-white">&#8594;</span>
				</a>
			</div>
		</div>
	{/each}
</section>
