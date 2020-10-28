import React from "react";
import styles from "./ArrowUpIcon.module.scss";

const ArrowUpIcon = () => {
    return (
        <div>
            <svg display="none">
                <symbol id="arrowUp-icon" viewBox="0 0 12 7">
                    <path d="M6.53033 0.46967C6.23744 0.176777 5.76256 0.176777 5.46967 0.46967L0.696699 5.24264C0.403806 5.53553 0.403806 6.01041 0.696699 6.3033C0.989592 6.59619 1.46447 6.59619 1.75736 6.3033L6 2.06066L10.2426 6.3033C10.5355 6.59619 11.0104 6.59619 11.3033 6.3033C11.5962 6.01041 11.5962 5.53553 11.3033 5.24264L6.53033 0.46967ZM6.75 2V1H5.25V2H6.75Z"/>
                </symbol>
            </svg>
            <svg className={styles.arrowUpIcon}>
                <use href="#arrowUp-icon"/>
            </svg>
        </div>
    );
};

export default ArrowUpIcon;