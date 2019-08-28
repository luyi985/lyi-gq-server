import { tagsQuery } from './Tags';
import { customersQuery } from './Customers';
import { ordersQuery } from './Orders';
import { productsQuery } from './Products';
import { postsQuery } from './Posts';

export default {
	Query: {
		heartbeat: (): string => 'alive',
		...tagsQuery,
		...customersQuery,
		...ordersQuery,
		...productsQuery,
		...postsQuery,
	},
};
