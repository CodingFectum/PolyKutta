import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'

import logo from '../../images/logo.png'
import dashboardBtn from '../../images/menuBtn.png'

const useStyles = makeStyles((theme) => ({
  logo: {
      maxWidth: 200
  },
  dashboardBtn: {
    maxWidth: 150
  },
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'unset',
  },
  links: {
    color: '#fff',
    padding: '0px 12px',
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
    <div className={classes.root}>
      <div>
        <Typography variant="h6" noWrap className="pl-2 text-light">
          <Link to="/" className={classes.links}>
            <img src={logo} alt="logo" className={classes.logo} />
          </Link>
        </Typography>
      </div>
      <div> 
      
        <a href="/#about" className={classes.links}>ABOUT</a>
        <a href="/#features" className={classes.links}>FEATURES</a>
        <a href="/#roadmap" className={classes.links}>ROADMAP</a>
        <a href="/whitepaper" className={classes.links}>WHITEPAPER</a>
        <a href="/#news" className={classes.links}>LATEST NEWS</a>
        <a href="/#faqs" className={classes.links}>FAQ'S</a>

        <Link to="/dashboard" className={classes.links}>
          <img src={dashboardBtn} alt="lgo" className={classes.dashboardBtn} />
        </Link>
      </div>
    </div>
  );
}


export default Menu;
