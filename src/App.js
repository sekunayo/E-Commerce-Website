import React, { useState } from "react";
import ErrorPage from "./ErrorPage.js";
import { Switch, Route } from "react-router-dom";
import Home from "../src/Home.js";
import AccountPage from "./AccountPage.js";
import ProductPage from "./ProductPage.js";
import Header from "../src/Components/LargeScreenHeader/Header.js";
import SmallScreenModal from "../src/Components/SmallScreenModal/SmallScreenModal.js";
import Footer from "./Components/Footer/Footer.js";
import CheckoutPage from "./CheckoutPage.js";
import WishlistPage from "./WishlistPage.js";
import Compare from "./Compare.js";
import CartPage from "./CartPage.js";
import ShopPage from "./ShopPage.js";
import ProductContextProvider from "./context/ProductContext.js";
function App() {
  const [showModal, setshowModal] = useState(false);
  const onModal = () => {
    setshowModal(true);
  };
  const offModal = () => {
    setshowModal(false);
  };

  return (
    <div className="app-container">
      <ProductContextProvider>
        <Header onModal={onModal} />
        {showModal && <SmallScreenModal offModal={offModal} />}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/product">
            <ProductPage />
          </Route>
          <Route
            exact
            path="/product/:type/:id"
            children={<ProductPage />}
          ></Route>
          <Route exact path="/account">
            <AccountPage />
          </Route>
          <Route exact path="/checkout">
            <CheckoutPage />
          </Route>
          <Route exact path="/wishlist">
            <WishlistPage />
          </Route>
          <Route exact path="/wishlist/:id" children={<WishlistPage />}></Route>
          <Route exact path="/compare">
            <Compare />
          </Route>
          <Route exact path="/cart">
            <CartPage />
          </Route>
          <Route exact path="/shop">
            <ShopPage />
          </Route>
          <Route exact path="*">
            <ErrorPage />
          </Route>
        </Switch>
        <Footer />
      </ProductContextProvider>
    </div>
  );
}

export default App;
