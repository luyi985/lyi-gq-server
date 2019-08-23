const defaultPort = 4000;
interface Environment {
	apollo: {
		introspection: boolean;
		playground: boolean;
		cros: object | boolean;
	};
	port: number | string;
}

export const environment: Environment = {
	apollo: {
		introspection: process.env.APOLLO_INTROSPECTION === 'true',
		playground: process.env.APOLLO_PLAYGROUND === 'true',
		cros: process.env.APOLLO_CROS === 'true',
	},
	port: process.env.PORT || defaultPort,
};
