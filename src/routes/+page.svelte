<script>
	import { user } from '$lib/stores';
	import { signIn, signout } from '$lib/services';
</script>

<h1>Welcome {$user?.displayName}!</h1>
<button on:click={signout}>Sign Out</button>
