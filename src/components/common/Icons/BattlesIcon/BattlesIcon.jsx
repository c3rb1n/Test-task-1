import React from "react";

const BattlesIcon = () => {
    return (
        <div>
            <svg display="none">
                <symbol id="battles-icon" viewBox="0 0 20 26">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M0.572605 16.5H6.5V25.6593L19.4274 9.50004H13.5V0.34079L0.572605 16.5ZM8.83334 14.1667H5.4274L11.1667 6.99257V11.8333H14.5726L8.83334 19.0074V14.1667Z"/>
                </symbol>
            </svg>
            <svg>
                <use href="#battles-icon"/>
            </svg>
        </div>
    );
};

export default BattlesIcon;