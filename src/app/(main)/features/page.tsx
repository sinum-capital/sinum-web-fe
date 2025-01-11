import FeatureBlock from "@/components/pages/Features/FeatureBlock/FeatureBlock";
import {Icons} from "@/assets";
import InnovationBlock from "@/components/pages/Features/InnovationBlock/InnovationBlock";

const Features = () => {
    return (
        <section>

            <div className="wrapper">
                {/* <h1 style={{ fontSize: "60px", textAlign: "center" }}>max gay</h1> */}
                <FeatureBlock
                    descriptionTitle="Analytics"
                    descriptionText="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae d"
                    imageSrc={Icons.abrakadabra}
                    totalfilledStars={4}
                    userFirstName="John"
                    userLastName="Doe"
                    userJob="Product Manager"
                    reviewText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur  "
                />
                <FeatureBlock
                    imageFirst
                    descriptionTitle="Analytics"
                    descriptionText="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae d"
                    imageSrc={Icons.abrakadabra}
                    totalfilledStars={4}
                    userFirstName="John"
                    userLastName="Doe"
                    userJob="Product Manager"
                    reviewText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur  "
                />
                <FeatureBlock
                    descriptionTitle="Analytics"
                    descriptionText="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae d"
                    imageSrc={Icons.abrakadabra}
                    totalfilledStars={4}
                    userFirstName="John"
                    userLastName="Doe"
                    userJob="Product Manager"
                    reviewText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur  "
                />
                <FeatureBlock
                    imageFirst
                    descriptionTitle="Analytics"
                    descriptionText="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae d"
                    imageSrc={Icons.abrakadabra}
                    totalfilledStars={4}
                    userFirstName="John"
                    userLastName="Doe"
                    userJob="Product Manager"
                    reviewText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur  "
                />
                <FeatureBlock
                    descriptionTitle="Analytics"
                    descriptionText="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae d"
                    imageSrc={Icons.abrakadabra}
                    totalfilledStars={4}
                    userFirstName="John"
                    userLastName="Doe"
                    userJob="Product Manager"
                    reviewText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur  "
                />
                <FeatureBlock
                    imageFirst
                    descriptionTitle="Analytics"
                    descriptionText="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae d"
                    imageSrc={Icons.abrakadabra}
                    totalfilledStars={4}
                    userFirstName="John"
                    userLastName="Doe"
                    userJob="Product Manager"
                    reviewText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur  "
                />

            </div>
            <InnovationBlock/>
        </section>
    );
};

export default Features;
