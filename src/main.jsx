import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import ReactDOM from 'react-dom';
import './index.css'
import App from './App.jsx'

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
} from "@apollo/client";

import {BrowserRouter} from "react-router-dom";

const client = new ApolloClient({
    uri: 'https://graphql-api-brown.vercel.app/api/graphql',
    cache: new InMemoryCache()
});

createRoot(document.getElementById('root')).render(
 <ApolloProvider client={client}>
     <BrowserRouter>
         <App />
     </BrowserRouter>
 </ApolloProvider>
)
