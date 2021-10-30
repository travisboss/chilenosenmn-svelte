<script>
	const services = ['home', 'about', 'services', 'contact'];
</script>

<!-- Navbar goes here -->
<nav class="bg-white dark:bg-gray-800 fixed dark:sm:border-b-2 dark:sm:border-color-white">
	<div class="w-screen mx-auto p-4">
		<div class="flex justify-between">
			<div class="flex space-x-7">
				<div>
					<!-- Website Logo -->
					<a href="#" class="flex items-center py-4 px-2">
						<img src="/chilenosEnMN.png" alt="Logo" class="h-8 w-8 mr-2" />
						<h1 class="font-semibold text-gray-800 dark:text-white text-3xl italic">
							Chilenos en MN
						</h1>
					</a>
				</div>
			</div>
			<!-- Primary Navbar items -->
			<div class="hidden md:flex items-center space-x-3 ">
				<div class="hidden md:flex items-center space-x-1">
					{#each services as service}
						<a
							href="#"
							class="py-4 px-2 text-gray-800 dark:text-white hover:text-red-500 font-semibold capitalize"
							>{service}</a
						>
					{/each}
				</div>
			</div>
			<!-- Mobile menu button -->
			<div class="md:hidden flex items-center">
				<button class="outline-none mobile-menu-button">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class=" fill-current dark:text-white w-6 h-6 text-gray-500"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>
	<!-- mobile menu -->
	<div class="hidden mobile-menu">
		<ul class="">
			{#each services as service}
				<li>
					<a href="#" class="block text-sm px-2 py-4 text-white capitalize font-semibold"
						>{service}</a
					>
				</li>
			{/each}
		</ul>
	</div>
	<script>
		const btn = document.querySelector('button.mobile-menu-button');
		const menu = document.querySelector('.mobile-menu');

		btn.addEventListener('click', () => {
			menu.classList.toggle('hidden');
		});
	</script>
</nav>
