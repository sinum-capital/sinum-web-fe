import React from 'react';
import "./Subscriptions.scss"
import SubscriptionComponent from "./Subscription/SubscriptionComponent"

const SubscriptionsComponent = () => {
    return (
        <div className={"subscriptions"}>
            <div className={"subscriptoins__field"}>
                <SubscriptionComponent
                    type={"FREE"}
                    info={"FREE version offers some basic features for core functionality experience"}
                    price={"$0"}
                    includes={["Ad-Supported","Basic Analytics","Basic Tutorials","Comunity Support"]}
                    button={"Start with FREE"}
                />
                <SubscriptionComponent
                    type={"BASIC"}
                    info={"Basic version provides some additional features that enhance the experience"}
                    price={"$10"}
                    includes={["Add-Free Experience","Enhanced Core Features","Customizable Settings","Increased Storage Limits"]}
                    button={"Start with  BASIC"}
                />
                <SubscriptionComponent
                    type={"PRO"}
                    info={"Version that gives you all the features for maximum efficiency"}
                    price={"$30"}
                    includes={["All Basic Features","Advanced Analytics","Priority Support","Unlimited Integrations"]}
                    button={"Start with PRO"}
                />
            </div>
        </div>
    );
};

export default SubscriptionsComponent;