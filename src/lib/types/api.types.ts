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
