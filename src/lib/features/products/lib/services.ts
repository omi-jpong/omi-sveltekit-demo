import axiosServer from '$lib/config/server/axios';
import { PRODUCT_LIST_SIZE } from './constants';
import type { AxiosResponse } from 'axios';
import type {
	FetchProductParams,
	FetchProductsParams,
	FetchProductData,
	FetchProductsData
} from '../models/services';

async function fetchProducts({ search, page }: FetchProductsParams): Promise<FetchProductsData> {
	try {
		const params = { q: search, limit: PRODUCT_LIST_SIZE, skip: (page - 1) * PRODUCT_LIST_SIZE };
		const res: AxiosResponse<FetchProductsData> = await axiosServer.get(`/products/search`, {
			params
		});
		return res.data;
	} catch {
		throw new Error('Failed to fetch products');
	}
}

async function fetchProduct({ id }: FetchProductParams): Promise<FetchProductData> {
	try {
		const res: AxiosResponse<FetchProductData> = await axiosServer.get(`/products/${id}`);
		return res.data;
	} catch {
		throw new Error('Failed to fetch product');
	}
}

export const productsServices = {
	fetchProducts,
	fetchProduct
};
