import React from "react";
import styles from "../Main/Main.module.css";
import { Link } from "react-router-dom";

export default function Catalog({
  item,
  favourites,
  cartItem,
  handleOnClickAdd,
  handleOnClickAddToCart,
  handleOnClickRemove,
  handleOnClickRemoveFromCart,
}) {
  const isFavourite = Boolean(
    favourites.find((favouriteItem) => favouriteItem.id === item.id)
  );
  const isCartItem = Boolean(cartItem.find((cart) => cart.id === item.id));

  return (
    <div className={styles.main_item}>
      <Link
        className={styles.item_link}
        to={`/shopweb/itempage/${item.id}`}
        onclick={(e) => e.preventDefault()}
      >
        <img src={item.img} alt="item_photo" />
        <p className={styles.item_name}>{item.name}</p>
      </Link>
      <span
        className={
          item.line_stroke_price !== ""
            ? styles.line_stroke_price
            : styles.none_price
        }
      >
        {item.line_stroke_price} {item.line_stroke_price !== "" ? "₴" : null}
      </span>
      <span className={styles.price}>{item.price} ₴</span>
      <div className={styles.button_and_icons}>
        <a
          className={styles.cart__button}
          href="/"
          onClick={(e) => {
            e.preventDefault();
            !isCartItem
              ? handleOnClickAddToCart(item)
              : handleOnClickRemoveFromCart(item);
          }}
        >
          <span className={styles.cart_icon}></span>
          {!isCartItem ? "B корзину" : "З корзини"}
          {!isCartItem ? "B корзину" : "З корзины"}
        </a>
        <div className={styles.icons_box}>
          <div>
            <span className={styles.rate}>
              <span className={styles.star_icon}></span>
              {item.rate}
            </span>

            <span className={styles.comments}>
              <span className={styles.comment_icon}></span>
              {item.comments}
            </span>
          </div>
          <div>
            <span className={styles.scales_icon}></span>
            <span
              className={
                !isFavourite ? styles.heart_icon : styles.full_heart_icon
              }
              onClick={() =>
                !isFavourite
                  ? handleOnClickAdd(item)
                  : handleOnClickRemove(item)
              }
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
}
