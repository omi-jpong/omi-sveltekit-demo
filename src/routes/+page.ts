import { getProducts } from '$lib/api/products';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	try {
		const res = await getProducts({ search: 'Phone', page: 1 });
		const data = res.data;
		return data;
	} catch {
		return {
			products: [],
			total: 0
		};
	}
};
