import { gql } from '@apollo/client';

export const coinbase = {
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
    query: gql`
        query GetRates {
            rates(currency: "USD") {
                currency
            }
        }
    `
}