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
}

export {};
