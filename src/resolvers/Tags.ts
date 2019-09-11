import { ITag, ITags } from '../types';
import uuid from 'uuid';
import data from '../fake';
import { itemFilter } from '../utilise';
const queryTags = (root: any, args: any, context: any) => {
	console.log({ root, args, context });
	const items = itemFilter(args, data.tags);
	const total = items.length;
	return { items, total };
};

export const tagsQuery = {
	tags: queryTags,
};
