<script>
	import Nav from './../lib/nav.svelte';
	import './../styles/reset.css';
	import './../styles/global.css';
</script>

<div class="flex-layout">
	<header class="absolute">
		<Nav />
	</header>
	<slot />
	<footer>
		<p>Aaron Hubbard Web Dev</p>
	</footer>
</div>

<style>
	footer {
		margin: 3rem 0;
		text-align: center;
	}

	.flex-layout {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
</style>
