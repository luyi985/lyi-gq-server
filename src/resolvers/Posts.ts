const { PubSub } = require('apollo-server');
const pubsub = new PubSub();
import { IPost, IPosts } from '../types';
import uuid from 'uuid';
import data from '../fake';
import { itemFilter } from '../utilise';

const queryPosts = (root: any, args: any, context: any) => {
	console.log({ root, args, context });
	const items = itemFilter(args, data.posts);
	const total = items.length;
	return { items, total };
};

export const postsQuery = {
	posts: queryPosts,
};
