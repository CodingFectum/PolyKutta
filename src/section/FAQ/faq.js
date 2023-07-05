import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";

import Heading from '../../components/sectionHeading'
import faqimg from '../../images/faq.png'

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(22),
      flexBasis: '100%',
      flexShrink: 0,
      color: '#fff'
    },
    mainAcc: {
      background: 'unset',
      boxShadow: 'unset',
      borderBottom: '3px solid #222222',
      borderRadius: 'unset'
    },
  }));

const Roadmap = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState('panel4');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div id="faqs">
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          className="py-5"
        >
          <Grid
              xs={12}
              className="mb-5 pb-5"
          >
            <Heading 
                title="FAQ's"
                subtitle="Frequently Asked Questions"
            />
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            className="py-5 position-relative PKF---FAQ_img"
          >
            <img src={faqimg} />
            <Grid
                xs={12}
                md={10}
                className="mx-auto"
            > 
              <div className={classes.root + " px-3"}>
                <Accordion 
                    expanded={expanded === 'panel4'}
                    onChange={handleChange('panel4')}
                    className={classes.mainAcc}
                >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                    className={classes.mainheading}
                    >
                    <Typography className={classes.heading}>HOW TO BUY $PKF?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="pt-4 pb-5" style={{borderRadius: 10}}>
                    <Typography>

                      Step 1 : Go to exchange<br></br>
                      <a href="https://quickswap.exchange/#/swap">https://quickswap.exchange/#/swap</a><br></br>

                      Step 2 : Connect your wallet (Metamask)<br></br>
                      Make sure your wallet address on the Polygon Matic Network<br></br>

                      Step 3 : Set 10% slippage<br></br>
                      Setting your slippage less than 8% will not let the transaction through. This may increase or decrease depending on the token's volatility.<br></br>

                      Step 4 : Use whole numbers<br></br>
                      Values in decimals are automatically ignored by the exchange<br></br>
                      



                    </Typography>
                    </AccordionDetails>
                </Accordion>
                </div>
            </Grid>


            <Grid
                xs={12}
                md={10}
                className="mx-auto"
            > 
              <div className={classes.root + " px-3"}>
                <Accordion 
                    expanded={expanded === 'panel5'}
                    onChange={handleChange('panel5')}
                    className={classes.mainAcc}
                >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5bh-content"
                    id="panel5bh-header"
                    className={classes.mainheading}
                    >
                    <Typography className={classes.heading}>HOW TO ADD $PKF TO YOUR WALLET?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="pt-4 pb-5" style={{borderRadius: 10}}>
                      <Typography
                      >


                          Step 1 : Connect Wallet <br></br>
                          Connect your wallet to the Polygon Matic Network<br></br>
                          Step 2 : Use the following data<br></br>
                          Network : Polygon Matic Network<br></br>
                          Contract : TBA<br></br>
                          Token name : PolyKuttaFinance<br></br>
                          Symbol : PKF<br></br>
                          Decimals : 18<br></br> 


                          
                      </Typography>
                    </AccordionDetails>
                </Accordion>
                </div>
            </Grid>


            <Grid
                xs={12}
                md={10}
                className="mx-auto"
            > 
              <div className={classes.root + " px-3"}>
                {/* <Accordion 
                    expanded={expanded === 'panel6'}
                    onChange={handleChange('panel6')}
                    className={classes.mainAcc}
                >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel6bh-content"
                    id="panel6bh-header"
                    className={classes.mainheading}
                    >
                    <Typography className={classes.heading}>HOW TO CHECK REWARDS?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="pt-4 pb-5" style={{borderRadius: 10}}>
                      <Typography>
                        On the top-right section of our homepage you will find the "Launch Dashboard" button. This will lead you to a page that will link to your wallet and will showcase the rewards you have earned so far.
                      </Typography>
                    </AccordionDetails>
                </Accordion> */}
                </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Roadmap;
