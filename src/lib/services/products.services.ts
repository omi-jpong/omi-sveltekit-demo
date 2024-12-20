import type {
	IFetchProduct,
	IFetchProducts,
	ProductResponse,
	ProductsResponse
} from '$types/services.types';
import type { AxiosResponse } from 'axios';
import axiosClient from './clients/axios';

function fetchProducts({ search, page }: IFetchProducts): Promise<AxiosResponse<ProductsResponse>> {
	const limit = 10;
	const skip = limit * (page - 1);
	const params = { q: search, limit, skip };
	return axiosClient.get(`/products/search`, { params });
}

function fetchProduct({ id }: IFetchProduct): Promise<AxiosResponse<ProductResponse>> {
	return axiosClient.get(`/products/${id}`);
}

export const productsServices = {
	fetchProduct,
	fetchProducts
};
