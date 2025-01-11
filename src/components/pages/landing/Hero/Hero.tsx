import styles from './styles.module.scss'
import Link from "next/link";

const Hero = () => {
    return <div id='hero' className={styles.hero}>
        <div className={styles.hero_wrapper}>
            <div className={styles.hero_inner}>
                <h1 className={styles.hero_title}>
                    Learn everything about <br/> <span>money</span>
                </h1>
                <div className={styles.hero_content}>
                    <div className={styles.hero_candle_wrapper_1}>
                        <div className={styles.hero_candle_1}>
                            <span className={styles.hero_candle_text}></span>
                        </div>
                    </div>
                    <div className={styles.hero_candle_wrapper_2}>
                        <div className={styles.hero_candle_2}>
                            <span className={styles.hero_candle_text}></span>
                        </div>
                    </div>
                    <div className={styles.hero_candle_wrapper_3}>
                        <div className={styles.hero_candle_3}>
                            <span className={styles.hero_candle_text}>S</span>
                        </div>
                        <div className={styles.hero_candle_3_line}></div>
                    </div>
                    <div className={styles.hero_candle_wrapper_4}>
                        <div className={styles.hero_candle_4}>
                            <span className={styles.hero_candle_text}>I</span>
                        </div>
                        <div className={styles.hero_candle_4_line}></div>
                    </div>
                    <div className={styles.hero_candle_wrapper_5}>
                        <div className={styles.hero_candle_5}>
                            <span className={styles.hero_candle_text}>N</span>
                        </div>
                        <div className={styles.hero_candle_5_line}></div>
                    </div>
                    <div className={styles.hero_candle_wrapper_6}>
                        <div className={styles.hero_candle_6}>
                            <span className={styles.hero_candle_text}>U</span>
                        </div>
                        <div className={styles.hero_candle_6_line}></div>
                    </div>
                    <div className={styles.hero_candle_wrapper_7}>
                        <div className={styles.hero_candle_7}>
                            <span className={styles.hero_candle_text}>M</span>
                        </div>
                        <div className={styles.hero_candle_7_line}></div>
                    </div>
                    <div className={styles.hero_candle_wrapper_8}>
                        <div className={styles.hero_candle_8}>
                            <span className={styles.hero_candle_text}> </span>
                        </div>
                    </div>
                    <div className={styles.hero_candle_wrapper_9}>
                        <div className={styles.hero_candle_9}>
                            <span className={styles.hero_candle_text}> </span>
                        </div>
                    </div>
                </div>
                <Link className={styles.hero_link} href={'/'}>Start now</Link>
            </div>
        </div>
    </div>
}

export default Hero