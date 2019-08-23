import { client } from './client';

describe('heartbeat', () => {
	let req: (data: object) => Promise<any>;
	beforeEach(() => {
		req = client('');
	});

	it('should return alive', async done => {
		const res = await req({
			operationName: null,
			variables: {},
			query: '{\n  heartbeat\n}\n',
		});
		expect(res.data).toEqual({
			data: {
				heartbeat: 'alive',
			},
		});
		done();
	});
});
