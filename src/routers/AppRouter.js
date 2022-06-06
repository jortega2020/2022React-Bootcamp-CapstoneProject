import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Cart } from "../components/shop/Cart";
import { Checkout } from "../components/shop/Checkout";
import { HomePage } from "../components/pages/HomePage";
import { ProductList } from "../components/products/ProductList";
import { ProductDetail } from "../components/products/ProductDetail";
import { SearchPage } from "../components/search/SearchPage";
import { NavBarMenu } from "../components/UI/NavBarMenu";

export const AppRouter = () => {
  return (
    <Router>
      <NavBarMenu />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/products" component={ProductList} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/product/:productId" component={ProductDetail} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
    </Router>
  );
};
