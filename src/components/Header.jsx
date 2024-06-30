import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="p-4 flex justify-center">
      <Link to="/">
        <h1 className="text-red-500 text-center text-4xl font-bold">THE BEST MOVIES</h1>
      </Link>
    </header>
  );
};

export default Header;