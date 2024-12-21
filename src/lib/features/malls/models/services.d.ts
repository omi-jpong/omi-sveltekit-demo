export interface FetchMallsParams {
	next: string;
	limit: number;
}

export interface FetchMallsRawData {
	malls: { pageInfo: PageInfo; totalCount: number; edges: Edge<Mall>[] };
}

export interface FetchMallsData {
	malls: Mall[];
	next: string | null;
}
