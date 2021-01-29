import './App.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { geo } from './api/queries'
// import ExchangeRateList from './pages/ExchangeRateList'
import CountryList from './pages/Geo/Country/List'
import CountryItem from './pages/Geo/Country/Item'
import NotFoundPage from './pages/NotFoundPage'
import { useRoutes } from 'hookrouter';

const routes = {
    '/': () => <CountryList />,
    '/countries': () => <CountryList />,
    '/countries/:id': ({id}) => <CountryItem itemId={id} />
};


const client = new ApolloClient({
    uri: geo.uri,
    cache: new InMemoryCache()
})

function App() {
    const routeResult = useRoutes(routes)

    return (
        <ApolloProvider client={client}>
            <div className="App">
                {routeResult || <NotFoundPage />}
            </div>
        </ApolloProvider>
    )
}

export default App;
