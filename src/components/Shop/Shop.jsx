import React from "react";
import styles from "./Shop.module.scss"

const Shop = props => {
    return (
        <div className={styles.shop}>
            <div className={styles.shop__heading}>
                <h2 className={styles.shop__header}>
                    Магазин
                </h2>
            </div>
        </div>
    );
};

export default Shop;