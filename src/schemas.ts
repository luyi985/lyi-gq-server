import { gql } from 'apollo-server';

export default gql`
	type Query {
		"""
		Test Message.
		"""
		heartbeat: String!
	}
`;
