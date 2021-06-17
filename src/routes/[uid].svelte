<script context="module">
	import Client from './../../utils/client';
	import PrismicDom from 'prismic-dom';
	import '../styles/reset.css';
	import '../styles/global.css';

	export async function load({ page }) {
		const { uid } = page.params;
		const document = await Client.getByUID('page', uid);
		return {
			props: {
				document,
				uid
			}
		};
	}
</script>

<script>
	const source = 'Prismic';
	let motto = 'A fun place to call home';
	export let document, uid;
</script>

<main>
	<div class="header container" style="background-image:url('{document.data.image.url}">
		<h1>{document.data.title}</h1>
		<h2>{motto}</h2>
		<hr />
	</div>
	<div class="container">
		<p>
			This page is based on a tutorial from <a
				href="https://prismic.io/blog/svelte-sveltekit-tutorial">{source}</a
			>
		</p>
		<p>{@html PrismicDom.RichText.asHtml(document.data.content)}</p>
		<!-- <input bind:value={motto} /> -->
	</div>
</main>

<style>
	.header {
		color: chocolate;
		background-size: contain;
		background-repeat: no-repeat;
		background-position-x: right;
		min-height: 25vw;
		padding-top: 2rem;
		justify-content: flex-end;
		max-width: 700px;
		margin: 0 auto;
	}
</style>
