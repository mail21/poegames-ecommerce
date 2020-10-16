import React from 'react';
import Logo from './../../assets/poegameslogo.png';
import LogoText from './../../assets/poegamestext.png';
import CartIcon from './../CartIcon/CartIcon';
import { Link } from 'react-router-dom';

import './navbar.styles.scss';

function Navbar() {
  return (
    <nav>
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img className="nav-logo" src={Logo} alt="logo awal" width="80px" />
        <img src={LogoText} alt="text logo" width="250" />
      </Link>
      <ul style={{ alignItems: 'center' }}>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <a href="#">Checkout</a>
          <CartIcon />
        </li>
        <li>
          <Link to="/login">LOGIN</Link>
        </li>
        <li>
          <Link to="/signup">SIGN UP</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
