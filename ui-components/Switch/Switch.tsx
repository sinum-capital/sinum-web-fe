"use client";

import React, {FC, useState} from 'react';
import "./Switch.scss"
const ToogleSwitch:FC = () => {
    const [isOn, setIsOn] = useState<boolean>(false)

    const handleToggle = ()=>{
        setIsOn(!isOn)
    }

    return (
        <div className="switchdiv" onClick={handleToggle}>
            <label className="switch">
                <input type="checkbox"/>
                <span className="slider"/>
            </label>
        </div>
    );
};

export default ToogleSwitch;