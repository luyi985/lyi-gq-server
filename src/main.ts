import dotenv from 'dotenv';
dotenv.config();
import { ApolloServer } from 'apollo-server';
import resolvers from './resolvers';
import typeDefs from './schemas';
import { environment } from './environment';

const server = new ApolloServer({
	resolvers,
	typeDefs,
	...environment.apollo,
});

server.listen(environment.port).then(({ url }) => console.log(`Server ready at ${url}. `));

// Hot Module Replacement
if (module.hot) {
	module.hot.accept();
	module.hot.dispose(() => console.log('Module disposed. '));
}
