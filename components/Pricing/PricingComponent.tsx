import React from 'react';
import styles from "./Pricing.module.scss";
import CardComponent from "@/components/Pricing/card/CardComponent"
const PricingComponent = () => {
    return (
        <div className={styles.PricingWrapper}>
            <div className={styles.Pricing}>
                <button className={styles.Pricing__button}>PRICING</button>
                <div className={styles.Pricing__title}>Pricing and plans</div>
                <div className={styles.Pricing__info}>
                    No matter where you are on your journey, we have a plan that’s just right for you.
                    From entry-level features to advanced capabilities,
                    our pricing options are crafted to provide flexibility and support as your needs evolve.
                </div>
                <div className={styles.cards}>
                    <div className={styles.cards__side}>
                        <CardComponent
                            type={"FREE"}
                            info={"FREE version offers some basic features for core functionality experience"}
                            price={0}
                            image={">"}
                            options={["Ad-Supported", "Basic Analytics", "Basic Tutorials", "Comunity Support"]}
                            button={"Start with FREE"}/>
                    </div>
                    <div className={styles.cards__middle}>
                        <CardComponent
                            type={"BASIC"}
                            info={"Basic version provides some additional features that enhance the experience"}
                            price={10}
                            image={">"}
                            options={["Add-Free Experience", "Enhanced Core Features", "Customizable Settings", "Increased Storage Limits"]}
                            button={"Start with BASIC"}/>
                    </div>
                    <div className={styles.cards__side}>
                        <CardComponent
                            type={"PRO"}
                            info={"Version that gives you all the features for maximum efficiency"}
                            price={30}
                            image={">"}
                            options={["All Basic Features", "Advanced Analytics", "Priority Support", "Unlimited Integrations"]}
                            button={"Start with PRO"}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingComponent;