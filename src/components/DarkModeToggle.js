import { useState } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <button
      id="toggle-dark-mode"
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
      onClick={toggleDarkMode}
    >
      <img src="/img/toggle_on_24dp_FILL0_wght400_GRAD0_opsz24.svg" alt="dark-svg" />
    </button>
  );
};

export default DarkModeToggle;
