import type { HTMLButtonAttributes, HTMLInputAttributes } from 'svelte/elements';

export interface ButtonProps extends HTMLButtonAttributes {
	label: string;
}

export interface InputFieldProps extends HTMLInputAttributes {
	label?: string;
}
