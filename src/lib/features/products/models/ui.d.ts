export interface ProductListProps {
	products: Product[];
	currentPage: number;
	total: number;
	loading: boolean;
	setPage: (page: number) => void;
}
