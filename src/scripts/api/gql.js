import {
    ApolloClient,
    ApolloLink,
    HttpLink,
    InMemoryCache,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const AUTH_TOKEN_KEY = 'auth_token';

const httpLink = new HttpLink({
    uri: `http://localhost:3000/shop-api/shop-api`,
    withCredentials: true,
});

const afterwareLink = new ApolloLink((operation, forward) => {
    return forward(operation).map((response) => {
        const context = operation.getContext();
        const authHeader = context.response.headers.get('vendure-auth-token');
        if (authHeader) {
            localStorage.setItem(AUTH_TOKEN_KEY, authHeader);
        }
        return response;
    });
});

const client = new ApolloClient({
    link: ApolloLink.from([
        setContext(() => {
            const authToken = localStorage.getItem(AUTH_TOKEN_KEY)
            if (authToken) {
                return {
                    headers: {
                        authorization: `Bearer ${authToken}`,
                    },
                }
            }
        }),
        afterwareLink,
        httpLink,
    ]),
    cache: new InMemoryCache(),
})

export default client;