import { IProductItem, IProducts } from '../types';
import uuid from 'uuid';
import data from '../fake';
import { itemFilter } from '../utilise';
const queryProducts = (root: any, args: any, context: any) => {
	console.log({ root, args, context });
	const items = itemFilter(args, data.products);
	const total = items.length;
	return { items, total };
};

export const productsQuery = {
	products: queryProducts,
};
