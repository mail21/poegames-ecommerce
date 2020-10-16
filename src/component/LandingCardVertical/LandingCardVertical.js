import React from 'react';
import './LandingCardVertical.scss';
import { Link } from 'react-router-dom';

function LandingCardVertical({ name, rating, image, slug }) {
  return (
    <Link to={`/products/${slug}`}>
      <div className="landingcardvertical__container">
        <img src={image} alt="" />
        <div className="LandingCardVertical__title">{name}</div>
        <div className="LandingCardVertical__rating__container">
          <div className="LandingCardVertical__rating__container__number">{rating}</div>
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
              fill="#EBFF04"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}

export default LandingCardVertical;
