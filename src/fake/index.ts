import faker from 'faker';
import uuid from 'uuid';
import { ICustomer, IOrder, IOrderItem, IProductItem, ITag, IPost } from '../types';

export const postBase = (): IPost => ({
	id: uuid.v1(),
	author: `${faker.name.firstName()} ${faker.name.lastName()}`,
	comment: faker.lorem.lines(2),
});

const tagMaker = (value: string, label?: string): ITag => ({
	id: uuid.v4(),
	label: label || value,
	value,
});
export const tagBase = () => tagMaker(faker.commerce.productMaterial());

export const customerBase = (): ICustomer => ({
	id: uuid.v4(),
	name: `${faker.name.firstName()} ${faker.name.lastName()}`,
	email: faker.internet.email(),
	mobile: faker.phone.phoneNumber(),
	wechat: faker.finance.account(),
	address1: faker.address.streetAddress(),
	address2: faker.address.stateAbbr(),
	address3: faker.address.zipCode(),
});

const orderItemBase = (): IOrderItem => ({
	id: uuid.v4(),
	name: faker.commerce.productName(),
	internalPrice: faker.commerce.price(2, 100),
	salePrice: faker.commerce.price(100, 200),
	description: faker.lorem.sentence(50, 100),
	brand: faker.commerce.department(),
	tags: [tagBase(), tagBase()],
	quantity: faker.random.number({ min: 1, max: 100 }),
});

export const orderBase = (): IOrder => ({
	id: uuid.v4(),
	orderTime: faker.date.recent().toUTCString(),
	deliverTime: faker.date.future().toUTCString(),
	customers: [customerBase()],
	hasDelivered: faker.random.boolean(),
	items: [orderItemBase(), orderItemBase(), orderItemBase()],
	tags: [tagBase(), tagBase()],
});

export const productBase = (): IProductItem => ({
	id: uuid.v4(),
	name: faker.commerce.productName(),
	internalPrice: faker.commerce.price(2, 100),
	salePrice: faker.commerce.price(100, 200),
	description: faker.lorem.lines(2),
	brand: faker.commerce.department(),
	tags: [tagBase(), tagBase()],
});

export const getProducts = (n: number) =>
	Array(n)
		.fill(null)
		.map(i => productBase());

export const getTags = (n: number) =>
	Array(n)
		.fill(null)
		.map(i => tagBase());

export const getOrders = (n: number) =>
	Array(n)
		.fill(null)
		.map(i => orderBase());

export const getCustomers = (n: number) =>
	Array(n)
		.fill(null)
		.map(i => customerBase());

export const getPosts = (n: number) =>
	Array(n)
		.fill(null)
		.map(i => postBase());

export default {
	products: getProducts(1000),
	orders: getOrders(1000),
	posts: getPosts(1000),
	tags: getTags(100),
	customers: getCustomers(1000),
};
