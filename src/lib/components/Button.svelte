<script lang="ts">
	import type { ButtonProps } from './types';

	const { label, maxWidth = false, ...props }: ButtonProps = $props();
</script>

<button {...props} class="btn contained" class:max-width={maxWidth}>
	<span>{label}</span>
</button>

<style lang="scss">
	button.btn {
		width: min-content;
		max-width: 100%;
		height: 32px;
		padding: 0 16px;

		white-space: nowrap;

		display: flex;
		align-items: center;
		justify-content: center;

		background: none;
		color: black;

		border-color: transparent;
		border-radius: 4px;
		border-style: solid;
		border-width: 1px;

		cursor: pointer;

		transition: 125ms ease-in-out all;

		& > span {
			font-size: 14px;
			font-weight: 500;
			font-family: var(--ff-primary);
		}

		&.contained {
			background: var(--c-button-contained-background);
			color: var(--c-button-contained-text);
			border-color: var(--c-button-contained-border);
		}

		&:hover {
			filter: brightness(1.5);
		}

		&:active {
			filter: contrast(1.5);
		}

		&.max-width {
			width: 100%;
		}

		&:disabled {
			opacity: 0.5;
		}
	}
</style>
