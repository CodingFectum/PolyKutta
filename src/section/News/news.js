import React from "react";
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";

import Heading from '../../components/sectionHeading'

const News = () => {

  return (
    <div id="news">
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
                title="Latest News"
            />
          </Grid>

          <Grid
              xs={12}
              className="my-5 mb-md-0"
          > 
            <h4 className="text-center">TBA</h4>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default News;
