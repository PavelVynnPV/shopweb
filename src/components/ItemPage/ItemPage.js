import React, { useState } from "react";
import styles from "./ItemPage.module.css";
import "./color.css";
import ParamsComponent from "./ParamsComponent";

export default function ItemPage({
  itemInfo,
  handleOnClickAdd,
  handleOnClickRemove,
  favourites,
}) {
  const [mainImg, setMainImg] = useState("");

  const isFavourite = Boolean(
    favourites.find((favouriteItem) => favouriteItem.id === itemInfo.id)
  );

  return (
    <>
      <div className={styles.info_item}>
        <div className={styles.container}>
          <div className={styles.info_item__top}>
            <h1>{itemInfo.name}</h1>
            <ul>
              <li>Про товар</li>
              <li>Характеристики</li>
              <li>Відгуки ({itemInfo.comments})</li>
              <li>Аксесуари</li>
            </ul>
          </div>
          <div className={styles.info_item__main}>
            <div className={styles.info_item__image_slider}>
              <img
                src={mainImg === "" ? itemInfo.item_page_img : mainImg}
                className={styles.main_image}
                alt="phone_photo"
              />
              {/* <ul>
                {itemInfo.mini_img.map((image) => (
                  <li>
                    <img
                      src={image}
                      className={styles.mini_image}
                      alt="phone_photo"
                      onClick={() => setMainImg(image)}
                    />
                  </li>
                ))}
              </ul> */}
            </div>
            <div className={styles.info_item__params_price_delivery_block}>
              <ParamsComponent styles={styles} itemInfo={itemInfo} />
              <div className={styles.info_price_block}>
                <p className={styles.stock}>
                  <span className={styles.check_icon}></span>
                  {itemInfo.stock}
                </p>
                <div className={styles.price_btn_block}>
                  <div>
                    <span className={styles.line_price}>
                      {itemInfo.line_stroke_price} ₴
                    </span>
                    <span className={styles.price}>{itemInfo.price} ₴</span>
                  </div>
                  <div>
                    <a className={styles.cart__button} href="/shopweb">
                      <span className={styles.cart_icon}></span>Купити
                    </a>
                    <a className={styles.credit_btn} href="/shopweb">
                      <span className={styles.credit_icon}></span>Купити в
                      кредит
                    </a>
                  </div>
                </div>
                <div className={styles.favourite_add_block}>
                  <span className={styles.scales_text}>
                    <span className={styles.scales_icon}></span>
                    Додати у порівняння
                  </span>
                  <span className={styles.follow_text}>
                    <span
                      className={
                        !isFavourite
                          ? styles.follow_icon
                          : styles.full_follow_icon
                      }
                      onClick={() =>
                        !isFavourite
                          ? handleOnClickAdd(itemInfo)
                          : handleOnClickRemove(itemInfo)
                      }
                    ></span>
                    {!isFavourite ? "Додати у обране" : "Додано"}
                  </span>
                </div>
              </div>
              <div className={styles.place_post}>
                <div>
                  <p className={styles.title_place}>Як отримати у місті</p>
                  <button className={styles.btn_place}>Київ</button>
                </div>
                <ul>
                  <li className={styles.post_link}>
                    <a href="/shopweb">
                      <span className={styles.home_icon}></span>Забрати з нашого
                      магазину
                    </a>
                    <div>
                      <p>Самовивіз товару</p>
                      <p>сьогодні</p>
                      <p>безкоштовно</p>
                    </div>
                  </li>
                  <li className={styles.post_link}>
                    <a href="/shopweb">
                      <span className={styles.track_icon}></span>Адресна
                      доставка
                    </a>
                    <div>
                      <p>Кур’єр доставить за адресою</p>
                      <p>2-4 дні</p>
                      <p>99 ₴</p>
                    </div>
                  </li>
                  <li className={styles.post_link}>
                    <a href="/shopweb">
                      <span className={styles.post_icon}></span>Відділення Нової
                      Почти
                    </a>
                    <div>
                      <p>Доставка у найближче відділення</p>
                      <p>2-4 дні</p>
                      <p>79 ₴</p>
                    </div>
                  </li>
                  <li className={styles.post_link}>
                    <a href="/shopweb">
                      <span className={styles.post_arrow_icon}></span>
                      Відділення Meest
                    </a>
                    <div>
                      <p>Доставка у найближче відділення</p>
                      <p>3-5 днів</p>
                      <p>60 ₴</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
