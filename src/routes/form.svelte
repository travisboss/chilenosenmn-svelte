<section class="form container mx-auto p-4">
	<div class="mt-8 max-w-md mx-auto">
		<form action="https://formspree.io/f/xqkwowwb" method="POST" class="grid grid-cols-1 gap-6">
			<label class="block">
				<span class="form-label form__name">Full name</span>
				<input type="text" class="form-control" name="name" placeholder="" />
			</label>
			<label class="block">
				<span class="form-label form__email">Email address</span>
				<input type="email" class="form-control" name="_replayto" placeholder="email@email.com" />
			</label>
			<label class="block">
				<span class="form-label form__details">Additional details</span>
				<textarea class="form-control" name="message" rows="3" />
			</label>
			<div class="block">
				<div class="mt-2">
					<button
						class="form-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded uppercase"
						type="submit">Submit</button
					>
					<div />
				</div>
			</div>
		</form>
	</div>
</section>

<style>
	.form-control {
		@apply mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0;
	}
	.form-label {
		@apply text-gray-700 dark:text-white capitalize;
	}
</style>
