import { gql } from 'apollo-server';

const ProductItemBase = `
	id: ID!
	name: String!
	internalPrice: Float!
	salePrice: Float!
	description: String
	brand: String
	tags: [Tag]
`;

export default gql`

    type Post {
		id: ID!
    	author: String
    	comment: String
  	}
	  
	input InputArgs {
		q: String
	}

	type Tag {
		id: ID!
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
		id: ID!
		orderTime: String!
		deliverTime: String!
		hasDelivered: Boolean!
		customers: [Customer!]!
		items: [OrderItem]
		tags: [Tag]
	}
	type Customer {
		id: ID!
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
		total: Int!
	}

	type Customers {
		items: [Customer!]!
		total: Int!
	}

	type Tags {
		items: [Tag!]!
		total: Int!
	}

	type Products {
		items: [ProductItem!]!
		total: Int!
	}

	type Posts {
		items: [Post]!
		total: Int!
	}

	type Query {
		heartbeat: String!
		customers(args:InputArgs): Customers!
		orders(args:InputArgs): Orders!
		tags(args:InputArgs): Tags!
		products(args:InputArgs): Products!
		posts(args:InputArgs): Posts!
	}
	
	type Mutation {
		addPost(author:String, comment:String):Post
	}

	type Subscription {
    	postAdded: Post
  	}
`;
