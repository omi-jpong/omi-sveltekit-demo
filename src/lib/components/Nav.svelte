<script lang="ts">
	const links = [
		{ id: 'products', href: '/products', label: 'Products' },
		{ id: 'malls', href: '/malls', label: 'Malls' }
	];
</script>

<nav class="nav">
	<div class="container">
		<h1>Products Demo</h1>
		<ul class="menu">
			{#each links as link (link.id)}
				<li>
					<a href={link.href}>{link.label}</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<style lang="scss">
	nav.nav {
		border-bottom: 1px solid var(--c-nav-border);
		color: var(--c-nav-text);
	}

	div.container {
		width: 100%;
		max-width: 1080px;
		height: 60px;

		margin: 0 auto;

		display: flex;
		align-items: center;
		gap: 40px;
	}

	ul.menu {
		list-style: none;

		display: flex;
		flex-flow: row nowrap;
		gap: 16px;
		a {
			font-size: 14px;
			font-weight: 500;
			color: inherit;
		}
	}
</style>
