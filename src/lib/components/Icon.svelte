<script lang="ts">
	export let size: 'small' | 'medium' | 'large' = 'medium';
</script>

<div
	class="icon"
	class:small={size === 'small'}
	class:medium={size === 'medium'}
	class:large={size === 'large'}
>
	<slot />
</div>

<style>
	.icon {
		display: block;
	}
	.small {
		width: 18px;
		height: 18px;
	}

	.medium {
		width: 24px;
		height: 24px;
	}

	.large {
		width: 30px;
		height: 30px;
	}
</style>
