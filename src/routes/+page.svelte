<script lang="ts">
	import { fetchProducts } from '$lib/api/products';
	import InputField from '$lib/components/InputField.svelte';
	import ProductList from '$lib/components/ProductList.svelte';

	let search: string = $state('');
	let currentPage: number = $state(1);
	let total: number = $state(0);
	let products: ProductListItem[] = $state([]);
	let initialLoad: boolean = $state(true);

	let timeout: ReturnType<typeof setTimeout>;

	async function getProducts(search: string, page: number = 1) {
		try {
			initialLoad = false;

			const res = await fetchProducts({ search, page });

			products = res.data.products;
			currentPage = page;
			total = res.data.total;
		} catch (error) {
			products = [];
		}
	}

	function debounceGetProducts(search: string) {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			getProducts(search, currentPage);
		}, 1000);
	}

	function handlePageChange(newPage: number) {
		getProducts(search, newPage);
	}

	$effect(() => {
		initialLoad ? getProducts(search) : debounceGetProducts(search);
	});
</script>

<div class="container">
	<InputField id="product" placeholder="Search product" bind:value={search} />
	<ProductList {products} {currentPage} setPage={handlePageChange} {total} />
</div>

<style lang="scss">
	div.container {
		display: flex;
		flex-flow: column nowrap;
		gap: 16px;
	}
</style>
