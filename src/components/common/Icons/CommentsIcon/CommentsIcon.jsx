import React from "react";
import styles from "./CommentsIcon.module.scss";

const CommentsIcon = () => {
    return (
        <div>
            <svg display="none">
                <symbol id="comments-icon" viewBox="0 0 21 21">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M5.34203 18.1702L10.4363 15H17.0592C17.9837 15 18.7331 14.2538 18.7331 13.3334V3.33335C18.7331 2.41288 17.9837 1.66669 17.0592 1.66669H3.66815C2.74369 1.66669 1.99426 2.41288 1.99426 3.33335V13.3334C1.99426 14.2538 2.74369 15 3.66815 15H5.34203V18.1702ZM9.95627 13.3334L7.01592 15.1631V13.3334H3.66815V3.33335H17.0592V13.3334H9.95627Z"/>
                </symbol>
            </svg>
            <svg className={styles.commentsIcon}>
                <use href="#comments-icon"/>
            </svg>
        </div>
    );
};

export default CommentsIcon;