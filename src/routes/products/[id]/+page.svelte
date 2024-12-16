<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const product = data.product;
</script>

<svelte:head>
	<title>{product.title}</title>
</svelte:head>

<div class="container">
	<div class="breadcrumbs"><a href="/">Home</a> &rsaquo; {product.title}</div>
	{#if product}
		<article class="product-summary">
			<img src={product.thumbnail} alt={product.title} loading="lazy" />
			<strong>₱ {product.price}</strong>
			<h1>{product.title}</h1>
			<p>{product.description}</p>
		</article>
	{/if}
</div>

<style lang="scss">
	div.container {
		max-width: 720px;
		margin: 0 auto;
	}

	div.breadcrumbs {
		font-size: 12px;
	}

	article.product-summary {
		& > img {
			width: 100%;
			height: 240px;
			object-fit: contain;
		}
	}
</style>
