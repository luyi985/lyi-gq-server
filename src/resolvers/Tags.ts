import { ITag, ITags } from '../types';
import uuid from 'uuid';
import { getTags } from '../fake';

export default () => {
	const items = getTags(10);
	//console.log(parents, args, context, info);
	return { items };
};
