import type { AxiosResponse } from 'axios';
import axiosClient from './axios/client';
import type { FetchMallsData, IFetchMalls, MallsResponse } from './types';

async function fetchMalls({ next }: IFetchMalls): Promise<FetchMallsData> {
	const filter = {
		limit: 10,
		next
	};

	try {
		const res: AxiosResponse<MallsResponse> = await axiosClient.get('/malls', { params: filter });
		return { malls: res.data.malls, next: res.data.next };
	} catch {
		return { malls: [], next: '' };
	}
}

export const mallsServices = {
	fetchMalls
};
