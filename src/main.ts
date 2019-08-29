import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { createServer } from 'http';
import { ApolloServer } from 'apollo-server-express';
import resolvers from './resolvers';
import typeDefs from './schemas';
import { environment } from './environment';

const app = express();

const apolloServer = new ApolloServer({
	resolvers,
	typeDefs,
	...environment.apollo,
});
apolloServer.applyMiddleware({ app });
const httpServer = createServer(app);
apolloServer.installSubscriptionHandlers(httpServer);

httpServer.listen(environment.port,() => {
	console.log(`🚀 Server ready at http://localhost:${environment.port}${apolloServer.graphqlPath}`)
	console.log(`🚀 Subscriptions ready at ws://localhost:${environment.port}${apolloServer.subscriptionsPath}`)
})
// Hot Module Replacement
if (module.hot) {
	module.hot.accept();
	module.hot.dispose(() => console.log('Module disposed. '));
}
