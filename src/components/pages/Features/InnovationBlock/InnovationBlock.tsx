import InfoTable from "@/components/UI/InfoTable/InfoTable";
import styles from "./styles.module.scss";
import {Icons} from "@/assets";

const InnovationBlock = () => {
    return (
        <div className={styles.innovation}>
            <div className={styles.innovation__wrapper}>
                <h1 className={styles.innovation__title}>Outpace the outdated</h1>
                <p className={styles.innovation__text}>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat
                </p>
                <div className={styles.innovation__tables}>
                    <div className={styles.innovation__tables_first}>
                        <InfoTable
                            iconSrc={Icons.dollar.src}
                            title="Lorem ipsum dolor sit"
                            text="Lorem ipsum dolor sit amet, sed consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim "
                        />
                        <InfoTable
                            iconSrc={Icons.clock.src}
                            title="Lorem ipsum dolor sit"
                            text="Lorem ipsum dolor sit amet, sed consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim "
                        />
                        <InfoTable
                            iconSrc={Icons.aperture.src}
                            title="Lorem ipsum dolor sit"
                            text="Lorem ipsum dolor sit amet, sed consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim "
                        />
                    </div>
                    <div className={styles.innovation__tables_second}>
                        <InfoTable
                            iconSrc={Icons.coffee.src}
                            title="Lorem ipsum dolor sit"
                            text="Lorem ipsum dolor sit amet, sed consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ut labore et dolore magna aliqua. Ut enim ad minim ut labore et dolore magna aliqua. Ut enim ad minim ut labore et dolore magna aliqua. Ut "
                        />
                        <InfoTable
                            iconSrc={Icons.activity.src}
                            title="Lorem ipsum dolor sit"
                            text="Lorem ipsum dolor sit amet, sed consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ut labore et dolore magna aliqua. Ut enim ad minim ut labore et dolore magna aliqua. Ut enim ad minim ut labore et dolore magna aliqua. Ut "
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InnovationBlock;
