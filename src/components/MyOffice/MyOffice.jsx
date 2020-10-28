import React from "react";
import styles from "./MyOffice.module.scss"

const MyOffice = props => {
    return (
        <div className={styles.myOffice}>
            <div className={styles.myOffice__heading}>
                <h2 className={styles.myOffice__header}>
                    Мой офис
                </h2>
            </div>
        </div>
    );
};

export default MyOffice;