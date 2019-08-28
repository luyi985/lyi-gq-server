import { get } from 'lodash';
import { IInputArg, IItem } from './types';
export const range = (min: number, max: number): number => parseFloat((min + (max - min) * Math.random()).toFixed(2));

export const multiKWMatch = (q: string, toMatch: string): boolean => {
	if (!q || !toMatch) return false;
	const kws = q.split(',').map(k => k.trim().toLowerCase());
	return kws.reduce((res: boolean, ck: string) => res && toMatch.toLowerCase().includes(ck), true);
};

export const itemFilter = <P extends IItem>(args: IInputArg, list: P[]): P[] => {
	const q = get(args, 'args.q');
	if (!q) return list;
	try {
		return list.filter(item => multiKWMatch(q, JSON.stringify(item)));
	} catch (e) {
		return list;
	}
};
