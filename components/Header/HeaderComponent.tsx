import React from 'react';

import "./Header.scss"

const HeaderComponent = () => {
    return (
        <header className={"header"}>
            <div className={"header__inner"}>
                <a className={"logo"} href={"#"}>SINUM</a>
                <div className={"menu"}>
                    <div className={"menu__list"}>
                        <div className={"menu__list-item"}>dashboard</div>
                    </div>
                    <div className={"menu__list"}>
                        <div className={"menu__list-item"}>Features</div>
                    </div>
                    <div className={"menu__list"}>
                        <div className={"menu__list-item"}>Pricing</div>
                    </div>
                    <div className={"menu__list"}>
                        <div className={"menu__list-item"}>login</div>
                    </div>
                    <div className={"menu__list"}>
                        <div className={"menu__list-item"}>sign up</div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderComponent;

