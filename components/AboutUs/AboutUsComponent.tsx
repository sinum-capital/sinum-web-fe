import React from 'react';
import styles from "./AboutUs.module.scss"
const AboutUsComponent = () => {
    return (
        <div className={styles.PolygonAU}>
            <div className={styles.AboutUs}>
                <div className={styles.AboutUs__button}>ABOUT</div>
                <div className={styles.AboutUs__title}>About Us</div>
                <div className={styles.AboutUs__info}>
                    We are Sinum Capital, an innovative fintech startup
                    that combines answers to all your financial questions.
                    A convenient portfolio manager, an accessible educational segment,
                    a news screener, individualized investment and financial plans,
                    advice on managing your capital, risk analysis based on a custom
                    AI model, a unique sentimental market analysis, the possibility
                    of personal consultations with experts - these are all opportunities
                    that offers Sinum Capital for its clients. </div>
                <div className={styles.AboutUs__img} >
                    <img src={"https://s3-alpha-sig.figma.com/img/3b2d/8639/3e586fca16475286605fb4153e384c92?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aXGgs4laV5sRAoNrsTiQoZQkAmGDd1phGfm0PvX2WmGoPEweoKxSHSbxrqJw7QprPVI5vcNF4SgHe0OQ~9A4dy-gKRZ~4No929ftP2GKA33GHMg-LEoANS2Fj1MR4T625nQMXiPD40v~jo7A45QdnjzewS93UlN-TwVLHDsLGJXP84QR89khkrpuDsqfjOBIRC9xX6G-PD3q0bShcTIa34wMtSfxmrZfO2hzrHMBZHje3TQ6ZRoVPHsLIWbrN~pnlAfK8QSNUFoG7caQNwB9ZNIhH7QccQOHu1HMpa3O6NGQYZvpmUewtX~XQc2uD37a53451WqewXo1DQJ-WfLpUw__"} width={"1019px"} height ={"669px"}/>
                </div>
            </div>
        </div>

    );
};

export default AboutUsComponent;