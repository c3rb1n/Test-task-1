import React from "react";
import styles from "./Rules.module.scss"

const Rules = props => {
    return (
        <div className={styles.rules}>
            <div className={styles.rules__heading}>
                <h2 className={styles.rules__header}>
                    Правила
                </h2>
            </div>
        </div>
    );
};

export default Rules;