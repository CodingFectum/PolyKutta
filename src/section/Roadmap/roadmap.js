import React from "react";
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";

import Heading from '../../components/sectionHeading'
import roadmap from "../../images/roadmap.png";


const Roadmap = () => {
  return (
    <div id="roadmap">
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          className="py-5 mt-5 mt-md-0"
        >
          <Grid
              xs={12}
          >
            <Heading 
                title="RoadMap"
            />
          </Grid>

          <Grid
              xs={12}
              className="mb-2 mb-md-0"
          > 
            <img src={roadmap} className="img-fluid" style={{}} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Roadmap;
