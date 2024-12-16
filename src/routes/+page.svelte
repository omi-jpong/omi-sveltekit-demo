<script lang="ts">
	import { fetchProducts } from '$lib/api/products';
	import InputField from '$lib/components/InputField.svelte';
	import ProductList from '$lib/components/ProductList.svelte';

	let search: string = $state('');
	let products: ProductListItem[] = $state([]);
	let initialLoad: boolean = $state(true);

	let timeout: ReturnType<typeof setTimeout>;

	async function getProducts(search: string, page: number = 1) {
		try {
			const res = await fetchProducts({ search, page });
			products = res.data.products;
		} catch (error) {
			products = [];
		}
	}

	function debounceGetProducts(search: string) {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			getProducts(search);
			initialLoad = false;
		}, 2000);
	}

	$effect(() => {
		initialLoad ? getProducts(search) : debounceGetProducts(search);
	});
</script>

<div class="container">
	<InputField id="product" placeholder="Search product" bind:value={search} />
	<ProductList {products} />
</div>

<style lang="scss">
	div.container {
		display: flex;
		flex-flow: column nowrap;
		gap: 16px;
	}
</style>
