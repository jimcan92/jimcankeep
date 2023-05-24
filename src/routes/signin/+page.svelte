<script lang="ts">
	import { appLogo, googleLogo } from '$lib/images';
	import { onMount } from 'svelte';
	import { user } from '$lib/stores';
	import { goto } from '$app/navigation';
	import { syncUser, signIn } from '$lib/services';

	onMount(async () => {
		await redirect();
	});

	async function redirect() {
		await syncUser();

		if ($user) {
			goto('/');
		}
	}

	const signInWithGoogle = async () => {
		await signIn();
		await redirect();
	};
</script>

<main>
	<div class="signin-card">
		<div class="barnd">
			<img class="logo" src={appLogo} alt="ss" />
			<div class="tagline">
				<p>Remember everything.</p>
			</div>
		</div>
		<button class="signin" on:click={signInWithGoogle}>
			<img class="google-logo" src={googleLogo} alt="Google Logo" />
			SIGNIN WITH GOOGLE
		</button>
	</div>
</main>

<style>
	main {
		margin: auto;
		height: 100vh;
		display: grid;
		place-content: center;
	}

	.signin-card {
		min-width: 300px;
		min-height: 400px;
		border-radius: 12px;
		border: 1px solid var(--accent-color);
		padding: 12px;
		display: flex;
		flex-direction: column;
		gap: 8px;
		align-items: center;
		justify-content: space-evenly;
		background-color: var(--bg-color);
	}

	.signin-card:hover {
		filter: drop-shadow(0 0 2em var(--accent-color));
	}

	.logo {
		height: 150px;
		width: 150px;
	}

	.google-logo {
		height: 30px;
		width: 30px;
	}

	p {
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	}

	.signin {
		border: 1px solid var(--accent-color);
		border-radius: 50vh;
		padding: 4px 20px;
		background-color: transparent;
		color: var(--font-color);
		display: flex;
		align-items: center;
		gap: 4px;
		cursor: pointer;
	}

	.signin:hover {
		background-color: var(--accent-color);
	}
</style>
