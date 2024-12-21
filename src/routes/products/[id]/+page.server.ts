import { error } from '@sveltejs/kit';
import { productsServices } from '$features/products/lib/services';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, setHeaders }) => {
	setHeaders({ 'Cache-Control': 'max-age=60' });

	const id = params.id;

	try {
		const res = await productsServices.fetchProduct({ id });
		return {
			product: res.data
		};
	} catch {
		return error(500);
	}
};
