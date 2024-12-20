import gqlClient from './clients/graphql';
import { mallsQueries } from '$constants/queries/malls.queries';
import type { FetchMallsQuery, IFetchMalls, MallsResponse } from '$types/services.types';

const queries = mallsQueries;

async function fetchMalls({ next }: IFetchMalls): Promise<MallsResponse> {
	const filter = {
		first: 10,
		after: next
	};
	try {
		const data: FetchMallsQuery = await gqlClient.request(queries.FETCH_MALLS, filter);
		return {
			malls: data.malls.edges.map((mall) => mall.node),
			next: data.malls.pageInfo.endCursor,
			hasNext: data.malls.pageInfo.hasNextPage
		};
	} catch {
		throw new Error('Something went wrong');
	}
}

export const mallsServices = {
	fetchMalls
};
