import { IProductItem, IProducts } from '../types';
import uuid from 'uuid';
import { getProducts } from '../fake';

const queryProducts = (root: any, args: any, context: any) => {
	console.log({ root, args, context });
	const items = getProducts(1000);
	const total = items.length;
	return { items, total };
};

export const productsQuery = {
	products: queryProducts,
};
