import React from "react";
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";

import error from './404error.png'

const PageNotFound = () => {
  return (
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
            className="text-center"
        >
        <img src={error} style={{width: '100%', maxWidth: 500, height: 'auto'}} />
        </Grid>
    </Grid>
    </Container>
  );
}

export default PageNotFound;
