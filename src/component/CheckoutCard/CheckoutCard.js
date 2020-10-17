import React from 'react';
import './CheckoutCard.scss';
function CheckoutCard() {
  return (
    <div className="checkoutcard__container">
      <img
        src="https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
        alt=""
        className="checkoutcard__gambar"
      />
      <div className="checkoutcard__desc">
        <div className="checkoutcard__item__1">
          <div className="checkoutcard__item__1__desc">
            <div>Marvel Spiderman Digital Deluxe </div>
            <div>Rp.120.000</div>
          </div>
          <div className="checkoutcard__item__1__dropdown">
            <select name="" id="">
              <option value="a">a</option>
            </select>
          </div>
        </div>
        <div className="checkoutcard__item__2">
          <button>Remove</button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutCard;
