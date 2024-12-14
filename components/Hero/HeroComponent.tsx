import React from 'react';
import styles from "./Hero.module.scss"
const HeroComponent = () => {
    return (
        <div className={styles.HeroWrapper}>
            <div className={styles.Hero}>
                <div className={styles.Hero_title}></div>
                <div className={styles.Hero_candles}></div>
                <div className={styles.Hero_button}></div>
            </div>
        </div>
    );
};

export default HeroComponent;