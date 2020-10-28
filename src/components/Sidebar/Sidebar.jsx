import React from "react";
import styles from "./Sidebar.module.scss";
import NavItem from "./NavItem/NavItem";
import Exit from "./Exit/Exit";
import Logo from "./Logo/Logo";

const Sidebar = props => {
    const navElements = props.nav.map((n, index) => <NavItem key={index}
                                                             id={index}
                                                             path={n.path}
                                                             text={n.text}/>);

    return (
        <div className={styles.sidebar}>
            <Logo/>
            <nav className={styles.sidebar__navbar}>
                {navElements}
                <Exit logout={props.logout}/>
            </nav>
        </div>
    );
};

export default Sidebar;
