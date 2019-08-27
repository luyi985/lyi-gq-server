export interface IProductItemBase {
	pid: string;
	name: string;
	internalPrice: number | string;
	salePrice: number | string;
	description: string;
	brand: string;
	tags: ITag[];
}

export interface ITag {
	tid: string;
	label: string;
	value: string;
}

export interface ICustomer {
	cid: string;
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
	oid: string;
	orderTime: string;
	deliverTime: string;
	hasDelivered: boolean;
	customers: ICustomer[];
	items: IOrderItem[];
	tags: ITag[];
}

export interface IProducts {
	items: IProductItem[];
}

export interface IOrders {
	items: IOrder[];
}

export interface ITags {
	items: ITag[];
}

export interface ICustomers {
	items: ICustomer[];
}
