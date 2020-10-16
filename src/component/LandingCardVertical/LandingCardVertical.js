import React from 'react';
import './LandingCardVertical.scss';
import { Link } from 'react-router-dom';

function LandingCardVertical({ name, add, image, slug }) {
  return (
    <Link to={`/products/${slug}`}>
      <div className="landingcardvertical__container">
        <img src={image} alt="" />
        <div className="LandingCardVertical__title">{name}</div>
        <div className="LandingCardVertical__rating__container">
          <div className="LandingCardVertical__rating__container__number">{add}</div>
        </div>
      </div>
    </Link>
  );
}

export default LandingCardVertical;
