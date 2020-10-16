import React, { useState, useEffect, useContext } from 'react';
import ProductsCard from './../../component/ProductsCard/ProductsCard';
import { ReactComponent as Hearth } from './../../assets/hearth.svg';
import './ProductsPage.scss';
import axios from 'axios';
import PacmanLoader from 'react-spinners/PacmanLoader';
import SearchBar from './../../component/SearchBar/SearchBar';
import Pagination from './../../component/Pagination/Pagination';
import ProductsSideBarItem from './../../component/ProductsSideBarItem/ProductsSideBarItem';
import { Context } from './../../context-api/context';

function ProductsPage() {
  const [{ yearsList, headersAPI, API_URL }] = useContext(Context);
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
          <ProductsSideBarItem
            radio={true}
            name="Releases"
            show={showReleases}
            setShow={setShowReleases}
            setParams={setReleasesParams}
            list={yearsList}
          />

          <ProductsSideBarItem
            radio={false}
            name="Genres"
            show={showGenres}
            setShow={setShowGenres}
            setParams={setGenresParams}
            params={genresParams}
            list={listGenres}
          />

          <ProductsSideBarItem
            radio={false}
            name="Platforms"
            show={showPlatforms}
            setShow={setShowPlatforms}
            setParams={setPlatformParams}
            params={platformParams}
            list={listPlatforms}
          />

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

              <Pagination pageParams={pageParams} setPageParams={setPageParams} />
            </div>
          )}
        </article>
      </div>
    </div>
  );
}

export default ProductsPage;
