import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LogoPage from "./components/LogoPage";
import SignIn from "./components/SignIn";
import { Provider } from "react-redux";
import store from "./store/store";
import Home from "./components/Home";
import ProductListing from "./components/ProductListing";
import ProductOverview from "./components/ProductOverview";
import ShoppingBag from "./components/shopping/ShoppingBag";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/landing" element={<LogoPage />} />
          <Route path="/" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/product-overview/:id" element={<ProductOverview />} />
          <Route path="/bag" element={<ShoppingBag />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
