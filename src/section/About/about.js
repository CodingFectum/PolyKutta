import React from "react";
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";

import Heading from '../../components/sectionHeading'

import aboutimg from '../../images/Aboutgraphics.png'
import telegram from '../../images/telegram.png'
import twitter from '../../images/twitter.png'
import medium from '../../images/medium.png'

const About = () => {
  return (
    <div id='about'>
      <Container maxWidth="lg">
          <Grid
              xs={12}
          >
            <Heading 
                title="About"
            />
          </Grid>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          className="QMF---About py-5"
        >
          <Grid
              xs={12}
              sm={6}
              className="text-left pt-3"
          >
              <img src={aboutimg} alt="About Image" className="img-fluid QMF---main-pic w-100" />
          </Grid>
          <Grid
              xs={12}
              sm={6}
              className="text-left py-sm-5 px-4"
          >
              <h3>
                What the Dog doin'?
              </h3>
              <p className="pt-md-4 my-4" style={{maxWidth: 450}}>
                PolyKutta is aimed to be a sustainable charity token for stray dogs. Our team tokens help secure our marketing budget while helping out dog shelters on a global level. If you want to make the world a better place for dogs then this is an opportunity you wouldn't want to miss. 
              </p>
              <a href="https://polykutta.medium.com" target="_blank">
                <img src={medium} className="img-fluid" style={{maxWidth: 70}} />
              </a>
              <a href="https://t.me/POLYKUTTA" target="_blank">
                <img src={telegram} className="img-fluid" style={{maxWidth: 70}} />
              </a>
              <a href="https://twitter.com/KuttaPoly" target="_blank">
                <img src={twitter} className="img-fluid" style={{maxWidth: 70}} />
              </a>
          </Grid>
          {/* <Grid
              xs={12}
          >
            <Heading 
                title="About"
                subtitle="WHAI AND why"
            />
          </Grid> */}
        </Grid>
      </Container>
    </div>
  );
}

export default About;
