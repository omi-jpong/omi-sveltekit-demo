import gqlClient from '$lib/config/server/graphql';
import { mallsQueries } from './queries';
import type { FetchMallsRawData, FetchMallsParams, FetchMallsData } from '../models/services';

async function fetchMalls({ next, limit }: FetchMallsParams): Promise<FetchMallsData> {
	try {
		const params = {
			first: limit,
			after: next
		};
		const data: FetchMallsRawData = await gqlClient.request(mallsQueries.FETCH_MALLS, params);
		return {
			malls: data.malls.edges.map((mall) => mall.node),
			next: data.malls.pageInfo.hasNextPage ? data.malls.pageInfo.endCursor : null
		};
	} catch {
		throw new Error('Failed to fetch malls');
	}
}

export const mallsServices = { fetchMalls };
