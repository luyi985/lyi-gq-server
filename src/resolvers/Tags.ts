import { ITag, ITags } from '../types';
import uuid from 'uuid';
import { getTags } from '../fake';
import { itemFilter } from '../utilise';
const queryTags = (root: any, args: any, context: any) => {
	console.log({ root, args, context });
	const items = itemFilter(args, getTags(1000));
	const total = items.length;
	return { items, total };
};

export const tagsQuery = {
	tags: queryTags,
};
