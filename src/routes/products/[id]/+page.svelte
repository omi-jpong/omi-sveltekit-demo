<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import type { BreadcrumbsProps } from '$lib/types/components.types';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const product = data.product;
	const breadcrumbProps: BreadcrumbsProps = {
		current: product.title,
		links: [
			{ href: '/', label: 'Home' },
			{ href: '/products', label: 'Products' }
		]
	};
</script>

<svelte:head>
	<title>{product.title}</title>
</svelte:head>

<div class="container">
	<Breadcrumbs {...breadcrumbProps} />
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

	article.product-summary {
		& > img {
			width: 100%;
			height: 240px;
			object-fit: contain;
		}
	}
</style>
