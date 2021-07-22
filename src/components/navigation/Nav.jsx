import { Squash as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuBurger from './MenuBurger';
import SearchBar from './SearchBar';

function Nav() {
  const [statusBurger, setStatusBurger] = useState(false);

  function toggleBurger() {
    setStatusBurger(!statusBurger);
  }

  return (
    <>
      <div className="bg-blue-400 flex justify-between items-center h-16 font-serif">
        <Link to="/stock">
          <h1 className="text-xl bg-gradient-to-r from-pink-400 to-pink-100 ml-1 p-0.5 rounded-xl ">
            GeStock
          </h1>
        </Link>
        <SearchBar toggleBurger={toggleBurger} />
        <button type="button" onClick={toggleBurger}>
          <Hamburger color="white" />
        </button>
      </div>
      <MenuBurger statusBurger={statusBurger} toggleBurger={toggleBurger} />
    </>
  );
}

export default Nav;
