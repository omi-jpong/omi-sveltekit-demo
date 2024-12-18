import type {
	IFetchProduct,
	IFetchProducts,
	ProductResponse,
	ProductsResponse
} from '$lib/types/api.types';
import type { AxiosResponse } from 'axios';
import axiosClient from './clients/axios';

export function fetchProducts({
	search,
	page
}: IFetchProducts): Promise<AxiosResponse<ProductsResponse>> {
	const limit = 10;
	const skip = limit * (page - 1);
	const params = { q: search, limit, skip };
	return axiosClient.get(`/products/search`, { params });
}

export function fetchProduct({ id }: IFetchProduct): Promise<AxiosResponse<ProductResponse>> {
	return axiosClient.get(`/products/${id}`);
}
