import { range, multiKWMatch } from './utilise';

describe('utilise', () => {
	it('range function', () => {
		const min = 9;
		const max = 9.5;
		for (let i = 0; i < 500; i++) {
			const n = range(min, max);
			expect(n).toBeGreaterThanOrEqual(min);
			expect(n).toBeLessThanOrEqual(max);
		}
	});
});

describe('multiKWMatch', () => {
	it('false if q is empty', () => {
		expect(multiKWMatch('', 'abc')).toBeFalsy();
	});

	it('false if toMatch is empty', () => {
		expect(multiKWMatch('aaa', '')).toBeFalsy();
	});

	it('true if single kw match', () => {
		expect(multiKWMatch('apple', `I love Apple`)).toBeTruthy();
	});

	it('true if multi kw match', () => {
		expect(multiKWMatch('apple, love', `I love Apple`)).toBeTruthy();
	});

	it('false if not all match', () => {
		expect(multiKWMatch('aPPle, loves', `I love apple`)).toBeFalsy();
	});
});
