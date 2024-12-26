import React from 'react';
import styles from "./Hero.module.scss"
const HeroComponent = () => {
    return (
        <div className={styles.HeroWrapper}>
            <div className={styles.hero}>
                <div className={styles.hero__title}>LEARN EVERYTHING ABOUT MONEY</div>
                <div className={styles.hero__candles}>
                    <div className={styles.first}>
                        <div className={styles.first__value}></div>
                    </div>
                    <div className={styles.second}>
                        <div className={styles.second__value}></div>
                    </div>
                    <div className={styles.S}>
                        <div className={styles.S__value}></div>
                    </div>
                    <div className={styles.I}>
                        <div className={styles.I__value}></div>
                    </div>
                    <div className={styles.N}>
                        <div className={styles.N__value}></div>
                    </div>
                    <div className={styles.U}>
                        <div className={styles.U__value}></div>
                    </div>
                    <div className={styles.M}>
                        <div className={styles.M__value}></div>
                    </div>
                    <div className={styles.eighth}>
                        <div className={styles.eighth__value}></div>
                    </div>
                    <div className={styles.ninth}>
                        <div className={styles.ninth__value}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroComponent;