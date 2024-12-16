import type {
	IFetchProduct,
	IFetchProducts,
	ProductResponse,
	ProductsResponse
} from '$lib/types/api.types';
import axios, { type AxiosResponse } from 'axios';

const BASE_URL = 'https://dummyjson.com/products';

export function fetchProducts({
	search,
	page
}: IFetchProducts): Promise<AxiosResponse<ProductsResponse>> {
	const limit = 10;
	const skip = limit * (page - 1);
	const params = { q: search, limit, skip };
	return axios.get(`${BASE_URL}/search`, { params });
}

export function fetchProduct({ id }: IFetchProduct): Promise<AxiosResponse<ProductResponse>> {
	return axios.get(`${BASE_URL}/${id}`);
}
