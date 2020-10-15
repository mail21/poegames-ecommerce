import React, { useEffect, useContext, useState } from 'react';
import { Context } from './../../context-api/context';
import './LoginPage.scss';
import axios from 'axios';
import google from './../../assets/google.png';

function LoginPage() {
  const [{ headersAPI, API_URL }] = useContext(Context);
  const [gambar, setGambar] = useState(null);
  useEffect(() => {
    axios({
      method: 'GET',
      headers: headersAPI,
      url: `${API_URL}/games/${Math.floor(Math.random() * Math.floor(500))}`,
    }).then((res) => {
      if (res.data.background_image) {
        setGambar(res.data.background_image);
      } else {
        setGambar(
          'https://media.rawg.io/media/games/eb5/eb514db62d397c64288160d5bd8fd67a.jpg'
        );
      }
    });
  }, []);

  return (
    <div className="container__parent__login">
      <img src={gambar} alt="" className="container__gambar" />

      <div className="container__login">
        <form>
          <span className="login__title">Login</span>

          <div className="login__input">
            <input className="input" type="text" name="email" />
            <span className="focus__input"></span>
            <span className="login__label">Email</span>
          </div>

          <div className="login__input">
            <input className="input" type="password" name="pass" />
            <span className="focus__input"></span>
            <span className="login__label">Password</span>
          </div>

          <div className="login__button">
            <button className="login100-form-btn">Login</button>
          </div>

          <div className="login__text">
            <span>or sign up using</span>
          </div>

          <div className="login__google">
            <img src={google} alt="googel" />
            <button className="login100-form-btn">Login With Google</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
