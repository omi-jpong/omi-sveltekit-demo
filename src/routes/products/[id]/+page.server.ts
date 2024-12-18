import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { productsServices } from '$lib/services/products.services';

const services = productsServices;

export const load: PageServerLoad = async ({ params }) => {
	const id = params.id;

	try {
		const res = await services.fetchProduct({ id });
		return { product: res.data };
	} catch {
		return error(404);
	}
};
