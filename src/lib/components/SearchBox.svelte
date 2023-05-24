<script lang="ts">
	import { MdSearch, MdClose } from '$lib/icons';
	import { appThemeMode } from '$lib/stores';
	import { IconButton } from '.';

	export let query = '';
	export let onSearch: VoidFunction = () => {};

	let inputElement: HTMLInputElement;
	let active = false;
	$: theme = active ? ($appThemeMode === 'dark' ? 'light' : 'dark') : $appThemeMode;
	$: showClearButton = !!query;

	function onInputEnter(e: KeyboardEvent) {
		if (e.key === 'Enter') onSearch();
	}
</script>

<div
	class="wrapper"
	class:active
	on:focusin={() => (active = true)}
	on:focusout={() => (active = false)}
>
	<IconButton
		bind:theme
		on:click={() => {
			onSearch();
			inputElement.focus();
		}}
	>
		<MdSearch />
	</IconButton>
	<input
		bind:this={inputElement}
		bind:value={query}
		type="text"
		placeholder="Search"
		class:dark={theme === 'dark'}
		class:light={theme === 'light'}
		on:keyup={onInputEnter}
	/>
	{#if showClearButton}
		<IconButton
			bind:theme
			on:click={() => {
				query = '';
				inputElement.focus();
			}}
		>
			<MdClose />
		</IconButton>
	{/if}
</div>

<style>
	.wrapper {
		display: flex;
		align-items: center;
		padding: 4px 12px;
		border-radius: 8px;
		gap: 8px;
		color: rgb(56, 56, 56);
		background-color: var(--bg-color-light);
	}

	.active {
		background-color: rgb(211, 211, 211);
	}

	input {
		font-size: 1em;
		border: unset;
		background-color: unset;
		outline: unset;
	}

	.dark {
		color: rgb(216, 216, 216);
	}

	.light {
		color: rgb(34, 34, 34);
	}
</style>
