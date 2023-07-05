import React from "react";
import { Grid } from "@material-ui/core";
import './cardStyle.css'

const FeatureCard = (props) => {
  return (
        <Grid
            xs={12}
            className="QMF---FeatureCardsMain px-sm-3"
        >
            
            <div className="d-flex QMF---FeatureCards px-4 px-md-5 py-5 mx-auto">
                <img src={props.img} className="img-fluid d-none d-sm-block mr-3" alt="Card Icon Missing" />
                <div className="mt-md-4 pt-1" style={{alignItems: 'flex-end'}}>
                <img src={props.img} className="img-fluid d-sm-none mb-3" alt="Card Icon Missing" />
                    <h2 className="text-light text-uppercase mb-3 m-0">{props.title}</h2>
                    <p className="text-light mb-0" style={{maxWidth: 900}}>{props.details1}</p>
                </div>
            </div>
        </Grid>
  );
}

export default FeatureCard;
