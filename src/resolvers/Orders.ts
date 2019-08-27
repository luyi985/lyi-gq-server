import { IOrder, IOrders } from '../types';
import uuid from 'uuid';
import { getOrders } from '../fake';

export default () => {
	//console.log(parents, args, context, info);
	const items = getOrders(10);
	return { items };
};
