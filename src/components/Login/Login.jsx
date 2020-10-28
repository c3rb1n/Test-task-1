import React from "react";
import styles from "./Login.module.scss";

const Login = props => {
    return (
        <div className={styles.login}>
            <div className={styles.login__heading}>
                <h2 className={styles.login__header}>
                    Логин
                </h2>
                <form className={styles.login__form}>
                    <input className={styles.login__mail}
                           type="email"
                           placeholder="Введите email..."/>
                    <input className={styles.login__password}
                           type="password"
                           placeholder="Введите пароль..."/>
                    <button className={styles.login__login}>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;