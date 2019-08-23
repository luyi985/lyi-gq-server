import request from 'axios';
const base = 'http://127.0.0.1:4001';
type RType = (endpoint?: string) => (data: object) => Promise<any>;

export const client: RType = (endpoint = '') => data =>
	request({
		method: 'POST',
		url: `${base}${endpoint}`,
		data,
		headers: {
			Accept: 'application/json, text/plain, */*',
			'Content-Type': 'application/json;charset=utf-8',
		},
	});
