import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Categories.module.css";

export default function Categories() {
    return(
        <>
        <ul className={styles.category_inner}>
            <Link to='/shopweb'><li><span className={styles.smartphone_icon}></span>Смартфони</li></Link>
            <Link to='/shopweb'><li><span className={styles.kitchen_icon}></span>Техніка для кухні</li></Link>
            <Link to='/shopweb'><li><span className={styles.home_tex_icon}></span>Техніка для дому</li></Link>
            <Link to='/shopweb'><li><span className={styles.laptop_icon}></span>Ноутбуки, ПК, планшети</li></Link>
            <Link to='/shopweb'><li><span className={styles.game_icon}></span>Товари для геймерів</li></Link>
            <Link to='/shopweb'><li><span className={styles.tv_icon}></span>Телевізори</li></Link>
            <Link to='/shopweb'><li><span className={styles.tools_icon}></span>Інструменти та автотовари</li></Link>
            <Link to='/shopweb'><li><span className={styles.building_icon}></span>Сантехніка та ремонт</li></Link>
            <Link to='/shopweb'><li><span className={styles.electro_icon}></span>Гаджети та електротранспорт</li></Link>
            <Link to='/shopweb'><li><span className={styles.garden_icon}></span>Дача, сад та город</li></Link>
            <Link to='/shopweb'><li><span className={styles.sport_icon}></span>Спорт та активності</li></Link>
            <Link to='/shopweb'><li><span className={styles.cloth_icon}></span>Одяг та взуття</li></Link>
            <Link to='/shopweb'><li><span className={styles.child_icon}></span>Дитячі товари</li></Link>
            <Link to='/shopweb'><li><span className={styles.animal_icon}></span>Зоотовари</li></Link>
            <Link to='/shopweb'><li><span className={styles.office_icon}></span>Офіс, школа, книги</li></Link>
            <Link to='/shopweb'><li><span className={styles.alcohol_icon}></span>Алкоголь</li></Link>
        </ul>
        </>
    )
}