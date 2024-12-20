<script lang="ts">
	import type { BreadcrumbsProps } from './types';

	let { current, links }: BreadcrumbsProps = $props();
</script>

<div class="breadcrumbs">
	{#each links as link}
		<a href={link.href}>{link.label}</a> &rsaquo; {' '}
	{/each}
	{' ' + current}
</div>

<style lang="scss">
	div.breadcrumbs {
		font-size: 12px;
	}
</style>
