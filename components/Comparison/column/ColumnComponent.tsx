import React, {FC} from 'react';
import styles from "./Column.module.scss"

interface IProps{
    features:string,
    price:string,
    info:string[]
}
const ColumnComponent:FC<IProps> = ({features, price, info}) => {
    return (
        <div className={styles.Column}>
            <div className={styles.Column__features}>{features}</div>
            <div className={styles.Column__info}>{price}</div>
            {
                info.map((item)=>(<div className={styles.Column__info}>{item}</div>))
            }
        </div>
    );
};

export default ColumnComponent;