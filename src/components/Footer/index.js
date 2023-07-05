import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'

import logo from '../../images/logo.png'
import medium from '../../images/medium.png'
import telegram from '../../images/telegram.png'
import twitter from '../../images/twitter.png'

const useStyles = makeStyles((theme) => ({
  logo: {
      maxWidth: 200
  },
  dashboardBtn: {
    maxWidth: 50
  },
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '3px solid #222222',
    paddingTop: 20
  },
  links: {
    color: '#fff',
    padding: '0px 8px',
    fontWeight: 700,
    textTransform: 'uppercase',
    '&:hover': {
      color: "#f4f4f4",
      TextDecoder: 'none'
   },
  }
}));

const Menu = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.root + " mt-5 pb-3"}>
      <div>
        <Typography variant="h6" noWrap className="pl-2 text-light">
          <Link to="/" className={classes.links}>
            <img src={logo} alt="logo" className={classes.logo + " img-fluid"} />
          </Link>
        </Typography>
      </div>
      <div>
        <a href="https://www.polykutta.finance/#about" className={classes.links + " d-none d-md-inline-block"}>ABOUT</a>
        <a href="https://www.polykutta.finance/#features" className={classes.links + " d-none d-md-inline-block"}>FEATURES</a>
        <a href="https://www.polykutta.finance/#roadmap" className={classes.links + " d-none d-md-inline-block"}>ROADMAP</a>
        <a href="https://www.polykutta.finance/whitepaper" className={classes.links + " d-none d-md-inline-block"}>WHITEPAPER</a>
        <a href="https://www.polykutta.finance/#news" className={classes.links + " d-none d-md-inline-block"}>LATEST NEWS</a>
        <a href="https://www.polykutta.finance/#faqs" className={classes.links + " d-none d-md-inline-block"}>FAQ'S</a>
        <br className="d-md-none" />
        <a href="https://polykutta.medium.com" target="_blank" className={classes.links}>
          <img src={medium} alt="lgo" className={classes.dashboardBtn + " img-fluid"} />
        </a> 
        <a href="https://t.me/POLYKUTTA" target="_blank" className={classes.links}>
          <img src={telegram} alt="lgo" className={classes.dashboardBtn + " img-fluid"} />
        </a>
        <a href="https://twitter.com/KuttaPoly" target="_blank" className={classes.links}>
          <img src={twitter} alt="lgo" className={classes.dashboardBtn + " img-fluid"} />
        </a>
      </div>
    </div>
  );
}


export default Menu;
