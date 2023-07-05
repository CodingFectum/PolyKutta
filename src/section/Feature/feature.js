import React from "react";
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";

import Heading from '../../components/sectionHeading'
import FeaturesCard from '../../components/FeaturesCard/featuresCard'

import featuresMain from '../../images/featuresMain.png'
import fish from '../../images/fish.png'
import burn from '../../images/burn.png'
import liquidity from '../../images/liquidity.png'
import community from '../../images/community.png'

const Feature = () => {
  return (
    <div id="features">
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="py-md-5 position-relative"
        >
          <Grid
              xs={12}
              className="mb-5 pb-4 mb-md-0"
          >
            <Heading 
                title="Feature"
            />
          </Grid>
          <img src={featuresMain} className="PKF---features_img" />
          <FeaturesCard
            img = {burn}
            title = "Token Burn"
            details1 = "Every transaction incurs a  2% burn. This helps keep $PKF hyper-deflationary thus creating more value for users and incentivizing them to buy and hold."
          />
          <FeaturesCard
            img = {liquidity}
            title = "Automatic Liquidity Pool"
            details1 = "2% of all transactions are used to add to the liquidity pool. This allows to ease up traffic congestion during high-network traffic."
          />
          <FeaturesCard
            img = {fish}
            title = "Anti-WHALE Lock"
            details1 = "$PKF does not allow transactions exceeding 0.5% of the total supply to go through. this helps prevent sudden dumps and price manipulation caused by whales."
          />
          <FeaturesCard
            img = {community}
            title = "Built for the PUPS!"
            details1 = "$PKF is designed to be sustainable and provide a shelter for dogs and an investment opportunity for crypto-enthusiasts. If you love dogs adn crypto then you'll love $PKF."
          />
        </Grid>
      </Container>
    </div>
  );
}

export default Feature;
