import { GraphQLClient } from 'graphql-request';

const BASE_URL = 'https://develop.smop.asia/graphql/';

const gqlClient = new GraphQLClient(BASE_URL);

// Authorization

export default gqlClient;
