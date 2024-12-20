import gqlClient from './graphql/client';
import { queries } from '$services/server/queries';
import type { FetchMallsQuery, IFetchMalls, MallsResponse } from './types';

async function fetchMalls({ next, limit }: IFetchMalls): Promise<MallsResponse> {
	const filter = {
		first: limit,
		after: next
	};
	try {
		const data: FetchMallsQuery = await gqlClient.request(queries.malls.FETCH_MALLS, filter);
		return {
			malls: data.malls.edges.map((mall) => mall.node),
			next: data.malls.pageInfo.hasNextPage ? data.malls.pageInfo.endCursor : null
		};
	} catch {
		throw new Error('Something went wrong');
	}
}

export const mallsServices = {
	fetchMalls
};
