import React, {FC} from 'react';
import styles from "./Card.module.scss"

interface IProps{
    type:string,
    info:string,
    price:number,
    image:string,
    options:string[],
    button:string
}
const CardComponent:FC<IProps> = ({type, info, price, image, options, button}) => {
    return (
        <>
            <div className={styles.type}>{type}</div>
            <div className={styles.info}>{info}</div>
            <div className={styles.price}>${price}/month</div>
            <div className={styles.options}>
                {
                    options.map((option)=>(<div>{image}{option}</div>))
                }
            </div>
            <button className={styles.button}>{button}</button>
        </>
    );
};

export default CardComponent;