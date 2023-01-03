import React, { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import "./App.css";

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
  // this function will show modal
  const showCardHandler = () => {
    setCartIsShown(true);
  };
  // this function will hide modal
  const hideCardHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCardHandler} />}
      <Header onShowCart={showCardHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
