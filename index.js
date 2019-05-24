/**
 * @format
 */
import React from "react";
import { AppRegistry } from "react-native";
import App from "./App";
import ContextWrapper from "./contextWrapper";
import { name as appName } from "./app.json";
import {ApolloClient, HttpLink, InMemoryCache} from "apollo-boost";
import { ApolloProvider} from "react-apollo";
import {URI_STRING} from "react-native-dotenv"

const client = new ApolloClient({
    link: new HttpLink({
        uri: URI_STRING
    }),
  cache: new InMemoryCache()
  
});

const WrappedApp = () => (
  <ApolloProvider client={client}>
    <ContextWrapper>
      <App />
    </ContextWrapper>
   </ApolloProvider>
);

AppRegistry.registerComponent(appName, () => WrappedApp);
