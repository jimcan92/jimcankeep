<script lang="ts">
	import '../styles.css';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { getAuth, onAuthStateChanged } from 'firebase/auth';
	import { isBusy, user, applyTheme } from '$lib/stores';
	import { app, signout, syncUser } from '$lib/services';
	import type { AppThemeMode, DropdownItem } from '$lib/types';
	import { MdSettings, MdMenu } from '$lib/icons';
	import { Dropdown, IconButton, SearchBox } from '$lib/components';
	import { appLogo } from '$lib/images';
	import Avatar from '$lib/components/Avatar.svelte';

	const auth = getAuth(app);

	onMount(async () => {
		isBusy.set(true);
		onAuthStateChanged(auth, async (user) => {
			if (!user) {
				goto('/signin');
			}
			await syncUser();
		});

		applyTheme(window?.localStorage.getItem('theme') as AppThemeMode);
		isBusy.set(false);
	});

	let settingsOpen = false;
	let avatarOpen = false;

	const settingsItems: DropdownItem[] = [
		{
			label: 'Settings',
			onItemClick: () => {}
		},
		{
			label: 'App Theme',
			onItemClick: () => applyTheme()
		}
	];

	const avatarItems: DropdownItem[] = [
		{
			label: 'Manage Account',
			onItemClick: () => goto('/account')
		},
		{
			label: 'Sign Out',
			onItemClick: () => signout()
		}
	];

	let query = '';

	function onSearch() {
		console.log(query);
	}

	$: src = $user?.photoURL ?? '';
	$: alt = $user?.displayName ?? '';
</script>

{#if $page.url.pathname !== '/signin'}
	<div class="navbar">
		<div class="left">
			<IconButton><MdMenu /></IconButton>
			<button class="brand" on:click={() => goto('/')}>
				<img class="logo" src={appLogo} alt="Jimcan Keep" />
				<span>Jimcan Keep</span>
			</button>
			<SearchBox bind:query {onSearch} />
		</div>
		<div class="navbar-actions">
			<Dropdown items={settingsItems} position="left" bind:open={settingsOpen}>
				<IconButton on:click={() => (settingsOpen = !settingsOpen)}><MdSettings /></IconButton>
			</Dropdown>

			<Dropdown items={avatarItems} position="left" bind:open={avatarOpen}>
				<Avatar bind:src bind:alt on:click={() => (avatarOpen = !avatarOpen)} />
			</Dropdown>
		</div>
	</div>
	<hr />
{/if}
<slot />

<style>
	/* Basic styles */
	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px;
	}

	.left {
		display: flex;
		align-items: center;
	}

	.brand {
		display: flex;
		border: 0;
		background-color: unset;
		align-items: center;
		gap: 8px;
		cursor: pointer;
		padding: 4px 12px;
		margin-right: 50px;
	}

	.logo {
		width: 40px;
	}

	.navbar-actions {
		display: flex;
		align-items: center;
	}

	hr {
		border: none; /* Remove the default border */
		height: 1px; /* Set the desired height for the thicker appearance */
		background-color: var(--accent-color); /* Set the desired color for the border */
	}
</style>
