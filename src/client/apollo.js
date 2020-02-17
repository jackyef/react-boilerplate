import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        {graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );}

      if (networkError) {console.log(`[Network error]: ${networkError}`);}
    }),
    new HttpLink({
			uri: window.__GRAPHQL_PROXY_ENABLE__ ? '/graphql' : window.__GRAPHQL_URI__,
			credentials: 'include'
    })
  ]),
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
  ssrForceFetchDelay: 100,
});

export default client;
