import axiosClient from '$lib/config/client/axios';
import { MALL_LIST_SIZE } from './constants';
import type { AxiosResponse } from 'axios';
import type { GetMallsData, GetMallsParams } from '../models/api';

async function getMalls({ next }: GetMallsParams): Promise<GetMallsData> {
	try {
		const params = {
			limit: MALL_LIST_SIZE,
			next
		};
		const res: AxiosResponse<GetMallsData> = await axiosClient.get('/malls', { params });
		return { malls: res.data.malls, next: res.data.next };
	} catch {
		return { malls: [], next: '' };
	}
}

export const mallsApi = {
	getMalls
};
