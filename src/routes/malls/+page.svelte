<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import MallList from '$lib/components/MallList.svelte';
	import { mallsServices } from '$lib/services/malls.services';
	import type { BreadcrumbsProps } from '$lib/types/components.types';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	let malls: MallListItem[] = $state(data.malls);
	let next: string = $state(data.next);
	let hasNext: boolean = $state(data.hasNext);
	let loading: boolean = $state(false);

	async function handleMallsListNext() {
		try {
			loading = true;

			const data = await mallsServices.fetchMalls({ next });
			malls = [...malls, ...data.malls];
			next = data.next;
			hasNext = data.hasNext;
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
