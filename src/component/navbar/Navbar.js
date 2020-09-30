import React from 'react';
import Logo from './../../assets/poegameslogo.png';
import LogoText from './../../assets/poegamestext.png';
import CartIcon from './../CartIcon/CartIcon';

import './navbar.styles.scss';

function Navbar() {
  return (
    <nav>
      <div>
        <img className="nav-logo" src={Logo} alt="logo awal" width="90px" />
        <img src={LogoText} alt="text logo" width="350" />
      </div>
      <ul>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Checkout</a>
          <CartIcon />
        </li>
        <li>
          <a href="#">LOGIN</a>
        </li>
        <li>
          <a href="#">DAFTAR</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
