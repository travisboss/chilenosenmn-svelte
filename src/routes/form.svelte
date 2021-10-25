<script context="module">
	export const prerender = true;
</script>

<section class="form container mx-auto p-4">
	<div class="mt-8 max-w-md mx-auto">
		<form name="contact" class="grid grid-cols-1 gap-6" method="POST" data-netlify="true">
			<label class="block">
				<span class="text-gray-700 dark:text-white capitalize form__name">Full name</span>
				<input
					type="text"
					class="
            mt-1
            block
            w-full
            rounded-md
            bg-gray-100
            border-transparent
            focus:border-gray-500 focus:bg-white focus:ring-0
          "
					name="name"
					placeholder=""
					required
				/>
			</label>
			<label class="block">
				<span class="text-gray-700 dark:text-white capitalize form__email">Email address</span>
				<input
					type="email"
					class="
            mt-1
            block
            w-full
            rounded-md
            bg-gray-100
            border-transparent
            focus:border-gray-500 focus:bg-white focus:ring-0
          "
					name="email"
					required
					placeholder="email@email.com"
				/>
			</label>
			<label class="block">
				<span class="text-gray-700 dark:text-white capitalize form__details"
					>Additional details</span
				>
				<textarea
					class="
            mt-1
            block
            w-full
            rounded-md
            bg-gray-100
            border-transparent
            focus:border-gray-500 focus:bg-white focus:ring-0
          "
					required
					rows="3"
					name="message"
				/>
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
