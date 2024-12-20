<script lang="ts">
	import { LightPaginationNav } from 'svelte-paginate';
	import type { PaginationProps } from '$types/components.types';

	let { currentPage, size, total, setPage }: PaginationProps = $props();
</script>

<LightPaginationNav
	totalItems={total}
	pageSize={size}
	{currentPage}
	limit={1}
	showStepOptions={true}
	on:setPage={(e) => setPage(e.detail.page)}
/>
