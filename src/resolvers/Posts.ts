const POST_ADDED = 'POST_ADDED';
const { PubSub } = require('apollo-server');
const pubsub = new PubSub();
import { IPost, IPosts } from '../types';
import uuid from 'uuid';
import { getPosts, postBase } from '../fake';
import { itemFilter } from '../utilise';

const postsPool = [...getPosts(5)];

interface IPostMaker {
	args: Pick<IPost, 'author' | 'comment'>;
}

const queryPosts = (root: any, args: any, context: any) => {
	console.log({ root, args, context });
	const items = itemFilter(args, postsPool);
	const total = items.length;
	return { items, total };
};

export const postsQuery = {
	posts: queryPosts,
};

export const postMutation = {
	addPost(root: any, args: IPostMaker, context: any): IPost {
		const {
			args: { comment, author },
		} = args;
		const newPost = { ...postBase(), comment, author };
		postsPool.push(newPost);
		pubsub.publish(POST_ADDED, { postAdded: { ...newPost } });
		return newPost;
	},
};

export const postSubscription = {
	postAdded: {
		subscribe: () => pubsub.asyncIterator([POST_ADDED]),
	},
};
