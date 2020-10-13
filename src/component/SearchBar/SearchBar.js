import React, { useEffect, useState } from 'react';
import magnifyingGlass from './../../assets/magnifying-search-lenses-tool.svg';
import './SearchBar.scss';
import axios from 'axios';

function SearchBar({ setSearchParams }) {
  const headersAPI = {
    'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
    'x-rapidapi-key': 'a4fe706396msh8c839cd1e6751fap164a0fjsnfc32d56a60d2',
  };

  const API_URL = 'https://rawg-video-games-database.p.rapidapi.com';
  const [state, setstate] = useState('');
  //   useEffect(() => {
  //     axios({
  //       method: 'GET',
  //       url: `${API_URL}/games`,
  //       headers: headersAPI,
  //       params: {
  //         page_size: 6,
  //         search: state,
  //       },
  //     }).then((res) => console.log(res.data.results));
  //   }, [state]);
  const handleChange = (e) => {
    setSearchParams(e.target.value);
  };
  return (
    <div className="searchbar__container">
      <img src={magnifyingGlass} alt="magnifyingGlass" />
      <input type="text" name="cari" placeholder="Search Game" onChange={handleChange} />
      {/* <div className="hasil">
        <img
          src="https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
          alt=""
        />
        <div>
          <div>Grand Theft Auto V</div>
          <div>2012</div>
        </div>
      </div> */}
    </div>
  );
}

export default SearchBar;
