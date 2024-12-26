<script lang="ts">
	import Breadcrumbs from '$components/Breadcrumbs.svelte';
	import { mallsApi } from '$features/malls/lib/api';
	import MallList from '$features/malls/ui/MallList.svelte';
	import type { PageData } from './$types';
	import type { BreadcrumbsProps } from '$components/types';

	let { data: pageData }: { data: PageData } = $props();

	let malls: Mall[] = $state(pageData.malls);
	let next: string = $state(pageData.next || '');
	let hasNext: boolean = $derived(!!pageData.next);
	let loading: boolean = $state(false);

	async function handleMallsListNext() {
		try {
			loading = true;
			const data = await mallsApi.getMalls({ next });
			malls = [...malls, ...data.malls];
			next = data.next || '';
		} catch {
			window.alert('Something went wrong');
		} finally {
			loading = false;
		}
	}

	const breadcrumbProps: BreadcrumbsProps = {
		current: 'Malls',
		links: [{ href: '/', label: 'Home' }]
	};

	const enableNextButton = $derived(!loading && hasNext);
</script>

<svelte:head>
	<title>SvelteKit Demo | Malls</title>
</svelte:head>

<div class="container">
	<Breadcrumbs {...breadcrumbProps} />
	<MallList {malls} onNext={handleMallsListNext} {enableNextButton} />
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
