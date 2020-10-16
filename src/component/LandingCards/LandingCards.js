import React, { useState } from 'react';
import ProductsCard from './../ProductsCard/ProductsCard';

import './LandingCards.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

function LandingCards() {
  const [hover, setHover] = useState(false);
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
        <ProductsCard
          slug={'el.slug'}
          name={'el.name'}
          gambar={'https://media.rawg.io/media/games/eb5/eb514db62d397c64288160d5bd8fd67a.jpg'}
          rating={5}
          released={'2020'}
        />
        <ProductsCard
          slug={'el.slug'}
          name={'el.name'}
          gambar={'https://media.rawg.io/media/games/eb5/eb514db62d397c64288160d5bd8fd67a.jpg'}
          rating={5}
          released={'2020'}
        />
        <ProductsCard
          slug={'el.slug'}
          name={'el.name'}
          gambar={'https://media.rawg.io/media/games/eb5/eb514db62d397c64288160d5bd8fd67a.jpg'}
          rating={5}
          released={'2020'}
        />
        <ProductsCard
          slug={'el.slug'}
          name={'el.name'}
          gambar={'https://media.rawg.io/media/games/eb5/eb514db62d397c64288160d5bd8fd67a.jpg'}
          rating={5}
          released={'2020'}
        />
        <ProductsCard
          slug={'el.slug'}
          name={'el.name'}
          gambar={'https://media.rawg.io/media/games/eb5/eb514db62d397c64288160d5bd8fd67a.jpg'}
          rating={5}
          released={'2020'}
        />
      </Slider>
    </div>
  );
}

export default LandingCards;
