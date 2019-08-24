import { client } from './client';

interface IQuery {
	operationName: string | null;
	variables: object;
	query: string;
}

type QueryMakeType = (query?: string, variables?: object, operationName?: string | null) => IQuery;

const queryMaker: QueryMakeType = (query = `{heartbeat}`, variables = {}, operationName = null) => ({
	operationName,
	variables,
	query,
});

describe('heartbeat', () => {
	let req: (data: object) => Promise<any>;
	beforeEach(() => {
		req = client('');
	});

	it('should return alive', async done => {
		const res = await req(queryMaker());
		expect(res.data).toEqual({
			data: { heartbeat: 'alive' },
		});
		done();
	});
});
