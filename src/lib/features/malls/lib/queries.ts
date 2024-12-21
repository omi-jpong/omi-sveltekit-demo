import { gql } from 'graphql-request';

export const mallsQueries = {
	FETCH_MALLS: gql`
		query FetchMalls($first: Int, $after: String) {
			malls(first: $first, after: $after) {
				pageInfo {
					hasNextPage
					endCursor
				}
				totalCount
				edges {
					node {
						id
						name
						code
						provinceCode
						provinceName
						mobileNo
						telephoneNo
						serviceArea
						mallOpening
						mallClosing
						isServiceable
					}
				}
			}
		}
	`
};
