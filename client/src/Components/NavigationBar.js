import React from 'react';
import useDarkMode from '../Hooks/DarkMode'

const Navbar = () => {
  const [inputValue, setInputValue] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setInputValue(!inputValue);
  };
  return (
    <nav className="navbar">
      <h1>Womens World Cup Players</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={inputValue ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;