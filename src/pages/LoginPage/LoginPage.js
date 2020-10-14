import React from 'react';

import './LoginPage.scss';

function LoginPage() {
  const [isFocus, setIsFocus] = React.useState(false);
  return (
    <div className="container__parent__login">
      <img
        src="https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg"
        alt="as"
        className="container__gambar"
      />

      <div className="container__login">
        <form>
          <span className="login__title">Login</span>

          <div className="login__input" onClick={() => setIsFocus((prev) => !prev)}>
            <input
              className="input"
              type="text"
              name="email"
              style={isFocus ? { marginBottom: '22px' } : {}}
            />
            <span className="focus__input"></span>
            <span
              style={isFocus ? { top: '10px', fontSize: '16px' } : {}}
              className="login__label"
            >
              Email
            </span>
          </div>

          <div className="login__input">
            <input
              className="input"
              type="password"
              name="pass"
              style={isFocus ? { marginBottom: '22px' } : {}}
            />
            <span className="focus__input"></span>
            <span
              style={isFocus ? { top: '10px', fontSize: '16px' } : {}}
              className="login__label"
            >
              Password
            </span>
          </div>

          <div className="login__desc">
            <div className="login__checkbox">
              <input className="input-checkbox" id="ckb1" type="checkbox" name="remember-me" />
              <label className="label-checkbox100" htmlFor="ckb1">
                Remember me
              </label>
            </div>
          </div>

          <div className="login__button">
            <button className="login100-form-btn">Login</button>
          </div>

          <div className="login__text">
            <span>or sign up using</span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
