import React from "react";

const RulesIcon = () => {
    return (
        <div>
            <svg display="none">
                <symbol id="rules-icon" viewBox="0 0 18 22">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M5.99592 1C6.7482 0.362975 7.83914 0 9 0C10.1609 0 11.2518 0.362975 12.0041 1H13C14.1046 1 15 1.89543 15 3H16C17.1046 3 18 3.89543 18 5V20C18 21.1046 17.1046 22 16 22H2C0.89543 22 0 21.1046 0 20V5C0 3.89543 0.89543 3 2 3H3C3 1.89543 3.89543 1 5 1H5.99592ZM13 6C13.7403 6 14.3866 5.5978 14.7324 5H16V20H2V5H3.26756C3.61337 5.5978 4.25972 6 5 6H13ZM5 15V13H11V15H5ZM5 9V11H13V9H5ZM6.85762 3L7.15665 2.65538C7.48519 2.27674 8.18941 2 9 2C9.81059 2 10.5148 2.27674 10.8434 2.65538L11.1424 3H13V4H5V3H6.40135H6.85762Z"/>
                </symbol>
            </svg>
            <svg>
                <use href="#rules-icon"/>
            </svg>
        </div>
    );
};

export default RulesIcon;