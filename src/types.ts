export interface IInputArg {
	args: { q: string };
}
export interface IProductItemBase {
	id: string;
	name: string;
	internalPrice: number | string;
	salePrice: number | string;
	description: string;
	brand: string;
	tags: ITag[];
}

export interface IPost {
	id: string;
	author: string;
	comment: string;
}

export interface ITag {
	id: string;
	label: string;
	value: string;
}

export interface ICustomer {
	id: string;
	name: string;
	wechat: string;
	email: string;
	mobile: string;
	address1: string;
	address2: string;
	address3: string;
}

export interface IProductItem extends IProductItemBase {}

export interface IOrderItem extends IProductItem {
	quantity: number;
}

export interface IOrder {
	id: string;
	orderTime: string;
	deliverTime: string;
	hasDelivered: boolean;
	customers: ICustomer[];
	items: IOrderItem[];
	tags: ITag[];
}

export interface IProducts {
	items: IProductItem[];
	total: number;
}

export interface IOrders {
	items: IOrder[];
	total: number;
}

export interface ITags {
	items: ITag[];
	total: number;
}

export interface ICustomers {
	items: ICustomer[];
	total: number;
}

export interface IPosts {
	items: IPost[];
	total: number;
}
export type IItem = ICustomer | IPost | IOrder | ITag | IProductItem;
