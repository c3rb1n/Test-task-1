import React from "react";
import styles from "./UserInfo.module.scss";
import defaultAvatar from "../../../assets/images/defaultAvatar.png";
import {NavLink} from "react-router-dom";

const UserInfo = props => {
    return (
        <NavLink to="/myOffice" className={styles.userInfo}>
            <div>
                <img className={styles.userInfo__img}
                     src={props.userAvatar ? props.userAvatar : defaultAvatar} alt="avatar"/>
            </div>
            <div className={styles.userInfo__text}>
                {props.firstName}<br/>
                {props.lastName}
            </div>
        </NavLink>
    );
};

export default UserInfo;