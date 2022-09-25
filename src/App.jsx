import React from "react";
import { Restaurants } from "./pages/Restaurants";
import { Provider } from "react-redux";
import { store } from "./store";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Restaurant } from "./components/Restaurant/Restaurant";
import { Cart } from "./pages/Cart";
import { Menu } from "./components/Menu/Menu";
import { Reviews } from "./components/Reviews/Reviews";

const Footer = () => {
  console.log("render Footer");
  return <div>footer</div>;
};

export const App = () => {
  return (
    <Provider store={store}>
      <Layout footer={<Footer />}>
        <Routes>
          <Route index element={<div>HomePage</div>} />
          <Route path="restaurants" element={<Restaurants />}>
            <Route index element={<div>SelectRestaurant</div>} />
            <Route path=":restaurantId" element={<Restaurant />}>
              <Route index element={<Navigate to="menu" replace={true} />} />
              <Route path="menu" element={<Menu />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </Provider>
  );
};
