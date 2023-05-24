<script lang="ts">
	import { appThemeMode } from '$lib/stores';
	import type { AppThemeMode } from '$lib/types';

	export let disabled: boolean = false;
	export let theme: AppThemeMode = $appThemeMode;
</script>

<button on:click {disabled} class:dark={theme === 'dark'} class:light={theme === 'light'}>
	<slot />
</button>

<style>
	button {
		border: 0;
		padding: 10px;
		cursor: pointer;
		border-radius: 50%;
		background-color: unset;
		color: var(--icon-color);
		width: 46px;
		height: 46px;
	}

	.dark {
		--icon-color: var(--color-primary-90);
	}

	.light {
		--icon-color: var(--color-primary-dark-90);
	}

	.dark:disabled {
		cursor: unset;
		--icon-color: var(--color-primary-60);
	}

	.dark:enabled:hover {
		background-color: var(--accent-color);
		--icon-color: var(--color-primary);
	}

	.light:disabled {
		cursor: unset;
		--icon-color: var(--color-primary-dark-60);
	}

	.light:enabled:hover {
		background-color: var(--accent-color);
		--icon-color: var(--color-primary-dark);
	}
</style>
