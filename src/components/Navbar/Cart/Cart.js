import React, { useState, useMemo } from "react";
import styles from "../FavMenu/FavMenu.module.css";
import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";

let PageSize = 2;

export default function Cart({
  cartItem,
  handleOnClickRemoveFromCart,
  setItemInfo,
}) {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return cartItem.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, cartItem]);

  return (
    <>
      <div
        className={cartItem.length === 0 ? styles.unActive : styles.fav_inner}
      >
        <div className={styles.menu_items_box}>
          {" "}
          {currentTableData.map((fav) => (
            <div className={styles.fav_block}>
              <div className={styles.fav_block__image_container}>
                <img
                  className={styles.fav_block__image}
                  src={fav.img}
                  alt="photos"
                />
              </div>

              <div className={styles.fav_block__info}>
                <p>{fav.name}</p>
                <div className={styles.fav_block__buttons}>
                  <Link
                    className={styles.item_link}
                    to={`/shopweb/itempage/${fav.id}`}
                    onclick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <span
                      className={styles.fav_block__buy}
                      onClick={() => setItemInfo(fav)}
                    >
                      Купить
                    </span>
                  </Link>
                  <span
                    className={styles.fav_block__delete_from_favourite}
                    onClick={() => handleOnClickRemoveFromCart(fav)}
                  >
                    x
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Pagination
          className={styles.pagination_bar}
          currentPage={currentPage}
          totalCount={cartItem.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </>
  );
}
