import { error } from '@sveltejs/kit';
import { mallsServices } from '$services/malls.services';
import type { PageServerLoad } from './$types';

const services = mallsServices;

export const load: PageServerLoad = async () => {
	try {
		const data = await services.fetchMalls({ next: '' });
		return { malls: data.malls, next: data.next, hasNext: data.hasNext };
	} catch (err) {
		return error(400, (err as Error).message);
	}
};
