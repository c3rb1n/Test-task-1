import React from "react";

const NewsIcon = () => {
    return (
        <div>
            <svg display="none">
                <symbol id="news-icon" viewBox="0 0 20 18">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M2 15V2H14V15C14 15.3506 14.0602 15.6872 14.1707 16H3C2.44772 16 2 15.5523 2 15ZM17 18H3C1.34315 18 0 16.6569 0 15V0H14H15H16V5H20V6V7V15C20 16.6569 18.6569 18 17 18ZM16 7H18V15C18 15.5523 17.5523 16 17 16C16.4477 16 16 15.5523 16 15V7ZM8 4V8H4V4H8ZM12 7V5H9V7H12ZM12 9V11H4V9H12ZM12 14V12H4V14H12Z"/>
                </symbol>
            </svg>
            <svg>
                <use href="#news-icon"/>
            </svg>
        </div>
    );
};

export default NewsIcon;