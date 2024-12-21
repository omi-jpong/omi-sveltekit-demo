<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import Breadcrumbs from '$components/Breadcrumbs.svelte';
	import InputField from '$components/InputField.svelte';
	import ProductList from '$features/products/ui/ProductList.svelte';
	import type { PageData } from './$types';
	import type { BreadcrumbsProps } from '$components/types';
	import type { Product } from '$features/products/models/lib';

	let { data: pageData }: { data: PageData } = $props();

	let search: string = $state(pageData.search);
	let loading: boolean = $state(false);

	let timeout: ReturnType<typeof setTimeout>;

	const products: Product[] = $derived(pageData.products);
	const total: number = $derived(pageData.total);
	const currentPage: number = $derived(pageData.page);

	async function getProducts(search: string, page: number = 1) {
		loading = true;
		await goto(`/products?page=${page}&search=${search}`);
		loading = false;
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
	<title>SvelteKit Demo | Products</title>
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
