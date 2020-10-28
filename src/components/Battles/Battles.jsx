import React from "react";
import styles from "./Battles.module.scss"

const Battles = props => {
    return (
        <div className={styles.battles}>
            <div className={styles.battles__heading}>
                <h2 className={styles.battles__header}>
                    Баттлы
                </h2>
            </div>
        </div>
    );
};

export default Battles;