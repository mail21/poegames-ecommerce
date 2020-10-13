import React from 'react';
import { ReactComponent as AddToCart } from './../../assets/addtocart.svg';
import { ReactComponent as Hearth } from './../../assets/hearth.svg';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';

import './ProductsCard.scss';

function ProductsCard({ name, gambar, released, rating, slug }) {
  return (
    <div className="card">
      <Link to={`/products/${slug}`} style={{ textDecoration: 'none', color: 'white' }}>
        <img src={gambar} alt="Card Gambar" className="card__img" />
        <div className="card__name">{name}</div>
        <div>{released.substring(0, 4)}</div>
      </Link>
      <div className="card__details">
        <ReactStars size={22} value={rating} edit={false} isHalf={true} />
        <div className="card__details__icon">
          {/* <AddToCart /> */}
          <Hearth onClick={() => console.log('asd')} />
        </div>
      </div>
    </div>
  );
}

export default ProductsCard;
