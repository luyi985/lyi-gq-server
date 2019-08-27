import tags from './Tags';
import customers from './Customers';
import orders from './Orders';
import products from './Products';

export default {
	Query: {
		heartbeat: (): string => 'alive',
		tags,
		customers,
		orders,
		products,
	},
};
