import React from 'react';

import styles from "./Header.module.scss"

const HeaderComponent = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__inner}>
                <div className={styles.menu}>
                    <div className={styles.menu__logo}>SINUM</div>
                    <div className={styles.menu__list}>
                        <button className={styles.menu__list_DashButton}>DASHBOARD</button>
                        <button className={styles.menu__list_FButton}>Features</button>
                        <button className={styles.menu__list_FAQButton}>FAQ</button>
                    </div>
                    <div className={styles.menu__reg}>
                        <button className={styles.menu__reg_in}>SIGN IN</button>
                        <button className={styles.menu__reg_up}>SIGN UP</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderComponent;

