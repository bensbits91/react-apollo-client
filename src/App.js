import './App.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { geo } from './api/queries'
// import ExchangeRateList from './pages/ExchangeRateList'
import CountryList from './pages/Geo/Country/List'

const client = new ApolloClient({
    uri: geo.uri,
    cache: new InMemoryCache()
})

function App() {
    return (
        <ApolloProvider client={client}>
            <div className="App">
                <CountryList />
            </div>
        </ApolloProvider>
    )
}

export default App;
