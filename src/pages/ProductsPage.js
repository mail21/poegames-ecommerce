import React, { useState, useEffect } from 'react';
import Navbar from './../component/navbar/Navbar';
import ProductsCard from './../component/ProductsCard/ProductsCard';
import arrow from './../assets/arrow.svg';
import { ReactComponent as Hearth } from './../assets/hearth.svg';

import './ProductsPage.scss';

function ProductsPage() {
  const [showSort, setShowSort] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [isFavouriteClick, setIsFavouriteClick] = useState(false);
  const [listGames, setListGames] = useState([]);
  const [listGenres, setListGenres] = useState([]);

  useEffect(() => {
    fetch('https://rawg-video-games-database.p.rapidapi.com/games', {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
        'x-rapidapi-key': 'a4fe706396msh8c839cd1e6751fap164a0fjsnfc32d56a60d2',
      },
    })
      .then((res) => res.json())
      .then((res) => setListGames(res.results))
      .catch((err) => {
        console.log(err);
      });

    fetch('https://rawg-video-games-database.p.rapidapi.com/genres', {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
        'x-rapidapi-key': 'a4fe706396msh8c839cd1e6751fap164a0fjsnfc32d56a60d2',
      },
    })
      .then((response) => response.json())
      .then((res) => setListGenres(res.results))
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      <Navbar />
      <div className="produtcs__container">
        <aside className="produtcs__sidebar">
          <h4>Browse</h4>
          <div className="produtcs__sidebar__items">
            <div
              className="produtcs__sidebar__items__div"
              onClick={() => setShowSort((prev) => !prev)}
            >
              <span style={{ marginLeft: '20px' }}>Sort By</span>
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
                <div className="item__list">Alphabetical</div>
                <div className="item__list">Release</div>
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
              <span style={{ marginLeft: '20px' }}>Categories</span>
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
                {listGenres.map((el) => (
                  <div className="item__list" key={el.id}>
                    {el.name}
                  </div>
                ))}
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
        <article className="produtcs__cardList" style={{ display: 'flex', flexWrap: 'wrap' }}>
          {listGames.map((el) => (
            <ProductsCard
              key={el.id}
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
