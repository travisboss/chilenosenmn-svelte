<section class="form">
	<div class="w-full max-w-xs">
		<form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
			<div class="mb-4">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="name">Name</label>
				<input
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="name"
					type="text"
					placeholder="John Doe"
				/>
			</div>
			<div class="mb-6">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
				<input
					class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
					id="email"
					type="email"
					placeholder="johndoe@gmail.com"
				/>
				<p class="text-red-500 text-xs italic">Please provide an email address.</p>
			</div>
			<div class="flex items-center justify-between">
				<button
					class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					type="button"
				>
					Submit
				</button>
			</div>
		</form>
	</div>
</section>

<style>
	.form {
		@apply flex justify-center items-center;
	}
	.form-control {
		@apply mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 dark:focus:border-white focus:bg-white focus:ring-4;
	}
	.form-label {
		@apply text-gray-700 dark:text-white capitalize;
	}
	.form-button {
		@apply bg-blue-800 hover:bg-red-500 active:bg-red-500 focus:bg-red-500 text-white font-bold py-2 px-4 rounded uppercase;
	}
</style>
