import React from 'react';
import "./Footer.scss"
import Image from "next/image";


const FooterComponent = () => {
    return (
        <footer className={"footer"}>
            <div className={"container"}>
                <div className={"container__copyright"}>© SINUM CAPITAL 2024 ALL RIGHTS RESERVED</div>
                <div className={"content"}>
                    <Image className="content__link"
                           src="/images/telegram.png"
                           alt="Telegram"
                           width={24}
                           height={24}/>
                    <Image className="content__link"
                           src="/images/twitter.png"
                           alt="twitter"
                           width={24}
                           height={24}/>
                    <a className={"content__btn"} href={"#"}>Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;


