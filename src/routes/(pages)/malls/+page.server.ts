import { error } from '@sveltejs/kit';
import { serverServices } from '$services/server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	try {
		const data = await serverServices.malls.fetchMalls({ next: '', limit: 10 });
		return { malls: data.malls, next: data.next };
	} catch (err) {
		return error(400, (err as Error).message);
	}
};
