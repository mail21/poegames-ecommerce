import React, { useState, useEffect } from 'react';
import ProductsCard from './../component/ProductsCard/ProductsCard';
import arrow from './../assets/arrow.svg';
import { ReactComponent as Hearth } from './../assets/hearth.svg';
import './ProductsPage.scss';
import axios from 'axios';
import CheckboxGroup from 'react-checkbox-group';

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
  const [years, setYears] = useState(yearsList);
  const [showSort, setShowSort] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [isFavouriteClick, setIsFavouriteClick] = useState(false);
  const [listGames, setListGames] = useState([]);
  const [listGenres, setListGenres] = useState([]);
  const [genresParams, setGenresParams] = useState([]);
  const [releasesParams, setReleasesParams] = useState('');

  useEffect(() => {
    axios
      .all([
        axios({
          method: 'GET',
          url: `${API_URL}/games`,
          headers: headersAPI,
          params: {
            page: 1,
            search: '',
            page_size: 3,
            genres: genresParams.length ? genresParams.join() : null,
            dates: releasesParams !== '' ? releasesParams : null,
          },
        }),
        axios({
          method: 'GET',
          url: `${API_URL}/genres`,
          headers: headersAPI,
        }),
      ])
      .then(
        axios.spread((res1, res2) => {
          setListGames(res1.data.results);
          setListGenres(res2.data.results);
        })
      );
  }, [genresParams, releasesParams]);

  return (
    <div>
      <div className="produtcs__container">
        <aside className="produtcs__sidebar">
          <h4>Browse</h4>
          <div className="produtcs__sidebar__items">
            <div
              className="produtcs__sidebar__items__div"
              onClick={() => setShowSort((prev) => !prev)}
            >
              <span style={{ marginLeft: '20px' }}>Releases</span>
              <img
                className="arrow"
                src={arrow}
                alt="arrow"
                style={
                  showSort ? { transform: 'rotate(270deg)' } : { transform: 'rotate(90deg)' }
                }
              />
            </div>
            {showSort ? (
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
              onClick={() => setShowCategories((prev) => !prev)}
            >
              <span style={{ marginLeft: '20px' }}>Genres</span>
              <img
                className="arrow"
                src={arrow}
                alt="arrow"
                style={
                  showCategories
                    ? { transform: 'rotate(270deg)' }
                    : { transform: 'rotate(90deg)' }
                }
              />
            </div>

            {showCategories ? (
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
          style={{ display: 'flex', flexWrap: 'wrap', alignSelf: 'baseline' }}
        >
          {listGames.map((el) => (
            <ProductsCard
              key={el.id}
              slug={el.slug}
              name={el.name}
              gambar={el.background_image}
              rating={el.rating}
              released={el.released}
            />
          ))}
        </article>
      </div>
    </div>
  );
}

export default ProductsPage;
