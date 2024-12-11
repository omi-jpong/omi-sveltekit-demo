<script lang="ts">
	import InputField from '$lib/components/InputField.svelte';
	import ProductList from '$lib/components/ProductList.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const products = data.products;
</script>

<div class="container">
	<InputField id="product" placeholder="Search product" />
	<ProductList {products} />
</div>

<style lang="scss">
	div.container {
		display: flex;
		flex-flow: column nowrap;
		gap: 16px;
	}
</style>
