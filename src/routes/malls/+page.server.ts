import { error } from '@sveltejs/kit';
import { MALL_LIST_SIZE } from '$features/malls/lib/constants';
import { mallsServices } from '$features/malls/lib/services';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	try {
		const data = await mallsServices.fetchMalls({ next: '', limit: MALL_LIST_SIZE });
		return { malls: data.malls, next: data.next };
	} catch (err) {
		return error(400, (err as Error).message);
	}
};
