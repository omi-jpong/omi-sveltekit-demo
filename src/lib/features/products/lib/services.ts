import axiosServer from '$lib/config/server/axios';
import { PRODUCT_LIST_SIZE } from './constants';
import type { AxiosResponse } from 'axios';
import type {
	FetchProductParams,
	FetchProductsParams,
	FetchProductData,
	FetchProductsData
} from '../models/lib';

function fetchProducts({
	search,
	page
}: FetchProductsParams): Promise<AxiosResponse<FetchProductsData>> {
	const params = { q: search, limit: PRODUCT_LIST_SIZE, skip: (page - 1) * PRODUCT_LIST_SIZE };
	return axiosServer.get(`/products/search`, {
		params
	});
}

function fetchProduct({ id }: FetchProductParams): Promise<AxiosResponse<FetchProductData>> {
	return axiosServer.get(`/products/${id}`);
}

export const productsServices = {
	fetchProducts,
	fetchProduct
};
