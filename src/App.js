import React from 'react';
import './App.css';
import ProductsPage from './pages/ProductsPage';
import Navbar from './component/navbar/Navbar';

import ProductPage from './pages/ProductPage/ProductPage';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path="/" component={ProductsPage} />
        <Route path="/product/:slug" component={ProductPage} />
      </Switch>
    </div>
  );
}

export default App;
