import React from "react";
import styles from "./Exit.module.scss";
import {NavLink} from "react-router-dom";
import ExitIcon from "../../common/Icons/ExitIcon/ExitIcon";

const Exit = props => {
    const onLogout = () => {
        props.logout();
    };

    return (
        <NavLink className={styles.exit} to="/login" onClick={onLogout}>
            <ExitIcon/>
            <div className={styles.exit__text}>Выход</div>
        </NavLink>
    );
};

export default Exit;
