import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart";
import HomePage from "./Components/HomePage";
import NavBar from "./Components/NavBar";
import NewsLetter from "./Components/NewsLetter";
import ProductDetail from "./Components/ProductDetail";
import ShirtStyle from "./Components/ShirtStyle";
import TopOffer from "./Components/TopOffer";
import store from "./utils/Store";

const App = () => {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <TopOffer />
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ShirtStyle />} />
          <Route path="/detail/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
        <NewsLetter />
      </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
