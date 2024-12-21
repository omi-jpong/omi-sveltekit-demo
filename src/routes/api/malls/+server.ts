import { error, json, type RequestHandler } from '@sveltejs/kit';
import { MALL_LIST_SIZE } from '$features/malls/lib/constants';
import { mallsServices } from '$features/malls/lib/services';

export const GET: RequestHandler = async ({ setHeaders, url }) => {
	setHeaders({ 'Cache-Control': 'max-age=3600' });

	const next = url.searchParams.get('next') || '';
	const limit = parseInt(url.searchParams.get('limit') || '10') || MALL_LIST_SIZE;

	try {
		const data = await mallsServices.fetchMalls({ next, limit });
		return json(data);
	} catch (err) {
		return error(500, (err as Error).message);
	}
};
