<script lang="ts">
	import type { InputFieldProps } from '$lib/types/components.types';

	const { label = '', id, ...props }: InputFieldProps = $props();
</script>

<label for={id} class="input-field">
	{#if label}
		<span>{label}</span>
	{/if}
	<input {...props} {id} type="text" />
</label>

<style lang="scss">
	label.input-field {
		& > input[type='text'] {
			width: 100%;
			height: 32px;
			padding: 0 8px;

			border-color: var(--c-input-border);
			border-radius: 4px;
			border-style: solid;
			border-width: 1px;

			color: var(--c-input-text);
			font-family: var(--ff-primary);
			font-weight: 500;

			&:focus {
				border-color: var(--c-input-border_hover);
				outline: none;
			}
		}
	}
</style>
