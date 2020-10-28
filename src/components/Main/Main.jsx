import React from "react";
import styles from "./Main.module.scss"

const Main = props => {
    return (
        <div className={styles.main}>
            <div className={styles.main__heading}>
                <h2 className={styles.main__header}>
                    Главная
                </h2>
            </div>
        </div>
    );
};

export default Main;