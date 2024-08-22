import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';

const Header = () => (
  <header className="bg-gray-100 dark:bg-gray-900 p-4 shadow-md">
    <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100">DUNYO mamlakatlari</h1>
    <DarkModeToggle />
  </header>
);

export default Header;
