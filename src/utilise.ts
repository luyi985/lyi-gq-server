import { get } from 'lodash';
import { IInputArg, IItem } from './types';
export const range = (min: number, max: number): number => parseFloat((min + (max - min) * Math.random()).toFixed(2));

export const itemFilter = <P extends IItem>(args: IInputArg, list: P[]): P[] => {
	const q = get(args, 'args.q');
	if (!q) return list;
	try {
		return list.filter(item =>
			JSON.stringify(item)
				.toLowerCase()
				.includes(q.toLowerCase()),
		);
	} catch (e) {
		return list;
	}
};
