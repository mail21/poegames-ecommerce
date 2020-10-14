import React from 'react';
import './App.css';
import ProductsPage from './pages/ProductsPage';
import Navbar from './component/navbar/Navbar';

import ProductPage from './pages/ProductPage/ProductPage';
import LoginPage from './pages/LoginPage/LoginPage';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path="/" component={ProductsPage} />
        <Route exact path="/products" component={ProductsPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/daftar" component={<></>} />
        <Route path="/products/:slug" component={ProductPage} />
      </Switch>
    </div>
  );
}

export default App;
