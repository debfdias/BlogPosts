import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  from,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_API_URL,
});

const authLink = setContext((_, { headers }) => {
  const modifiedHeader = {
    headers: {
      ...headers,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    },
  };
  return modifiedHeader;
});

const cache = new InMemoryCache();

const appLink = from([authLink, httpLink]);

export const client = new ApolloClient({
  link: appLink,
  cache,
});
