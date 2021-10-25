<section class="container mx-auto p-4">
	<div class="mt-8 max-w-md mx-auto">
		<form class="grid grid-cols-1 gap-6" action="/" method="post">
			<label class="block">
				<span class="text-gray-700 dark:text-white capitalize">Full name</span>
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
					placeholder=""
					required
				/>
			</label>
			<label class="block">
				<span class="text-gray-700 dark:text-white capitalize">Email address</span>
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
					required
					placeholder="email@email.com"
				/>
			</label>
			<label class="block">
				<span class="text-gray-700 dark:text-white capitalize">Additional details</span>
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
				/>
			</label>
			<div class="block">
				<div class="mt-2">
					<button
						class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded uppercase"
						type="submit">Submit</button
					>
					<div />
				</div>
			</div>
		</form>
	</div>
</section>
