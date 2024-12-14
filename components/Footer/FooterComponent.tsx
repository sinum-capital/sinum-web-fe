import React from 'react';
import styles from "./Footer.module.scss"
import Image from "next/image";


const FooterComponent = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.container__copyright}>© SINUM CAPITAL 2024 ALL RIGHTS RESERVED</div>
                <div className={styles.content}>
                    {/*<Image className = {styles.content__link}*/}
                    {/*       src="#"*/}
                    {/*       alt="Telegram"*/}
                    {/*       width={24}*/}
                    {/*       height={24}/>*/}
                    {/*<Image className = {styles.content__link}*/}
                    {/*       src="#"*/}
                    {/*       alt="twitter"*/}
                    {/*       width={24}*/}
                    {/*       height={24}/>*/}
                    <a className={styles.content__btn} href={"#"}>Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;


