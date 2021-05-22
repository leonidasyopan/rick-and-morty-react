import { ApolloClient, InMemoryCache } from '@apollo/client';

const endpoint = 'https://rickandmortyapi.com/graphql'

const client = new ApolloClient({
    uri: endpoint,
    cache: new InMemoryCache()
});

export default client;
