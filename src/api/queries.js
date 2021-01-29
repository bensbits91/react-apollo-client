import { gql } from '@apollo/client';

export const coinbase = {
    uri: 'https://48p1r2roz4.sse.codesandbox.io',

    queries: {
        currency_only: gql`
            query GetRates {
                rates(currency: "USD") {
                    currency
                }
            }
        `,

        rates: gql`
            query GetExchangeRates {
                rates(currency: "USD") {
                    currency
                    rate
                }
            }
        `
    }
}

export const geo = /* (code = "AD") => ( */{
    uri: 'https://countries.trevorblades.com/',

    queries: {
        continents: gql`
            query GetContinents {
                continents {
                    code
                    name
                }
            }
        `,

        continentsWithCountries: gql`
            query GetContinentsWithCountries {
                continents {
                    code
                    name
                    countries {
                        name
                    }
                }
            }
          `,

        countries: gql`
            query GetCountries {
                countries {
                    code
                    name
                    native
                    phone
                    continent {
                        name
                    }
                    capital
                    currency
                    languages {
                        name
                    }
                    emoji
                    emojiU
                    states {
                        name
                    }
                }
            }
        `,

        country: gql`
            query GetCountry {
                country(code: "AD") {
                    code
                    name
                    native
                    phone
                    continent {
                        name
                    }
                    capital
                    currency
                    languages {
                        name
                    }
                    emoji
                    emojiU
                    states {
                        name
                    }
                }
            }
        `



    }
}/* ) */

// export const country = (code) => {
//     return ({
//         uri: 'https://countries.trevorblades.com/',

//         queries: {
//             country: gql`
//                 query GetCountry {
//                     country(code: ${code}) {
//                         code
//                         name
//                         native
//                         phone
//                         continent {
//                             name
//                         }
//                         capital
//                         currency
//                         languages {
//                             name
//                         }
//                         emoji
//                         emojiU
//                         states {
//                             name
//                         }
//                     }
//                 }
//             `
//         }
//     })
// }