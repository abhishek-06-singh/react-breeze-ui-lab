import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LogoPage from "./components/LogoPage";
import SignIn from "./components/SignIn";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store from "./store/store";
import Home from "./components/Home";
import ProductListing from "./components/ProductListing";
import ProductOverview from "./components/ProductOverview";
import ShoppingBag from "./components/shopping/ShoppingBag";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Checkout from "./components/shopping/Checkout";

import OrderSummery from "./components/shopping/OrderSummery";

const App = () => {
  return (
    <Provider store={store}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Router>
        <Routes>
          <Route path="/landing" element={<LogoPage />} />
          <Route path="/" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/product-overview/:id" element={<ProductOverview />} />
          <Route path="/bag" element={<ShoppingBag />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-summary" element={<OrderSummery />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
