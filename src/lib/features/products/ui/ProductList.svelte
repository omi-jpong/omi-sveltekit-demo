<script lang="ts">
	import Pagination from '../../../components/Pagination.svelte';
	import { PRODUCT_LIST_SIZE } from '../lib/constants';
	import type { ProductListProps } from '../models/ui';

	let { products, currentPage, setPage, total, loading }: ProductListProps = $props();
</script>

<div class="product-list">
	<div class="list-header">
		<div class="row">
			<div class="cell">Thumbnail</div>
			<div class="cell">Name</div>
			<div class="cell">Price</div>
		</div>
	</div>
	<div class="list-body">
		{#if loading}
			<div class="row"><div class="cell loading">Fetching products...</div></div>
		{:else if products.length === 0 && total > 0}
			<div class="row"><div class="cell loading">No products found on this page</div></div>
		{:else if products.length === 0}
			<div class="row"><div class="cell loading">No products found</div></div>
		{:else}
			{#each products as product (product.id)}
				<div class="row">
					<div class="cell thumbnail">
						<img alt={product.title} src={product.thumbnail} loading="lazy" />
					</div>
					<div class="cell info">
						<h3><a href={`/products/${product.id}`}>{product.title}</a></h3>
						<p>{product.description}</p>
					</div>
					<div class="cell price">₱ {product.price}</div>
				</div>
			{/each}
		{/if}
	</div>
	{#if total > 0}
		<div class="product-footer">
			<Pagination size={PRODUCT_LIST_SIZE} {currentPage} {total} {setPage} />
		</div>
	{/if}
</div>

<style lang="scss">
	div.product-list {
		border: 1px solid var(--c-product-list-border);
		border-radius: 4px;
		overflow: hidden;
	}

	div.row {
		display: grid;
		grid-template-columns: 2fr 4fr 1fr;

		div.cell {
			padding: 8px 16px;
			overflow: hidden;
			overflow-wrap: break-word;

			font-size: 14px;

			&.loading {
				padding: 16px;
				grid-column: 1/4;
				text-align: center;
			}
		}

		div.cell.thumbnail {
			text-align: center;

			img {
				max-width: 100%;
				height: 120px;
				object-fit: contain;
			}
		}

		div.cell.info {
			h3 {
				margin-bottom: 8px;
				font-size: 16px;

				a {
					color: var(--c-product-list-body-text-title);
				}
			}

			p {
				max-width: 70ch;
			}
		}

		div.cell.price {
			font-size: 16px;
			font-weight: 500;
		}

		div.cell.info,
		div.cell.price {
			padding: 20px 16px;
		}
	}

	div.list-header {
		div.cell {
			display: flex;
			align-items: center;

			background: var(--c-product-list-header-background);
			color: var(--c-product-list-header-text);

			font-weight: 500;
		}
	}

	div.list-body {
		div.row {
			border-bottom: 1px solid var(--c-product-list-border);

			&:last-of-type {
				border-bottom: none;
			}
		}

		div.cell {
			background: var(--c-product-list-body-background);
			color: var(--c-product-list-body-text);
		}
	}
</style>
