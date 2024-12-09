import React, {FC} from 'react';
import "./Subscription.scss"
interface IProps{
    type:string,
    info:string,
    price:string,
    includes:string[],
    button:string
}
const SubscriptionComponent:FC<IProps> = ({type,info, button, includes, price}) => {
    return (
        <div className={"subscription"}>
            <div className={"subsciption__type"}>{type}</div>
            <div className={"subsciption__info"}>{info}</div>
            <div className={"subsciption__price"}>{price}</div>
            <div className={"subsciption__includes"}>
                {
                    includes.map((item)=>(<div>{item}</div>))
                }
            </div>
            <button className={"subsciption__button"}>{button}</button>
        </div>
    );
};

export default SubscriptionComponent;