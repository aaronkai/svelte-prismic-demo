<script context="module">
	import Client from './../../utils/client';
	import PrismicDom from 'prismic-dom';
	import '../styles/reset.css';
	import '../styles/global.css';

	console.log(Client);
	export async function load() {
		const document = await Client.getByUID('page', 'homepage');
		return {
			props: {
				document
			}
		};
	}

	const source = 'Prismic';
	let motto = 'A fun place to call home';
</script>

<script>
	import { dataset_dev } from 'svelte/internal';

	export let document;
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
		color: salmon;
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
