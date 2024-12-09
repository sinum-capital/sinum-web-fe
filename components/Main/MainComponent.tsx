import React from 'react';
import "./Main.scss"

const MainComponent = () => {
    return (
        <div className={"wrapper"}>
            <div className={"main"}>
                <div className={"main__info"}>Learn Everything About
                    <span className={"main__info-purple"}> Money</span>
                </div>
                <div className={"main__subinfo"}>Start to understand how the money works</div>
                <button className={"main__btn"}>
                    <div className={"main__btn-item"}>START NOW</div>
                </button>
            </div>
        </div>
    );
};

export default MainComponent;