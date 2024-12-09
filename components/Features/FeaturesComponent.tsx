import React from 'react';
import "./Features.scss";
import ExampleComponent from "../Features/Example/ExampleComponent"
const FeaturesComponent = () => {
    return (
        <div className={"polygon"}>
            <div className={"feature"}>
                <div className={"feature__title"}>Streamlined Efficiency, Effortless Navigation</div>
                <div className={"feature__info"}>Manage your finances with confidence in one hub. Our flexible  toolkit simplifies every task, making financial management effortless.</div>
                <div className={"feature__example"}>
                    <div className={"feature__example-item"}>
                        <ExampleComponent
                            img={""}
                            title={"Insights in your pocket"}
                            info={"All your data and finances in one place to provide quick answers and make decisions instantly."}
                        />
                    </div>
                    <div className={"feature__example-item"}>
                        <ExampleComponent
                            img={""}
                            title={"Manage in real time"}
                            info={"Stay updated with  live market data, a comprehesive portfolio overview, and organized asset categorization."}
                        />
                    </div>
                    <div className={"feature__example-item"}>
                        <ExampleComponent
                            img={""}
                            title={"Financial Planning Tools"}
                            info={"Utilize goal setting, budgeting tools, and forecasting features to create a clear financial roadmap and achive your goals."}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesComponent;
