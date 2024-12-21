export interface FetchProductsParams {
	search: string;
	page: number;
}

export interface FetchProductsData {
	products: Product[];
	total: number;
	skip: number;
	limit: number;
	message?: string;
}

export interface FetchProductParams {
	id: string | number;
}

export interface FetchProductData extends Product {
	message?: string;
}
