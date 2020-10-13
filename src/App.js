import React from 'react';
import './App.css';
import ProductsPage from './pages/ProductsPage';
import Navbar from './component/navbar/Navbar';

import ProductPage from './pages/ProductPage/ProductPage';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path="/" component={ProductsPage} />
        <Route exact path="/products" component={ProductsPage} />
        <Route path="/products/:slug" component={ProductPage} />
      </Switch>
    </div>
  );
}

export default App;
