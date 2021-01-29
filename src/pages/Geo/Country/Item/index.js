import { useQuery } from '@apollo/client';
import { geo } from '../../../../api/queries'

export default function CountryList() {
    const { loading, error, data } = useQuery(geo.queries.country)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>

    console.log("🚀 ~ file: index.js ~ line 16 ~ List ~ data", data)

    const { code, name, languages, phone, native, capital } = data

    return (
        <div key={code}>
            <div key='info'>
                {code}: {name}
            </div>
            {languages &&
                <div key='lang'>
                    Languages:
          {languages.map((l, idx) =>
                    <span key={l.name.replace(/ /g, '')}> {l.name}{idx < languages.length - 1 && ', '}</span>
                )}
                </div>
            }
            {phone && <div key='phone'>Phone Code: {phone}</div>}
            {native && <div key='native'>Native: {native}</div>}
            {capital && <div key='capital'>Capital: {capital}</div>}
            <hr />
        </div>
    )
}
