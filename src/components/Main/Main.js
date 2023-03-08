import React from "react";
import Catalog from "../Catalog/Catalog";
import Categories from "../Categories/Categories";
import Slider from "../Slider/Slider";
import styles from "./Main.module.css";

export default function Main({
  data,
  setItemInfo,
  handleOnClickAdd,
  handleOnClickAddToCart,
  handleOnClickRemove,
  handleOnClickRemoveFromCart,
  favourites,
  cartItem
}) {
  let best_prices = data.best_prices;
  let bestsellers = data.bestsellers;
  let news = data.new;
  let laptop = data.laptop;
  let tv = data.tv;

  return (
    <main>
      <div className={styles.main__top}>
        <Categories />
        <Slider />
      </div>
      <div className={styles.container}>
        <div className={styles.main__inner}>
          <div>
            <h1 className={styles.title}>Кращі цінові пропозиції</h1>
            <div className={styles.item_box}>
              {best_prices.map((item) => (
                <>
                  <div
                    className={styles.main__item}
                    onClick={() => setItemInfo(item)}
                  >
                    <Catalog
                      item={item}
                      handleOnClickAdd={handleOnClickAdd}
                      handleOnClickAddToCart={handleOnClickAddToCart}
                      handleOnClickRemove={handleOnClickRemove}
                      handleOnClickRemoveFromCart={handleOnClickRemoveFromCart}
                      favourites={favourites}
                      cartItem={cartItem}
                    />
                  </div>
                </>
              ))}
            </div>
          </div>
          <div>
            <h1 className={styles.title}>Хіти продаж</h1>
            <div className={styles.item_box}>
              {bestsellers.map((item) => (
                <>
                  <div
                    className={styles.main__item}
                    onClick={() => setItemInfo(item)}
                  >
                    <Catalog
                      item={item}
                      handleOnClickAdd={handleOnClickAdd}
                      handleOnClickAddToCart={handleOnClickAddToCart}
                      handleOnClickRemove={handleOnClickRemove}
                      handleOnClickRemoveFromCart={handleOnClickRemoveFromCart}
                      favourites={favourites}
                      cartItem={cartItem}
                    />
                  </div>
                </>
              ))}
            </div>
          </div>
          <div>
            <h1 className={styles.title}>Новинки</h1>
            <div className={styles.item_box}>
              {news.map((item) => (
                <>
                  <div
                    className={styles.main__item}
                    onClick={() => setItemInfo(item)}
                  >
                    <Catalog
                      item={item}
                      handleOnClickAdd={handleOnClickAdd}
                      handleOnClickAddToCart={handleOnClickAddToCart}
                      handleOnClickRemove={handleOnClickRemove}
                      handleOnClickRemoveFromCart={handleOnClickRemoveFromCart}
                      favourites={favourites}
                      cartItem={cartItem}
                    />
                  </div>
                </>
              ))}
            </div>
          </div>
          <div>
            <h1 className={styles.title}>Найкращі пропозиції: Ноутбуки</h1>
            <div className={styles.item_box}>
              {laptop.map((item) => (
                <>
                  <div
                    className={styles.main__item}
                    onClick={() => setItemInfo(item)}
                  >
                    <Catalog
                      item={item}
                      handleOnClickAdd={handleOnClickAdd}
                      handleOnClickAddToCart={handleOnClickAddToCart}
                      handleOnClickRemove={handleOnClickRemove}
                      handleOnClickRemoveFromCart={handleOnClickRemoveFromCart}
                      favourites={favourites}
                      cartItem={cartItem}
                    />
                  </div>
                </>
              ))}
            </div>
          </div>
          <div>
            <h1 className={styles.title}>Найкращі пропозиції: Телевізори</h1>
            <div className={styles.item_box}>
              {tv.map((item) => (
                <>
                  <div
                    className={styles.main__item}
                    onClick={() => setItemInfo(item)}
                  >
                    <Catalog
                      item={item}
                      handleOnClickAdd={handleOnClickAdd}
                      handleOnClickAddToCart={handleOnClickAddToCart}
                      handleOnClickRemove={handleOnClickRemove}
                      handleOnClickRemoveFromCart={handleOnClickRemoveFromCart}
                      favourites={favourites}
                      cartItem={cartItem}
                    />
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
