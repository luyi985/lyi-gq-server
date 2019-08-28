import { IProductItem, IProducts } from '../types';
import uuid from 'uuid';
import { getProducts } from '../fake';
import { itemFilter } from '../utilise';
const queryProducts = (root: any, args: any, context: any) => {
	console.log({ root, args, context });
	const items = itemFilter(args, getProducts(1000));
	const total = items.length;
	return { items, total };
};

export const productsQuery = {
	products: queryProducts,
};
