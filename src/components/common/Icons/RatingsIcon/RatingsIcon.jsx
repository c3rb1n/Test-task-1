import React from "react";

const RatingsIcon = () => {
    return (
        <div>
            <svg display="none">
                <symbol id="ratings-icon" viewBox="0 0 22 18">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M2 0H20C21.1046 0 22 0.89543 22 2V16C22 17.1046 21.1046 18 20 18H2C0.89543 18 0 17.1046 0 16V2C0 0.89543 0.89543 0 2 0ZM2 2V16H20V2H2ZM6 14H8V8H6V14ZM12 14H10V4H12V14ZM14 14H16V7H14V14Z"/>
                </symbol>
            </svg>
            <svg>
                <use href="#ratings-icon"/>
            </svg>
        </div>
    );
};

export default RatingsIcon;