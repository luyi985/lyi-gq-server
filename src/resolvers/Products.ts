import { IProductItem, IProducts } from '../types';
import uuid from 'uuid';
import { getProducts } from '../fake';

export default () => {
	//console.log(parents, args, context, info);
	const items = getProducts(10);
	return { items };
};
