import SmoothScrollButton from "../SmoothScrollButton/SmoothScrollButton";
import PricingCard from "./PricingCard/PricingCard";
import styles from "./styles.module.scss";

const Pricing = () => {
  return (
    <div id="pricing" className={styles.pricing}>
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
            No matter where you are on your journey, we have a plan that’s just
            right for you. From entry-level features to advanced capabilities,
            our pricing options are crafted to provide flexibility and support
            as your needs evolve.
          </p>
        </div>
        <div className={styles.pricing_cards}>
          <PricingCard
            title="FREE"
            text="FREE version offers some basic features for core functionality experience"
            price="$0 /month"
            features={[
              "All Basic Features",
              "Advanced Analytics",
              "Priority Support",
              "Unlimited Integrations",
            ]}
            buttonText="Start with FREE"
          />
          <PricingCard
            isFeatured
            title="FREE"
            text="FREE version offers some basic features for core functionality experience"
            price="$0 /month"
            features={[
              "All Basic Features",
              "Advanced Analytics",
              "Priority Support",
              "Unlimited Integrations",
            ]}
            buttonText="Start with FREE"
          />
          <PricingCard
            title="FREE"
            text="FREE version offers some basic features for core functionality experience"
            price="$0 /month"
            features={[
              "All Basic Features",
              "Advanced Analytics",
              "Priority Support",
              "Unlimited Integrations",
            ]}
            buttonText="Start with FREE"
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
