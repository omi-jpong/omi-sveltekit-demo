import type { HTMLButtonAttributes, HTMLInputAttributes } from 'svelte/elements';

export interface ButtonProps extends HTMLButtonAttributes {
	label: string;
}

export interface InputFieldProps extends HTMLInputAttributes {
	label?: string;
}

export interface ProductListProps {
	products: ProductListItem[];
	currentPage: number;
	total: number;
	loading: boolean;
	setPage: (page: number) => void;
}

export interface PaginationProps {
	size: number;
	currentPage: number;
	total: number;
	setPage: (page: number) => void;
}

export interface BreadcrumbsProps {
	links: {
		href: string;
		label: string;
	}[];
	current: string;
}
