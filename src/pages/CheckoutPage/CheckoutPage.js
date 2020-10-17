import React from 'react';
import CheckoutCard from './../../component/CheckoutCard/CheckoutCard';
import './CheckoutPage.scss';

function CheckoutPage() {
  return (
    <div className="checkout__container">
      <h1>Your Shopping Cart</h1>
      <main>
        <div className="checkout__card__list">
          <CheckoutCard />
          <CheckoutCard />
        </div>
        <div className="checkout__total">
          <h2>Subtotal</h2>
        </div>
      </main>
    </div>
  );
}

export default CheckoutPage;
