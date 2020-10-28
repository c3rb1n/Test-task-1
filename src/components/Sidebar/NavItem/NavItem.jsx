import React from "react";
import styles from "./NavItem.module.scss";
import {NavLink} from "react-router-dom";
import {getIcon} from "../../../utils/sidebar-selectors";

const NavItem = ({id, path, text}) => {
    return (
        <div className={styles.s}>
        <NavLink className={styles.navItem} activeClassName={styles.active} to={path}>
            <div className={styles.navItem__icon}>{getIcon(id)}</div>
            <div className={styles.navItem__text}>{text}</div>
        </NavLink>
        </div>
    );
};

export default NavItem;
