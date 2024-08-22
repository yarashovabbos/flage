import { useEffect, useState } from 'react';
import Header from '../components/Header';
import CountryCard from '../components/CountryCard';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [region, setRegion] = useState('');

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        setCountries(data);
        setFilteredCountries(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    const filterCountries = () => {
      const lowerSearchTerm = searchTerm.toLowerCase();
      const filtered = countries.filter(country => {
        const matchesSearch = country.name.common.toLowerCase().includes(lowerSearchTerm);
        const matchesRegion = region ? country.region === region : true;
        return matchesSearch && matchesRegion;
      });
      setFilteredCountries(filtered);
    };

    filterCountries();
  }, [searchTerm, region, countries]);

  return (
    <>
      <Header />
      <div className="container mx-auto px-4">
        <video className="w-full h-60 object-cover" src="/media/Social-handle-(Dark)-[remix] (1).webm" muted autoPlay loop id="video"></video>
        <div className="search-filter mt-4 flex justify-between items-center">
          <input
            type="text"
            id="search-input"
            placeholder="Davlatni nomini yozing ..."
            className="w-full max-w-md p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            id="region-select"
            className="ml-4 p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-white"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          >
            <option value="">Qit'alar</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Amerika</option>
            <option value="Asia">Osiyo</option>
            <option value="Europe">Yevropa</option>
            <option value="Oceania">Janubiy Amerika</option>
          </select>
        </div>
        <div className="countries-list mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredCountries.map(country => (
            <CountryCard key={country.cca3} country={country} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
