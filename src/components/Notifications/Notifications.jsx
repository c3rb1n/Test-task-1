import React from "react";
import styles from "./Notifications.module.scss"

const Notifications = props => {
    return (
        <div className={styles.notifications}>
            <div className={styles.notifications__heading}>
                <h2 className={styles.notifications__header}>
                    Уведомления
                </h2>
            </div>
        </div>
    );
};

export default Notifications;