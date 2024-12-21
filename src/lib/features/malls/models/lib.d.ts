export interface Mall {
	id: string;
	name: string;
	code: string;
	provinceCode: string;
	provinceName: string;
	mobileNo: string;
	telephoneNo: string;
	serviceArea: string;
	mallOpening: string;
	mallClosing: string;
	isServiceable: boolean;
}

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
