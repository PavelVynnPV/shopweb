import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer.js";
import ItemPage from "./components/ItemPage/ItemPage.js";
import Main from "./components/Main/Main.js";
import Navbar from "./components/Navbar/Navbar.js";

function App() {
  const [data, setData] = useState([]);
  const [itemInfo, setItemInfo] = useState({});
  const [favourites, setFavourites] = useState([]);
  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    getData();
    const itemFavourites = JSON.parse(localStorage.getItem("items")) || [];
    const itemCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setFavourites(itemFavourites);
    setCartItem(itemCart);
  }, []);

  function handleOnClickAdd(item) {
    const newFavouriteListAdd = [...favourites, item];

    const saveToLocalStorage = (item) => {
      localStorage.setItem("items", JSON.stringify(item));
    };
    saveToLocalStorage(newFavouriteListAdd);
    setFavourites(newFavouriteListAdd);
  }

  function handleOnClickAddToCart(item) {
    const newCartListAdd = [...cartItem, item];

    const saveToLocalStorage = (item) => {
      localStorage.setItem("cartItems", JSON.stringify(item));
    };

    saveToLocalStorage(newCartListAdd);
    setCartItem(newCartListAdd);
  }

  function handleOnClickRemove(item) {
    const newFavouriteList = favourites.filter((favourite) => {
      return favourite.id !== item.id;
    });
    const newCartiteListAdd = cartItem.filter((cart) => {
      return cart.id !== item.id;
    });
    const saveToLocalStorage = (item) => {
      localStorage.setItem("items", JSON.stringify(item));
    };
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);

    saveToLocalStorage(newCartiteListAdd);
    setCartItem(newCartiteListAdd);
  }

  function handleOnClickRemoveFromCart(item) {
    const newCartListAdd = cartItem.filter((cart) => {
      return cart.id !== item.id;
    });
    const saveToLocalStorage = (item) => {
      localStorage.setItem("cartItems", JSON.stringify(item));
    };

    saveToLocalStorage(newCartListAdd);
    setCartItem(newCartListAdd);
  }

  const getData = () => {
    fetch("https://pavelvynnpv.github.io/myshopapi/catalog.json")
      .then((response) => response.json())
      .then((cataloginfo) => setData(cataloginfo.shop));
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          favourites={favourites}
          cartItem={cartItem}
          handleOnClickRemove={handleOnClickRemove}
          handleOnClickRemoveFromCart={handleOnClickRemoveFromCart}
          setItemInfo={setItemInfo}
        />
        <Routes>
          {data.map((item) => (
            <>
              <Route
                exact
                path="/shopweb"
                element={
                  <Main
                    data={item}
                    setItemInfo={setItemInfo}
                    handleOnClickAdd={handleOnClickAdd}
                    handleOnClickAddToCart={handleOnClickAddToCart}
                    handleOnClickRemove={handleOnClickRemove}
                    handleOnClickRemoveFromCart={handleOnClickRemoveFromCart}
                    favourites={favourites}
                    cartItem={cartItem}
                  />
                }
              />
              <Route
                exact
                path="/shopweb/itempage/:id"
                element={
                  <ItemPage
                    itemInfo={itemInfo}
                    handleOnClickAdd={handleOnClickAdd}
                    handleOnClickRemove={handleOnClickRemove}
                    favourites={favourites}
                  />
                }
              />
            </>
          ))}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
