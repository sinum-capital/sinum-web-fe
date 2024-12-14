import React from 'react';
import styles from "./Comparison.module.scss"
import ColumnComponent from "@/components/Comparison/column/ColumnComponent"
const ComparisonComponent = () => {
    return (
        <div className={styles.ComparisonWrapper}>
            <div className={styles.Comparison}>
                <button className={styles.Comparison__button}>Compare plans</button>
                <div className={styles.Comparison__title}>Compare our plans and find the right one for you</div>
                <div className={styles.Comparison__info}>StreamVibe offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right for you.</div>
                <div className={styles.Comparison__table}>
                    <ColumnComponent
                        features={"Features"}
                        price={"Price"}
                        info={["Sed ut perspiciatis","Sed ut perspiciatis","Sed ut perspiciatis","Sed ut perspiciatis","Sed ut perspiciatis"]}/>
                    <ColumnComponent
                        features={"FREE"}
                        price={"$0/Month"}
                        info={["Sed ut perspiciatis","Sed ut perspiciatis","Sed ut perspiciatis","Sed ut perspiciatis","Sed ut perspiciatis"]}/>
                    <ColumnComponent
                        features={"BASIC"}
                        price={"$10/Month"}
                        info={["Sed ut perspiciatis","Sed ut perspiciatis","Sed ut perspiciatis","Sed ut perspiciatis","Sed ut perspiciatis"]}/>
                    <ColumnComponent
                        features={"PRO"}
                        price={"$30/Month"}
                        info={["Sed ut perspiciatis","Sed ut perspiciatis","Sed ut perspiciatis","Sed ut perspiciatis","Sed ut perspiciatis"]}/>
                </div>
            </div>
        </div>
    );
};

export default ComparisonComponent;