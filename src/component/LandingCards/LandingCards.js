import React, { useState, useEffect, useContext } from 'react';
import ProductsCard from './../ProductsCard/ProductsCard';
import axios from 'axios';

import './LandingCards.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Context } from './../../context-api/context';

function LandingCards({ ordering, dates, pPlatforms, publishers }) {
  const [{ headersAPI, API_URL }] = useContext(Context);
  const [hover, setHover] = useState(false);
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios({
      method: 'GET',
      headers: headersAPI,
      url: `${API_URL}/games`,
      params: {
        page_size: 8,
        ordering: ordering,
        dates: dates,
        parent_platforms: pPlatforms,
        publishers: publishers,
      },
    })
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => console.log(err));
  }, [games]);

  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 2,
  };
  return (
    <div
      className="landingcards__container"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Slider {...settings} arrows={hover}>
        {games.map((game) => (
          <ProductsCard
            key={game.id}
            slug={game.slug}
            name={game.name}
            gambar={game.background_image}
            rating={game.rating}
            released={game.released}
          />
        ))}
      </Slider>
    </div>
  );
}

export default LandingCards;
