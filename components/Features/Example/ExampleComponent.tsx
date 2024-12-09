import React, {FC} from 'react';

interface IProps{
    img:string,
    title:string,
    info:string
}

const ExampleComponent:FC<IProps> = ({img, info, title}) => {
    return (
        <div className={"example"}>
            <img className={"example__img"} src={img}/>
            <div className={"example__title"}>{title}</div>
            <div className={"example__info"}>{info}</div>
        </div>
    );
};

export default ExampleComponent;