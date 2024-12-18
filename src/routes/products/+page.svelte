<script lang="ts">
	import { onMount } from 'svelte';
	import InputField from '$lib/components/InputField.svelte';
	import ProductList from '$lib/components/ProductList.svelte';
	import { productsServices } from '$lib/services/products.services';
	import type { BreadcrumbsProps } from '$lib/types/components.types';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';

	const services = productsServices;

	let search: string = $state('');
	let currentPage: number = $state(1);
	let total: number = $state(0);
	let products: ProductListItem[] = $state([]);
	let loading: boolean = $state(false);

	let timeout: ReturnType<typeof setTimeout>;

	async function getProducts(search: string, page: number = 1) {
		try {
			loading = true;

			const res = await services.fetchProducts({ search, page });

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

	const breadcrumbProps: BreadcrumbsProps = {
		current: 'Products',
		links: [{ href: '/', label: 'Home' }]
	};
</script>

<svelte:head>
	<title>Products Demo</title>
</svelte:head>

<div class="container">
	<Breadcrumbs {...breadcrumbProps} />
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
