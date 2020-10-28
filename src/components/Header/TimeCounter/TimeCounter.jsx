import React from "react";
import styles from "./TimeCounter.module.scss";

const TimeCounter = props => {
    return (
        <div className={styles.timeCounter}>
            <div className={styles.timeCounter__item}>
                <span className={styles.timeCounter__number}>
                    {props.days > 9 ? props.days : `0${props.days}`}
                </span>
                <span className={styles.timeCounter__text}>
                    дни
                </span>
            </div>
            <div className={styles.timeCounter__item}>
                <span className={styles.timeCounter__number}>
                    {props.hours > 9 ? props.hours : `0${props.hours}`}
                </span>
                <span className={styles.timeCounter__text}>
                    часы
                </span>
            </div>
            <div className={styles.timeCounter__item}>
                <span className={styles.timeCounter__number}>
                    {props.mins > 9 ? props.mins : `0${props.mins}`}
                </span>
                <span className={styles.timeCounter__text}>
                    мин
                </span>
            </div>
            <div className={styles.timeCounter__item}>
                <span className={styles.timeCounter__number}>
                    {props.secs > 9 ? props.secs : `0${props.secs}`}
                </span>
                <span className={styles.timeCounter__text}>
                    сек
                </span>
            </div>
        </div>
    );
}

export default TimeCounter;