import { error } from '@sveltejs/kit';
import { productsServices } from '$features/products/lib/services';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url, setHeaders }) => {
	setHeaders({ 'Cache-Control': 'max-age=60' });

	const page = parseInt(url.searchParams.get('page') || '1') || 1;
	const search = url.searchParams.get('search') || '';

	try {
		const res = await productsServices.fetchProducts({ page, search });
		return {
			products: res.data.products,
			total: res.data.total,
			page,
			search
		};
	} catch {
		return error(500);
	}
};
