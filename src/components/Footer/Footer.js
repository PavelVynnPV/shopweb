import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer>
        <form className={styles.footer__form} onClick={(e) => e.preventDefault()}>
            <div>
            <h1 className={styles.form__title}>Хочеш дізнаватись всю інформацію про новинки в магазині CRIMSE? Підписуйся на розсилку усіх найцікавіших новин!</h1>
            <input type="tel" placeholder="Номер телефону" required/>
            <input type="email" placeholder="Email" required/>
            <input className={styles.form__btn} type="submit" value="Підписатись"/>
            </div>
           <p className={styles.follow}>Підписавшись на розсилку, Ви погоджуєтесь з Політикою конфіденційності</p>
            
        </form>
        <div className={styles.footer__inner}>
          <div className={styles.footer__main_box}>
            <div className={styles.footer__images}>
              <a className={styles.logo} href="/shopweb">
                {" "}
              </a>
              <span className={styles.google_photo}></span>
            </div>
            <ul className={styles.footer__links}>
              <div>
                <Link to="/shopweb">
                  <li>
                    <span className={styles.footer__marker_icon}></span>Магазин
                  </li>
                </Link>
                <Link to="/shopweb">
                  <li>
                    <span className={styles.footer__stock_icon}></span>Акції
                  </li>
                </Link>
              </div>
              <div>
                <Link to="/shopweb">
                  <li>
                    <span className={styles.footer__pay_icon}></span>Оплата та
                    доставка
                  </li>
                </Link>
                <Link to="/shopweb">
                  <li>
                    <span className={styles.footer__blog_icon}></span>Блок
                  </li>
                </Link>
              </div>
            </ul>
            <ul className={styles.footer__icons}>
              <li>
                <a
                  href="https://www.instagram.com/vinn_glasses/?hl=ru"
                  className={styles.instagram_link}
                >
                  {" "}
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="https://t.me/pavel_vynn"
                  className={styles.telegram_link}
                >
                  {" "}
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="https://github.com/PavelVynnPV"
                  className={styles.github_link}
                >
                  {" "}
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="https://www.facebook.com/pavel.vinnichencko/"
                  className={styles.facebook_link}
                >
                  {" "}
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="https://www.linkedin.com/in/pavel-vynnychenko-712156248/"
                  className={styles.linkedin_link}
                >
                  {" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className={styles.copyright}>
          © Copyright 2003 - 2022, CRIMSE. All rights reserved.
        </p>
      </footer>
    </>
  );
}
