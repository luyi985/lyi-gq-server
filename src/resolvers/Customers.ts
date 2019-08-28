import { ICustomer, ICustomers } from '../types';
import uuid from 'uuid';
import { getCustomers } from '../fake';
import { itemFilter } from '../utilise';

const queryCustomers = (root: any, args: any, context: any) => {
	console.log({ root, args, context });
	const items = itemFilter(args, getCustomers(1000));
	const total = items.length;
	return { items, total };
};

export const customersQuery = {
	customers: queryCustomers,
};
