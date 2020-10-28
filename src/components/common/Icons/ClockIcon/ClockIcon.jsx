import React from "react";
import styles from "./ClockIcon.module.scss";

const ClockIcon = () => {
    return (
        <div>
            <svg display="none">
                <symbol id="clock-icon" viewBox="0 0 16 15">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M7.63636 14.375C3.82296 14.375 0.731598 11.297 0.731598 7.5C0.731598 3.70304 3.82296 0.625 7.63636 0.625C11.4497 0.625 14.5411 3.70304 14.5411 7.5C14.5411 11.297 11.4497 14.375 7.63636 14.375ZM7.63635 13.125C10.7564 13.125 13.2857 10.6066 13.2857 7.5C13.2857 4.3934 10.7564 1.875 7.63635 1.875C4.5163 1.875 1.987 4.3934 1.987 7.5C1.987 10.6066 4.5163 13.125 7.63635 13.125ZM10.7749 6.875H8.2641V3.75H7.00869V8.125H10.7749V6.875Z"/>
                </symbol>
            </svg>
            <svg className={styles.clockIcon}>
                <use href="#clock-icon"/>
            </svg>
        </div>
    );
};

export default ClockIcon;