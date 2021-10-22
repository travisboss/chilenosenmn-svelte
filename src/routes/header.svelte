<!-- Navbar goes here -->
<nav class="bg-white shadow-lg">
	<div class="max-w-6xl mx-auto px-4">
		<div class="flex justify-between">
			<div class="flex space-x-7">
				<div>
					<!-- Website Logo -->
					<a href="/home" class="flex items-center py-4 px-2">
						<img src="/chilenosEnMN.png" alt="Logo" class="h-8 w-8 mr-2" />
						<span class="font-semibold text-gray-500 text-lg">Chilenos en MN</span>
					</a>
				</div>
			</div>
			<!-- Primary Navbar items -->
			<div class="hidden md:flex items-center space-x-3 ">
				<div class="hidden md:flex items-center space-x-1">
					<a href="/home" class="py-4 px-2 text-blue-500 border-b-4 border-red-500 font-semibold "
						>Home</a
					>
					<a
						href="/services"
						class="py-4 px-2 text-gray-500 font-semibold hover:text-red-500 transition duration-300"
						>Services</a
					>
					<a
						href="/about"
						class="py-4 px-2 text-gray-500 font-semibold hover:text-red-500 transition duration-300"
						>About</a
					>
					<a
						href="/contact"
						class="py-4 px-2 text-gray-500 font-semibold hover:red-green-500 transition duration-300"
						>Contact Us</a
					>
				</div>
			</div>
			<!-- Mobile menu button -->
			<div class="md:hidden flex items-center">
				<button class="outline-none mobile-menu-button">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class=" w-6 h-6 text-gray-500"
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
			<li class="active">
				<a href="index.html" class="block text-sm px-2 py-4 text-white bg-blue-500 font-semibold"
					>Home</a
				>
			</li>
			<li>
				<a
					href="#services"
					class="block text-sm px-2 py-4 hover:bg-blue-500 hover:text-white transition duration-300"
					>Services</a
				>
			</li>
			<li>
				<a
					href="#about"
					class="block text-sm px-2 py-4 hover:bg-blue-500 hover:text-white transition duration-300"
					>About</a
				>
			</li>
			<li>
				<a
					href="#contact"
					class="block text-sm px-2 py-4 hover:bg-blue-500 hover:text-white transition duration-300"
					>Contact Us</a
				>
			</li>
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
