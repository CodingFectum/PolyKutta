import React from "react";
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Menu from '../../section/Menu/menu'
import Footer from '../../components/Footer'
import Heading from '../../components/sectionHeading'
import FeaturesCard from '../../components/FeaturesCard/featuresCard'

import featuresMain from '../../images/featuresMain.png'
import WHITEPAPER from '../../images/WHITEPAPER.png'
import Tokenomics from '../../images/Tokenomics.png'
import liquidity from '../../images/liquidity.png'
import community from '../../images/community.png'

const Whitepaper = () => {
  return (
    <div>
      <Menu />
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
              className=" text-center mt-4 mb-5 pb-4 mb-md-0"
          >
            <img src={WHITEPAPER} className="img-fluid w-100 mt-5 pt-5 mt-md-0 pt-md-0" style={{maxWidth:400}} />
          </Grid>
          <Grid
              xs={12}
              className=" text-center mb-5 pb-4 mb-md-0"
          >
            <h3 style={{textDecoration: 'underline'}}>Tokenomics</h3>
          </Grid>
          <Grid
              xs={12}
              className=" text-center mb-5 pb-4 mb-md-0"
          >
            <p className="mb-0" style={{fontWeight: 900}}>1,000,000 Total Supply</p>
            <p className="mb-0">50% Presale</p>
            <p>50% Liquidity</p>
            <img src={Tokenomics} className="img-fluid mt-5 w-100" style={{maxWidth:600}} />
          </Grid>
          <Grid
              xs={12}
              className=" text-center my-5"
          >
            <p className="mb-0 mx-auto" style={{borderBottom: '3px solid #222222', maxWidth: 600}} />
          </Grid>
          <Grid
              xs={12}
              className=" text-center mb-5 pb-4 mb-md-0"
          >
            <h3 style={{textDecoration: 'underline'}}>Transactionomics</h3>
            <p className="mt-5 mb-0">2% Liquidity generation</p>
            <p className="mb-0">3% Burning</p>
            <p className="mb-0">1.5% Charity tokens</p>
            <p>1.5% Marketing tokens</p>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

export default Whitepaper;
