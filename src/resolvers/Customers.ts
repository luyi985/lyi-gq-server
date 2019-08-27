import { ICustomer, ICustomers } from '../types';
import uuid from 'uuid';
import { getCustomers } from '../fake';

export default () => {
	//console.log(parents, args, context, info);
	const items = getCustomers(10);
	return { items };
};
