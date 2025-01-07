import PricingCard from "./PricingCard/PricingCard";
import styles from "./styles.module.scss";
import SmoothScrollButton from "@/components/UI/SmoothScrollButton/SmoothScrollButton";
const Pricing = () => {
  return (
    <section id="pricing" className={styles.pricing}>
      <div className={styles.pricing__container}>
        <div className={styles.pricing_wrapper}>
          <div className={styles.pricing__description}>
            <div>
              <SmoothScrollButton
                className={styles.pricing__description_btn}
                targetId="pricing"
              >
                Pricing
              </SmoothScrollButton>
            </div>
            <h2 className={styles.pricing__description_title}>
              Pricing and plans
            </h2>
            <p className={styles.pricing__description_text}>
              No matter where you are on your journey, we have a plan that’s
              just right for you. From entry-level features to advanced
              capabilities, our pricing options are crafted to provide
              flexibility and support as your needs evolve.
            </p>
          </div>
          <div className={styles.pricing_cards}>
            <PricingCard
              title="FREE"
              text="FREE version offers some basic features for core functionality experience"
              price="$0"
              features={[
                "Ad-Supported",
                "Basic Analytics",
                "Basic Tutorials",
                "Comunity Support",
              ]}
              buttonText="Start with FREE"
            />
            <PricingCard
              isFeatured
              title="BASIC"
              text="Basic version provides some additional features that enhance the experience"
              price="$10"
              features={[
                "Add-Free Experience",
                "Enhanced Core Features",
                "Customizable Settings",
                "Increased Storage Limits",
              ]}
              buttonText="Start with BASIC"
            />
            <PricingCard
              title="PRO"
              text="Version that gives you all the features for maximum efficiency"
              price="$30"
              features={[
                "All Basic Features",
                "Advanced Analytics",
                "Priority Support",
                "Unlimited Integrations",
              ]}
              buttonText="Start with PRO"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
