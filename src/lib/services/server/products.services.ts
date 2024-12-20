import axiosClient from './axios/client';
import type { AxiosResponse } from 'axios';
import type { IFetchProduct, IFetchProducts, ProductResponse, ProductsResponse } from './types';

function fetchProducts({ search, page }: IFetchProducts): Promise<AxiosResponse<ProductsResponse>> {
	const params = { search, page };
	return axiosClient.get(`/products/search`, {
		params
	});
}

function fetchProduct({ id }: IFetchProduct): Promise<AxiosResponse<ProductResponse>> {
	return axiosClient.get(`/products/${id}`);
}

export const productsServices = {
	fetchProduct,
	fetchProducts
};
