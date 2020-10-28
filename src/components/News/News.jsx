import React from "react";
import styles from "./News.module.scss";
import SortingPopup from "./SortingPopup/SortingPopup";
import CityPopup from "./CityPopup/CityPopup";
import NewsItems from "./NewsItems/NewsItems";

const News = props => {
    return (
        <div className={styles.news}>
            <div className={styles.news__heading}>
                <h2 className={styles.news__header}>
                    Новости
                </h2>
                <div className={styles.news__popups}>
                    <SortingPopup items={["По популярности", "По рейтингу", "По дате"]}/>
                    <CityPopup items={["Все", "Иваново", "Ярославль",
                                       "Нижний Новгород",
                                       "Вологда", "Санкт-Петербург", "Москва"]}/>
                </div>
            </div>
            <NewsItems news={props.news.news} toggleLike={props.toggleLike}/>
        </div>
    );
};

export default News;
