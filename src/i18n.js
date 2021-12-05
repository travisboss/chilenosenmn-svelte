import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

register('en', () => import('./lang/en.json'));
register('es', () => import('./lang/es.json'));

// en and es are not available yet

init({
	fallbackLocale: 'es',
	initialLocale: getLocaleFromNavigator()
});
// starts loading 'es'
