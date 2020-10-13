import React, { useState, useEffect } from 'react';
import ProductsCard from './../component/ProductsCard/ProductsCard';
import arrow from './../assets/arrow.svg';
import { ReactComponent as Hearth } from './../assets/hearth.svg';
import './ProductsPage.scss';
import axios from 'axios';
import CheckboxGroup from 'react-checkbox-group';
import PacmanLoader from 'react-spinners/PacmanLoader';
import SearchBar from './../component/SearchBar/SearchBar';
import Pagination from './../component/Pagination/Pagination';

function ProductsPage() {
  const headersAPI = {
    'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
    'x-rapidapi-key': 'a4fe706396msh8c839cd1e6751fap164a0fjsnfc32d56a60d2',
  };

  const API_URL = 'https://rawg-video-games-database.p.rapidapi.com';
  const yearsList = [
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
  ];
  const [years] = useState(yearsList);
  const [showReleases, setShowReleases] = useState(false);
  const [showGenres, setShowGenres] = useState(false);
  const [showPlatforms, setShowPlatforms] = useState(false);
  const [isFavouriteClick, setIsFavouriteClick] = useState(false);
  const [listGames, setListGames] = useState([]);
  const [listPlatforms, setListPlatforms] = useState([]);
  const [listGenres, setListGenres] = useState([]);
  const [genresParams, setGenresParams] = useState([]);
  const [releasesParams, setReleasesParams] = useState('');
  const [platformParams, setPlatformParams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useState('');
  const [pageParams, setPageParams] = useState(1);

  useEffect(() => {
    console.log(searchParams);
  }, [searchParams]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .all([
        axios({
          method: 'GET',
          url: `${API_URL}/games`,
          headers: headersAPI,
          params: {
            page: pageParams,
            search: searchParams,
            page_size: 12,
            parent_platforms: platformParams.length ? platformParams.join() : null,
            genres: genresParams.length ? genresParams.join() : null,
            dates: releasesParams !== '' ? releasesParams : null,
          },
        }),
        axios({
          method: 'GET',
          url: `${API_URL}/genres`,
          headers: headersAPI,
        }),
        axios({
          method: 'GET',
          url: `${API_URL}/platforms/lists/parents`,
          headers: headersAPI,
        }),
      ])
      .then(
        axios.spread((res1, res2, res3) => {
          setIsLoading(false);
          setListGames(res1.data.results);
          setListGenres(res2.data.results);
          setListPlatforms(res3.data.results);
        })
      );
  }, [genresParams, releasesParams, platformParams, searchParams, pageParams]);

  return (
    <div>
      <div className="produtcs__container">
        <aside className="produtcs__sidebar">
          <h4>Browse</h4>
          <div className="produtcs__sidebar__items">
            <div
              className="produtcs__sidebar__items__div"
              onClick={() => setShowReleases((prev) => !prev)}
            >
              <span style={{ marginLeft: '20px' }}>Releases</span>
              <img
                className="arrow"
                src={arrow}
                alt="arrow"
                style={
                  showReleases
                    ? { transform: 'rotate(270deg)' }
                    : { transform: 'rotate(90deg)' }
                }
              />
            </div>
            {showReleases ? (
              <>
                {years.map((year, i) => (
                  <div className="item__list" key={i}>
                    <label htmlFor={year} style={{ cursor: 'pointer' }}>
                      {year}
                    </label>
                    <input
                      type="radio"
                      name="year"
                      id={year}
                      value={`${year},${years[i + 1]}`}
                      onChange={(e) => setReleasesParams(e.target.value)}
                    />
                  </div>
                ))}
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="produtcs__sidebar__items">
            <div
              className="produtcs__sidebar__items__div"
              onClick={() => setShowGenres((prev) => !prev)}
            >
              <span style={{ marginLeft: '20px' }}>Genres</span>
              <img
                className="arrow"
                src={arrow}
                alt="arrow"
                style={
                  showGenres ? { transform: 'rotate(270deg)' } : { transform: 'rotate(90deg)' }
                }
              />
            </div>

            {showGenres ? (
              <>
                <CheckboxGroup name="genres" value={genresParams} onChange={setGenresParams}>
                  {(Checkbox) => (
                    <>
                      {listGenres.map((genre) => (
                        <div className="item__list" key={genre.id}>
                          <label htmlFor={genre.name} style={{ cursor: 'pointer' }}>
                            {genre.name}
                          </label>
                          <Checkbox id={genre.name} value={genre.slug} />
                        </div>
                      ))}
                    </>
                  )}
                </CheckboxGroup>
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="produtcs__sidebar__items" style={{ borderBottom: '1px solid' }}>
            <div
              className="produtcs__sidebar__items__div"
              onClick={() => setShowPlatforms((prev) => !prev)}
            >
              <span style={{ marginLeft: '20px' }}>Platforms</span>
              <img
                className="arrow"
                src={arrow}
                alt="arrow"
                style={
                  showPlatforms
                    ? { transform: 'rotate(270deg)' }
                    : { transform: 'rotate(90deg)' }
                }
              />
            </div>

            {showPlatforms ? (
              <>
                <CheckboxGroup
                  name="genres"
                  value={platformParams}
                  onChange={setPlatformParams}
                >
                  {(Checkbox) => (
                    <>
                      {listPlatforms.slice(0, 8).map((platform) => (
                        <div className="item__list" key={platform.id}>
                          <label htmlFor={platform.name} style={{ cursor: 'pointer' }}>
                            {platform.name}
                          </label>
                          <Checkbox id={platform.name} value={platform.id} />
                        </div>
                      ))}
                    </>
                  )}
                </CheckboxGroup>
              </>
            ) : (
              <></>
            )}
          </div>
          <div
            className="products__myfavourites"
            style={
              isFavouriteClick
                ? {
                    borderTop: '1px solid',
                    borderBottom: '1px solid',
                    opacity: '0.8',
                  }
                : {}
            }
            onClick={() => setIsFavouriteClick((prev) => !prev)}
          >
            <Hearth style={{ marginRight: '10', fill: 'red' }} />
            <span>My Wishlist(0)</span>
          </div>
        </aside>
        <article
          className="produtcs__cardList"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <SearchBar setSearchParams={setSearchParams} />
          {isLoading ? (
            <div className="container__loader">
              <PacmanLoader size={50} color={'yellow'} />
            </div>
          ) : (
            <div style={{ display: 'flex', flexWrap: 'wrap', alignSelf: 'baseline' }}>
              {listGames.map((el) => {
                if (el.released === null) {
                  el.released = 'null';
                }
                return (
                  <ProductsCard
                    key={el.id}
                    slug={el.slug}
                    name={el.name}
                    gambar={el.background_image}
                    rating={el.rating}
                    released={el.released}
                  />
                );
              })}

              <Pagination setPageParams={setPageParams} />
            </div>
          )}
        </article>
      </div>
    </div>
  );
}

export default ProductsPage;
