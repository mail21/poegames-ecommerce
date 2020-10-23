import React from 'react';
import magnifyingGlass from './../../assets/magnifying-search-lenses-tool.svg';
import './SearchBar.scss';
import { useContextValue } from './../../context-api/context';

function SearchBar({ setSearchParams }) {
  const [{ headersAPI, API_URL }] = useContextValue();
  const handleChange = (e) => {
    setSearchParams(e.target.value);
  };
  return (
    <div className="searchbar__container">
      <img src={magnifyingGlass} alt="magnifyingGlass" />
      <input type="text" name="cari" placeholder="Search Game" onChange={handleChange} />
    </div>
  );
}

export default SearchBar;
