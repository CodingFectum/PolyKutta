import React from "react";
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import HeaderImage from '../../images/mainimage.png'

const Header = () => {
  return (
    <div className="QMF---Header ">
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="py-5"
        >
          <Grid
              xs={12}
              sm={7}
          >
              <h1>
                <span>PolyKutta</span>&nbsp;
                <br className="d-none d-md-block" />is a hyper-deflationary <span>Crypto Token</span>	&nbsp;
                <br className="d-none d-md-block" />that aims to help stray <span>Dogs</span> find a&nbsp;
                <br className="d-none d-md-block" /><span>loving home.</span>
              </h1>
              <div className="d-sm-flex">
                {/* <Link to="/dashboard">
                      <img src={dashboardBtn} className="QMF---header_btn" />
                </Link> */}
                  {/* <a href="https://kuswap.finance/#/swap?outputCurrency=0x141B987F067DB2745402a07De8d1e471FC48C4aA" target="_blank">
                      <img src={kuSwap} className="QMF---header_btn" />
                  </a> */}
              </div>
          </Grid>
          <Grid
              xs={12}
              sm={5}
              className="text-center mt-5 mt-sm-0"
          >
              <img src={HeaderImage} alt="Header Image" className="mt-sm-5 mt-md-0  img-fluid w-100" style={{maxWidth: 550}} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Header;
