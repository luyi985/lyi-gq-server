import { range } from './utilise';

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
