import axios, { type AxiosResponse } from 'axios';

interface IFetchProducts {
	search: string;
	page: number;
}

interface ProductsResponse {
	products: ProductListItem[];
	total: number;
	skip: number;
	limit: number;
}

export function fetchProducts({
	search,
	page
}: IFetchProducts): Promise<AxiosResponse<ProductsResponse>> {
	const limit = 10;
	const skip = limit * (page - 1);
	const params = { q: search, limit, skip };
	return axios.get('https://dummyjson.com/products/search', { params });
}
