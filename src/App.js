import logo from './logo.svg';
import './App.css';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { coinbase } from './queries/queries'

const client = new ApolloClient({
  uri: coinbase.uri,
  cache: new InMemoryCache()
});

client
  .query({
    query: coinbase.query
  })
  .then(result => console.log(result));



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
