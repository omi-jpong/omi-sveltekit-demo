// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	interface PageInfo {
		hasNextPage: boolean;
		hasPreviousPage: boolean;
		startCursor: string;
		endCursor: string;
	}

	interface Edge<T> {
		cursor: string;
		node: T;
	}

	interface Mall {
		id: string;
		name: string;
		code: string;
		provinceCode: string;
		provinceName: string;
		mobileNo: string;
		telephoneNo: string;
		serviceArea: string;
		mallOpening: string;
		mallClosing: string;
		isServiceable: boolean;
	}

	interface Product {
		id: number;
		title: string;
		description: string;
		category: string;
		price: number;
		thumbnail: string;
	}
}

export {};
