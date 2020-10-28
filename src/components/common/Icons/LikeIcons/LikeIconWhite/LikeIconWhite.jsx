import React from "react";
import styles from "./LikeIconWhite.module.scss";

const LikeIconWhite = ({toggleLike, id}) => {
    return (
        <div>
            <svg display="none">
                <symbol id="like-icon-white" viewBox="0 0 22 21">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M14.958 1.6667C13.7464 1.66669 12.9654 1.81041 12.0701 2.24675C11.7386 2.4083 11.4276 2.60285 11.1388 2.82982C10.8611 2.61557 10.5626 2.42995 10.2448 2.27347C9.33214 1.824 8.51106 1.66669 7.34291 1.66669C4.21433 1.66669 1.94083 4.24774 1.94083 7.59992C1.94083 10.1315 3.35847 12.5769 5.99903 14.9416C7.38505 16.1828 9.15471 17.4111 10.4221 18.0646L11.1472 18.4385L11.8723 18.0646C13.1397 17.4111 14.9093 16.1828 16.2954 14.9416C18.9359 12.5769 20.3536 10.1315 20.3536 7.59992C20.3536 4.28322 18.0586 1.67949 14.958 1.6667ZM18.6797 7.59992C18.6797 9.58327 17.4964 11.6245 15.176 13.7024C13.9109 14.8353 12.2846 15.9675 11.1472 16.5614C10.0098 15.9675 8.38345 14.8353 7.11838 13.7024C4.798 11.6245 3.61471 9.58327 3.61471 7.59992C3.61471 5.12312 5.19121 3.33335 7.3429 3.33335C8.27169 3.33335 8.84403 3.44301 9.5027 3.76739C9.89177 3.95899 10.2356 4.212 10.5333 4.52816L11.1491 5.18227L11.7594 4.52298C12.0637 4.19415 12.4126 3.93538 12.8059 3.74371C13.4453 3.4321 13.9819 3.33335 14.9545 3.33336C17.0796 3.34213 18.6797 5.15749 18.6797 7.59992Z"/>
                </symbol>
            </svg>
            <svg className={styles.likeIconWhite} onClick={() => toggleLike(id)}>
                <use href="#like-icon-white"/>
            </svg>
        </div>
    );
};

export default LikeIconWhite;