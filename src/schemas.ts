import { gql } from 'apollo-server';

const ProductItemBase = `
	pid: ID!
	name: String!
	internalPrice: Float!
	salePrice: Float!
	description: String
	brand: String
	tags: [Tag]
`;

export default gql`
	input InputArgs {
		query: String
	}

	type Tag {
		tid: ID!
		label: String!
		value: String!
	}

	type ProductItem {
		${ProductItemBase}
	}

	type OrderItem {
		${ProductItemBase}
		quantity: Int!
	}

	type Order {
		oid: ID!
		orderTime: String!
		deliverTime: String!
		hasDelivered: Boolean!
		customers: [Customer!]!
		items: [OrderItem]
		tags: [Tag]
	}
	type Customer {
		cid: ID!
		name: String!
		email: String!
		mobile: String!
		wechat: String!
		address1: String
		address2: String
		address3: String
	}
	type Orders {
		items: [Order!]!
	}

	type Customers {
		items: [Customer!]!
	}

	type Tags {
		items: [Tag!]!
	}

	type Products {
		items: [ProductItem!]!
	}

	type Query {
		heartbeat: String!
		customers(args:InputArgs): Customers!
		orders(args:InputArgs): Orders!
		tags: Tags!
		products(args:InputArgs): Products!
	}
`;
