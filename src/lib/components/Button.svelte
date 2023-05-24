<script lang="ts">
	export let round: boolean = false;
	export let borderRadius: 'none' | 'small' | 'medium' | 'large' = 'small';
	export let disabled: boolean = false;
	export let elevated = false;
	export let capitalize = true;
</script>

<button
	on:click
	class:round
	class:small={borderRadius === 'small'}
	class:medium={borderRadius === 'medium'}
	class:large={borderRadius === 'large'}
	class:hover={!disabled}
	class:elevated
	class:disabled
	class:capitalize
>
	<slot />
</button>

<style>
	button {
		border: 0;
		padding: 8px 16px;
		font-size: 1rem;
		font-weight: 500;
		cursor: pointer;
	}

	.capitalize {
		text-transform: uppercase;
	}

	.disabled {
		cursor: unset;
		background-color: var(--bg-color-light);
		color: grey;
	}

	.elevated {
		box-shadow: 1px 1px 5px #22222250;
	}

	.hover:hover {
		background-color: var(--accent-color);
		color: white;
	}

	.round {
		border-radius: 50% !important;
		width: 35px;
		height: 35px;
		padding: 4px;
	}

	.small {
		border-radius: 4px;
	}

	.medium {
		border-radius: 8px;
	}

	.large {
		border-radius: 20px;
	}
</style>
