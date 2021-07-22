/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function SearchBar({ toggleBurger }) {
  const [query, setQuery] = useState('');
  const history = useHistory();

  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`/stock/search/${query}`);
    setQuery('');
    toggleBurger();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="texte"
          id="content"
          className="ring-4 ring-pink-200 rounded-md"
          placeholder="Recherche"
          onChange={handleChange}
          value={query}
        />
      </form>
    </div>
  );
}

export default SearchBar;
