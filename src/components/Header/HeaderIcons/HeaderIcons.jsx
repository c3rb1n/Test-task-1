import React from "react";
import styles from "./HeaderIcons.module.scss";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import NotificationsIcon from "../../common/Icons/NotificationsIcon/NotificationsIcon";
import SettingsIcon from "../../common/Icons/SettingsIcon/SettingsIcon";


const HeaderIcons = ({notificationsIndicatorOff, hasNotifications}) => {
    const SettingsIconWrapper = styled.div`
        transition: 0.3s transform;
        &:hover {
            transform: rotate(-22.5deg);
        }
    `;

    const onNotificationsIcon = () => {
        notificationsIndicatorOff();
    };

    return (
        <div className={styles.icons}>
            <NavLink className={styles.icons__notifications}
                     to="/notifications"
                     onClick={onNotificationsIcon}>
                <NotificationsIcon/>
                <div className={hasNotifications && styles.redCircle}/>
            </NavLink>
            <NavLink className={styles.icons__settings} to="/settings">
                <SettingsIconWrapper>
                    <SettingsIcon/>
                </SettingsIconWrapper>
            </NavLink>
        </div>
    );
};

export default HeaderIcons;