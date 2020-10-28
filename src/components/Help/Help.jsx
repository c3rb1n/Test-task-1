import React from "react";
import styles from "./Help.module.scss"

const Help = props => {
    return (
        <div className={styles.help}>
            <div className={styles.help__heading}>
                <h2 className={styles.help__header}>
                    Помощь
                </h2>
            </div>
        </div>
    );
};

export default Help;