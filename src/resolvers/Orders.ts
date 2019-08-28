import { IOrder, IOrders } from '../types';
import uuid from 'uuid';
import { getOrders } from '../fake';
import { itemFilter } from '../utilise';

const queryOrders = (root: any, args: any, context: any) => {
	console.log({ root, args, context });
	const items = itemFilter(args, getOrders(1000));
	const total = items.length;
	return { items, total };
};

export const ordersQuery = {
	orders: queryOrders,
};
