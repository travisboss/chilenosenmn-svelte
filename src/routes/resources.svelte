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

<section class="grid grid-cols-3 gap-1">
	{#each resources as resource}
		<figure class="max-w-sm w-full rounded-lg shadow-lg dark:shadow-none p-4 justify-self-center">
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
		</figure>
	{/each}
</section>
