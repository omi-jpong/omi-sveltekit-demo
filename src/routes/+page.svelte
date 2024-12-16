<script lang="ts">
	import { onMount } from 'svelte';
	import { fetchProducts } from '$lib/api/products';
	import InputField from '$lib/components/InputField.svelte';
	import ProductList from '$lib/components/ProductList.svelte';

	let search: string = $state('');
	let currentPage: number = $state(1);
	let total: number = $state(0);
	let products: ProductListItem[] = $state([]);
	let loading: boolean = $state(false);

	let timeout: ReturnType<typeof setTimeout>;

	async function getProducts(search: string, page: number = 1) {
		try {
			loading = true;

			const res = await fetchProducts({ search, page });

			products = res.data.products;
			currentPage = page;
			total = res.data.total;
		} catch (error) {
			products = [];
		} finally {
			loading = false;
		}
	}

	function debounceGetProducts(search: string) {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			getProducts(search, currentPage);
		}, 1000);
	}

	function handleSearchChange() {
		debounceGetProducts(search);
	}

	function handlePageChange(newPage: number) {
		getProducts(search, newPage);
	}

	onMount(() => {
		getProducts(search, currentPage);
	});
</script>

<svelte:head>
	<title>Products Demo</title>
</svelte:head>

<div class="container">
	<InputField
		id="product"
		placeholder="Search product"
		bind:value={search}
		oninput={handleSearchChange}
	/>
	<ProductList {products} {currentPage} setPage={handlePageChange} {total} {loading} />
</div>

<style lang="scss">
	div.container {
		max-width: 720px;
		margin: 0 auto;
		display: flex;
		flex-flow: column nowrap;
		gap: 16px;
	}
</style>
