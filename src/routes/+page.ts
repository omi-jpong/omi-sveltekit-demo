import type { PageLoad } from './$types';

interface ProductsResponse {
	products: ProductListItem[];
	total: number;
	skip: number;
	limit: number;
}

export const load: PageLoad = async ({ fetch }) => {
	try {
		const res = await fetch('https://dummyjson.com/products');
		const data: ProductsResponse = await res.json();
		return data;
	} catch {
		return {
			products: [],
			total: 0,
			skip: 0,
			limit: 0
		};
	}
};
