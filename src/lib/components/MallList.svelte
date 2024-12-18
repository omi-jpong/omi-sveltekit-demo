<script lang="ts">
	import type { MallListProps } from '$lib/types/components.types';
	import Button from './Button.svelte';

	let { malls, onNext, enableNextButton }: MallListProps = $props();
</script>

<ul class="mall-list">
	{#each malls as mall (mall.id)}
		<li class="mall-item">
			<h2>{mall.name}</h2>
			<p>
				{mall.provinceName}<br />
				{mall.mobileNo}<br />
				{mall.mallOpening} - {mall.mallClosing}
			</p>
		</li>
	{/each}
</ul>
<Button disabled={!enableNextButton} label="Load More" onclick={onNext} maxWidth />

<style lang="scss">
	ul.mall-list {
		list-style: none;

		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 16px;

		li.mall-item {
			height: 96px;
			padding: 8px;

			display: flex;
			flex-flow: column nowrap;
			justify-content: space-between;
			gap: 4px;

			background: var(--c-mall-list-background);
			color: var(--c-mall-list-text);
			border: 1px solid var(--c-mall-list-border);
			border-radius: 4px;
			overflow: hidden;

			h2 {
				font-size: 16px;
			}

			p {
				font-size: 12px;
			}
		}
	}
</style>
