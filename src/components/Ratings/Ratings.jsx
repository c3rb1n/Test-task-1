import React from "react";
import styles from "./Ratings.module.scss"

const Ratings = props => {
    return (
        <div className={styles.ratings}>
            <div className={styles.ratings__heading}>
                <h2 className={styles.ratings__header}>
                    Рейтинги
                </h2>
            </div>
        </div>
    );
};

export default Ratings;