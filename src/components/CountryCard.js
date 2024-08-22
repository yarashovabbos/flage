import { useRouter } from 'next/router';

const CountryCard = ({ country }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/country?code=${country.cca3}`);
  };

  return (
    <div
      className="cursor-pointer rounded-lg shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow p-4"
      onClick={handleClick}
    >
      <img className="w-full h-40 object-cover rounded-t-lg" src={country.flags.png} alt={country.name.common} />
      <div className="card-body p-4">
        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">{country.name.common}</h3>
        <p className="text-gray-600 dark:text-gray-300">Population: {country.population.toLocaleString()}</p>
        <p className="text-gray-600 dark:text-gray-300">Region: {country.region}</p>
        <p className="text-gray-600 dark:text-gray-300">Capital: {country.capital}</p>
      </div>
    </div>
  );
};

export default CountryCard;
