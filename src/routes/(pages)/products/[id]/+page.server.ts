import { error } from '@sveltejs/kit';
import { serverServices } from '$services/server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, setHeaders }) => {
	setHeaders({ 'Cache-Control': 'max-age=60' });

	const id = params.id;

	try {
		const res = await serverServices.products.fetchProduct({ id });
		return {
			product: res.data
		};
	} catch {
		return error(500);
	}
};
