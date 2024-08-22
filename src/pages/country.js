import { useEffect, useState } from 'react';
import Header from '../components/Header';

const Country = () => {
  const [country, setCountry] = useState(null);
  const countryCode = new URLSearchParams(window.location.search).get('code');

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
        const data = await response.json();
        setCountry(data[0]);
      } catch (error) {
        console.error('Error fetching country:', error);
      }
    };

    fetchCountry();
  }, [countryCode]);

  if (!country) return <p className="text-center mt-8">Loading...</p>;

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 mt-8">
        <div className="country-card bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <img className="w-full h-60 object-cover" src={country.flags.png} alt={country.name.common} />
          <div className="card-body p-4">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{country.name.common}</h3>
            <p className="text-gray-600 dark:text-gray-300">Population: {country.population.toLocaleString()}</p>
            <p className="text-gray-600 dark:text-gray-300">Region: {country.region}</p>
            <p className="text-gray-600 dark:text-gray-300">Capital: {country.capital}</p>
            <p className="text-gray-600 dark:text-gray-300">Subregion: {country.subregion}</p>
            <p className="text-gray-600 dark:text-gray-300">Languages: {Object.values(country.languages).join(', ')}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Country;
