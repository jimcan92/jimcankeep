<script lang="ts">
	import { clickOutside } from 'svelte-use-click-outside';
	import type { DropdownItem } from '$lib/types';

	export let open: boolean;
	export let items: DropdownItem[];
	export let position: 'left' | 'right' = 'right';

	function onItemClick(f?: VoidFunction, close: boolean = true) {
		if (f) f();
		if (close) open = false;
	}
</script>

<div
	class="dropdown"
	use:clickOutside={() => {
		if (open) open = false;
	}}
>
	<slot />
	<div
		class="dropdown-content"
		class:left={position === 'left'}
		class:right={position === 'right'}
		class:show={open}
	>
		{#each items as i}
			<button class="option" on:click={() => onItemClick(i.onItemClick)}>
				{i.label}
			</button>
		{/each}
	</div>
</div>

<style>
	.dropdown {
		display: inline-block;
		position: relative;
		--border-radius: 4px;
	}

	.dropdown-content {
		display: none;
		position: absolute;
		background-color: var(--bg-color-light);
		margin-top: 4px;
		padding-block: 8px;
		box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.342);
		z-index: 1000000;
		border-radius: var(--border-radius);
		flex-direction: column;
		min-width: 120px;
	}

	.option {
		border: 0;
		border-radius: 0;
		background-color: unset;
		padding: 8px 16px;
		cursor: pointer;
		text-align: left;
		/* font-weight: 600; */
		font-size: 0.9em;
		white-space: nowrap;
	}

	/* .option:first-child {
		border-top-left-radius: var(--border-radius);
		border-top-right-radius: var(--border-radius);
	}

	.option:last-child {
		border-bottom-left-radius: var(--border-radius);
		border-bottom-right-radius: var(--border-radius);
	} */

	.option:hover,
	.option:active,
	.option:focus {
		background-color: var(--accent-color);
	}

	.right {
		left: 0;
	}

	.left {
		right: 0;
	}

	.show {
		display: flex;
	}
</style>
