import type { Mall } from './lib';

export interface GetMallsParams {
	next: string;
}

export interface GetMallsData {
	malls: Mall[];
	next: string | null;
}