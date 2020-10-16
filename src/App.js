import React from 'react';
import './App.css';
import Navbar from './component/navbar/Navbar';
import LandingPage from './pages/LandingPage/LandingPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ProductPage from './pages/ProductPage/ProductPage';
import DaftarPage from './pages/DaftarPage/DaftarPage';
import LoginPage from './pages/LoginPage/LoginPage';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/products" component={ProductsPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={DaftarPage} />
        <Route path="/products/:slug" component={ProductPage} />
      </Switch>
    </>
  );
}

export default App;
