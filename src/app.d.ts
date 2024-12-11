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

	interface ProductListItem {
		id: number;
		title: string;
		description: string;
		category: string;
		price: number;
		thumbnail: string;
	}
}

export {};
