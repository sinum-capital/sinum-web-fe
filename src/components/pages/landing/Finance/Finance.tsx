import Image from "next/image";
import styles from "./styles.module.scss";
import {Icons} from "@/assets";
import InfoBox from "./InfoBox/InfoBox";

const Finance = () => {
    return (
        <section className={styles.finance}>
            <div className={styles.finance__container}>
                <h2 className={styles.finance_title}>
                    Start understanding how
                    <br/>
                    <span> money</span> works
                </h2>
                <div className={styles.finance_content}>
                    <div className={styles.finance_content_cards}>
                        <InfoBox
                            title="Lorem"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        />
                        <InfoBox
                            title="Lorem"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        />
                        <InfoBox
                            title="Lorem"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        />
                        <span className={styles.finance_copyright}>
              © SINUM CAPITAL 2024 ALL RIGHTS RESERVED
            </span>
                        <button className={styles.finance_btn}>
                            Start your free trial
                        </button>
                    </div>
                    <div>
                        <Image
                            className={styles.finance_img}
                            src={Icons.financeImage}
                            alt="sinum money"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Finance;
