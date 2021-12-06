<script>
	import { onMount } from 'svelte';

	onMount(() => {
		window.formbutton =
			window.formbutton ||
			function () {
				(formbutton.q = formbutton.q || []).push(arguments);
			};
		/* customize formbutton below*/
		formbutton('create', {
			action: 'https://formspree.io/f/xknkakka',
			title: 'Contact Us',
			fields: [
				{
					type: 'text',
					label: 'Nombre',
					name: 'name',
					required: true,
					placeholder: 'Jane Doe'
				},
				{
					type: 'email',
					label: 'Correo Electrónico:',
					name: 'email',
					required: true,
					placeholder: 'your@email.com'
				},
				{
					type: 'textarea',
					label: 'Mensaje:',
					name: 'message',
					required: true,
					placeholder: "What's on your mind?"
				},
				{ type: 'submit' }
			],
			styles: {
				title: {
					backgroundColor: 'red-500'
				},
				button: {
					backgroundColor: 'red-500'
				}
			}
		});
	});
</script>
