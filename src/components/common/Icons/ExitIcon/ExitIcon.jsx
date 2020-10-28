import React from "react";
import styles from "./ExitIcon.module.scss";

const ExitIcon = () => {
    return (
        <div>
            <svg display="none">
                <symbol id="exit-icon" viewBox="0 0 21 18">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M15 8H4.41421L7.70711 4.70711L6.29289 3.29289L0.585785 9L6.29289 14.7071L7.70711 13.2929L4.41421 10H15V8ZM19 0H10V2L19 2V16H10V18H19C20.1046 18 21 17.1046 21 16V2C21 0.89543 20.1046 0 19 0Z"/>
                </symbol>
            </svg>
            <svg className={styles.exitIcon}>
                <use href="#exit-icon"/>
            </svg>
        </div>
    );
};

export default ExitIcon;