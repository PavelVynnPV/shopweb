import React from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart/Cart";
import FavMenu from "./FavMenu/FavMenu";
import styles from "./Navbar.module.css";

export default function Navbar({
  favourites,
  handleOnClickRemove,
  handleOnClickRemoveFromCart,
  setItemInfo,
  cartItem,
}) {
  const cart = document.getElementById("cart");
  const favMenu = document.getElementById("fav_menu");

  const openFavMenu = () => {
    if (favMenu.style.display === "flex") {
      favMenu.style.display = "none";
    } else {
      favMenu.style.display = "flex";
      cart.style.display = "none"
    }
  };
  const openCart = () => {
    if (cart.style.display === "flex") {
      cart.style.display = "none";
    } else {
      cart.style.display = "flex";
      favMenu.style.display = "none"
    }
  };
  return (
    <>
      <nav>
        <div className={styles.container}>
          <div className={styles.nav__inner}>
            <div className={styles.nav__inner_first_box}>
              <a href="/shopweb" className={styles.nav__logo}>
                {" "}
              </a>
              <ul className={styles.nav__menu}>
                <Link to="/shopweb">
                  <li>
                    <span className={styles.nav__marker_icon}></span>Магазин
                  </li>
                </Link>
                <Link to="/shopweb">
                  <li>
                    <span className={styles.nav__stock_icon}></span>Акції
                  </li>
                </Link>
                <Link to="/shopweb">
                  <li>
                    <span className={styles.nav__pay_icon}></span>Оплата та
                    доставка
                  </li>
                </Link>
                <Link to="/shopweb">
                  <li>
                    <span className={styles.nav__blog_icon}></span>Блок
                  </li>
                </Link>
              </ul>
            </div>
            <ul className={styles.nav__contact}>
              <li className={styles.nav__place}>
                <span className={styles.nav__place_icon}></span>Київ
              </li>
              <li className={styles.nav__tel}>
                <a href="tel:+380994131326">
                  <span className={styles.nav__marker_icon}></span>+38 (099) 413
                  13 26
                </a>
              </li>
              <li className={styles.nav__languages}>
                <span className={styles.language_ua}>UA</span>
                <span className={styles.language_en}>EN</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className={styles.nav__inner_bottom}>
        <div className={styles.container}>
          <div className={styles.catalog_title}>
            <span className={styles.boxes_icon}></span>
            <p>Каталог товарів</p>
          </div>
          <label>
            <input type="text" placeholder="Знайти товар" />
            <span className={styles.search_icon}></span>
            <span className={styles.micro_icon}></span>
          </label>
          <div className={styles.icons_nav_bottom}>
            <span className={styles.scales_icon}></span>
            <div className={styles.fav_position}>
              <span className={styles.heart_icon} onClick={() => openFavMenu()}>
                {favourites.length !== 0 ? (
                  <span className={styles.fav__lenght}>
                    {favourites.length}
                  </span>
                ) : null}
              </span>
              <div className={styles.fav_container} id="fav_menu">
                <FavMenu
                  favourites={favourites}
                  handleOnClickRemove={handleOnClickRemove}
                  setItemInfo={setItemInfo}
                />
              </div>{" "}
            </div>
            <div className={styles.cart__position}>
              <span className={styles.cart_icon} onClick={() => openCart()}>
                {cartItem.length !== 0 ? (
                  <span className={styles.fav__lenght}>{cartItem.length}</span>
                ) : null}
              </span>
              <div className={styles.fav_container} id="cart">
                <Cart
                  cartItem={cartItem}
                  handleOnClickRemoveFromCart={handleOnClickRemoveFromCart}
                  setItemInfo={setItemInfo}
                />
              </div>{" "}
            </div>

            <span className={styles.user_icon}></span>
          </div>
        </div>
      </div>
    </>
  );
}
