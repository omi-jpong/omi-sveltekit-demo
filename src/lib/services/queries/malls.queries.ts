import { gql } from 'graphql-request';

export const mallsQueries = {
	GET_MALLS: gql`
		query Malls {
			malls(first: 20) {
				edges {
					node {
						id
					}
				}
			}
		}
	`
};
