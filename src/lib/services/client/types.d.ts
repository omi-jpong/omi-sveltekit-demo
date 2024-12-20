export interface IFetchMalls {
	next: string;
}

export interface MallsResponse {
	malls: Mall[];
	next: string | null;
}

export interface FetchMallsData {
	malls: Mall[];
	next: string | null;
}
