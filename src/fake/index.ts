import faker from 'faker';
import uuid from 'uuid';
import { ICustomer, IOrder, IOrderItem, IProductItem, ITag } from '../types';

const tagMaker = (value: string, label?: string): ITag => ({
	tid: uuid.v4(),
	label: label || value,
	value,
});
const tagBase = () => tagMaker(faker.commerce.productMaterial());

const customerBase = (): ICustomer => ({
	cid: uuid.v4(),
	name: `${faker.name.firstName()} ${faker.name.lastName()}`,
	email: faker.internet.email(),
	mobile: faker.phone.phoneNumber(),
	wechat: faker.finance.account(),
	address1: faker.address.streetAddress(),
	address2: faker.address.stateAbbr(),
	address3: faker.address.zipCode(),
});

const orderItemBase = (): IOrderItem => ({
	pid: uuid.v4(),
	name: faker.commerce.productName(),
	internalPrice: faker.commerce.price(2, 100),
	salePrice: faker.commerce.price(100, 200),
	description: faker.lorem.sentence(50, 100),
	brand: faker.commerce.department(),
	tags: [tagBase(), tagBase()],
	quantity: faker.random.number({ min: 1, max: 100 }),
});

const orderBase = (): IOrder => ({
	oid: uuid.v4(),
	orderTime: faker.date.recent().toUTCString(),
	deliverTime: faker.date.future().toUTCString(),
	customers: [customerBase()],
	hasDelivered: faker.random.boolean(),
	items: [orderItemBase(), orderItemBase(), orderItemBase()],
	tags: [tagBase(), tagBase()],
});

const productBase = (): IProductItem => ({
	pid: uuid.v4(),
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
