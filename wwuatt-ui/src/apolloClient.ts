import ApolloClient from 'apollo-boost';

const apolloClient = new ApolloClient<{}>({
  uri: process.env.VUE_APP_SERVICE_URL,
});

export default apolloClient;
