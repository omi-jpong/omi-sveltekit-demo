import { serverServices } from '$services/server';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ setHeaders, url }) => {
	setHeaders({ 'Cache-Control': 'max-age=3600' });

	const next = url.searchParams.get('next') || '';
	const limit = parseInt(url.searchParams.get('limit') || '10') || 10;

	try {
		const data = await serverServices.malls.fetchMalls({ next, limit });
		return json(data);
	} catch (err) {
		return error(500, (err as Error).message);
	}
};
