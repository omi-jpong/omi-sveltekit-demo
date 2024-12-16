import { fetchProduct } from '$lib/api/products';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const id = params.id;

	try {
		const res = await fetchProduct({ id });
		return { product: res.data };
	} catch {
		return error(404);
	}
};
