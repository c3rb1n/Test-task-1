import React from "react";
import styles from "./Balance.module.scss";
import {NavLink} from "react-router-dom";

const Balance = props => {
    return (
        <div>
            <NavLink to="/myOffice" className={styles.balance}>
                <span>{`${props.balance}`}</span>
                <span>мой баланс</span>
            </NavLink>
        </div>
    );
};

export default Balance;
