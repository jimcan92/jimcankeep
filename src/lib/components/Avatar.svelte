<script lang="ts">
	import { MdAccountCircle } from '../icons';
	import Button from './Button.svelte';

	export let src = '';
	export let alt = '';
	export let width: number = 35;
	export let round: boolean = true;
</script>

{#if src}
	<img class="avatar" on:click on:keypress {src} {alt} {width} height={width} class:round />
{:else}
	<Button bind:round on:click>
		<MdAccountCircle class="gg" />
	</Button>
{/if}

<style>
	.avatar {
		cursor: pointer;
	}

	.round {
		border-radius: 50%;
	}
</style>
