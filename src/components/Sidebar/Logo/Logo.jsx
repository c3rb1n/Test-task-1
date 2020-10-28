import React from "react";
import styles from "./Logo.module.scss";
import {NavLink} from "react-router-dom";

const Logo = props => {
    return (
        <h1 className={styles.logo}>
            <NavLink className={styles.logo__link} to="/main">
                <div className={styles.logo__text}>
                    <span>COMPANY</span>
                    <span>NAME</span>
                </div>
            </NavLink>
        </h1>
    );
};

export default Logo;
