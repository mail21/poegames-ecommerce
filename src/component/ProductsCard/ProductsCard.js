import React from 'react';
import { ReactComponent as AddToCart } from './../../assets/addtocart.svg';
import { ReactComponent as Hearth } from './../../assets/hearth.svg';
// import gambar from './../../assets/God_of_War_4_cover.jpg';

import './ProductsCard.scss';

function ProductsCard({ name, gambar }) {
  return (
    <div className="card">
      <div className="card__image" style={{ backgroundImage: `url(${gambar})` }}></div>
      <div>{name}</div>
      <div>Companys Name</div>
      <div className="card__details">
        <span>Rp. 0</span>
        <div className="card__details__icon">
          <AddToCart />
          <Hearth />
        </div>
      </div>
    </div>
  );
}

export default ProductsCard;
