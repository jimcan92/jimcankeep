<script lang="ts">
	import { DarkIcon, LightIcon } from '$lib/icons';
	import { appThemeMode, applyTheme } from '$lib/stores/theme';
	import type { AppThemeMode } from '$lib/types/theme';
	import { onMount } from 'svelte';
	import Button from './Button.svelte';

	onMount(() => applyTheme(window?.localStorage.getItem('theme') as AppThemeMode));
</script>

<Button round on:click={() => applyTheme()}>
	{#if $appThemeMode === 'dark'}
		<LightIcon />
	{:else}
		<DarkIcon />
	{/if}
</Button>

<style>
</style>
