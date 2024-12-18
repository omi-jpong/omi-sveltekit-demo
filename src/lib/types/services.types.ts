interface PageInfo {
	hasNextPage: boolean;
	hasPreviousPage: boolean;
	startCursor: string;
	endCursor: string;
}

export interface Edge<T> {
	cursor: string;
	node: T;
}

export interface IFetchProducts {
	search: string;
	page: number;
}

export interface ProductsResponse {
	products: ProductListItem[];
	total: number;
	skip: number;
	limit: number;
}

export interface IFetchProduct {
	id: string | number;
}

export type ProductResponse = ProductListItem;

export interface IFetchMalls {
	next: string;
}

export interface FetchMallsQuery {
	malls: { pageInfo: PageInfo; totalCount: number; edges: Edge<MallListItem>[] };
}

export interface MallsResponse {
	malls: MallListItem[];
	next: string;
	hasNext: boolean;
}
