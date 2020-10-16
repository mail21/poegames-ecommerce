import React, { useEffect, useContext, useState } from 'react';
import { Context } from './../../context-api/context';
import './DaftarPage.scss';
import axios from 'axios';
import google from './../../assets/google.png';

function DaftarPage() {
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
      <div className="container__login">
        <form>
          <span className="login__title">SIGN UP</span>

          <div className="login__input">
            <input className="input" type="text" name="name" />
            <span className="focus__input"></span>
            <span className="login__label">Display Name</span>
          </div>

          <div className="login__input">
            <input className="input" type="email" name="email" />
            <span className="focus__input"></span>
            <span className="login__label">Email</span>
          </div>

          <div className="login__input">
            <input className="input" type="password" name="pass" />
            <span className="focus__input"></span>
            <span className="login__label">Password</span>
          </div>

          <div className="login__input">
            <input className="input" type="password" name="confirmpass" />
            <span className="focus__input"></span>
            <span className="login__label">Confirm Password</span>
          </div>

          <div className="login__button">
            <button className="login100-form-btn">SIGN UP</button>
          </div>

          <div className="login__text">
            <span>or sign up using</span>
          </div>

          <div className="login__google" style={{ marginBottom: '20px' }}>
            <img src={google} alt="googel" />
            <button className="login100-form-btn">Sign up With Google</button>
          </div>
        </form>
      </div>
      <img src={gambar} alt="" className="container__gambar__daftar" />
    </div>
  );
}

export default DaftarPage;
