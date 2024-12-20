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
	products: Product[];
	total: number;
	skip: number;
	limit: number;
	message?: string;
}

export interface IFetchProduct {
	id: string | number;
}

export interface ProductResponse extends Product {
	message?: string;
}

export interface IFetchMalls {
	next: string;
	limit: number;
}

export interface FetchMallsQuery {
	malls: { pageInfo: PageInfo; totalCount: number; edges: Edge<Mall>[] };
}

export interface MallsResponse {
	malls: Mall[];
	next: string | null;
}
