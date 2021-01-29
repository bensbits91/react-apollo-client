import { useQuery } from '@apollo/client';
import { coinbase } from '../../api/queries'

export default function ExchangeRateList() {
    const { loading, error, data } = useQuery(coinbase.queries.rates);
    console.log("🚀 ~ file: index.js ~ line 16 ~ List ~ data", data)

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
    return data.rates.map(({ currency, rate }) => (
      <div key={currency}>
        <p>
          {currency}: {rate}
        </p>
      </div>
    ));
  }
