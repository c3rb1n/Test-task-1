import React from "react";
import styles from "./Settings.module.scss"

const Settings = props => {
    return (
        <div className={styles.settings}>
            <div className={styles.settings__heading}>
                <h2 className={styles.settings__header}>
                    Настройки
                </h2>
            </div>
        </div>
    );
};

export default Settings;