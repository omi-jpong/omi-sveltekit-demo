import { error } from '@sveltejs/kit';
import { productsServices } from '$features/products/lib/services';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url, setHeaders }) => {
	setHeaders({ 'Cache-Control': 'max-age=60' });

	const search = url.searchParams.get('search') || '';
	const page = Number(url.searchParams.get('page')) || 1;

	try {
		const data = await productsServices.fetchProducts({ page, search });
		return {
			products: data.products,
			total: data.total,
			page,
			search
		};
	} catch {
		return error(500);
	}
};
