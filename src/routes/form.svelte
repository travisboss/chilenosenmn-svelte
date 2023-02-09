<script lang="ts">
  import { onMount } from 'svelte';

  interface FormButtonField {
    type: string;
    label: string;
    name: string;
    required?: boolean;
    placeholder?: string;
  }

  interface FormButtonStyles {
    title?: {
      backgroundColor?: string;
    };
    button?: {
      backgroundColor?: string;
    };
  }

  interface FormButtonOptions {
    action: string;
    title: string;
    fields: FormButtonField[];
    styles?: FormButtonStyles;
  }

  declare const formbutton: {
    q?: FormButtonOptions[];
    (
      method: 'create',
      options: FormButtonOptions
    ): void;
  };

  onMount(() => {
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
