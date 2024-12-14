import React from 'react';
import styles from "./OverView.module.scss"
const OverviewComponent = () => {
    return (
        <div className={styles.OverviewWrapper}>
            <div className={styles.Overview}>
                <div className={styles.Overview__title}>Start understanding how money works</div>


                <div className={styles.Overview__examples}>
                    <div className={styles.Overview__examples_info}>

                        <div className={styles.Overview__examples_info_item}>
                            <div className={styles.item__title}>Lorem ipsum dolor sit amet, </div>
                            <div className={styles.item__info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                        </div>

                        <div className={styles.Overview__examples_info_item}>
                            <div className={styles.item__title}>Lorem ipsum dolor sit amet, </div>
                            <div className={styles.item__info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                        </div>

                        <div className={styles.Overview__examples_info_item}>
                            <div className={styles.item__title}>Lorem ipsum dolor sit amet, </div>
                            <div className={styles.item__info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                        </div>

                        <div className={styles.Overview__examples_info_button}>Start your free trial</div>
                    </div>
                    <div className={styles.Overview__examples_image}>
                        <img src={"https://s3-alpha-sig.figma.com/img/d2db/bfb5/584209ec9b4592f74f620ad329db2ed3?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UE1KH1FosUSPvz41vfRIE3XtjGimlAH1JGyuAdguHjErKv7YrXepx06iF1V25z-4y~cU-xb9Q2chtqjSbOF2KUvp-boHtBarcuLYuPggdlgo1lACOSj5XZoPvUzQAUF1V13Uq1elD9QE6pO4cv4-RzpDzqhRJRbblsUx5VU8IoYW3x2NZhYK7tCBqzb8aQgY6YdtRGf8CIZBc--2SbFkAJresKL-yG-7DaTV~oK0TsmkSTdsle1~VPBqaaXJ0PQMmPoMg62Qor1m~S2HZ9oFCcSQXM0aLb9FVRjxRSBXiJmGwB-e4BgDUUVMkvrOjB0vm5ZygpIiytxIBvQnGth9Zg__"} width={"634px"} height={"550px"} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverviewComponent;