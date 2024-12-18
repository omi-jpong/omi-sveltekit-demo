import gqlClient from './clients/graphql';
import { mallsQueries } from './queries/malls.queries';

const queries = mallsQueries;

function fetchMalls() {
	return gqlClient.request(queries.GET_MALLS);
}

export const mallsServices = {
	fetchMalls
};
