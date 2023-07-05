import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import dashboardBtn from '../../images/menuBtn.png'


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  logo: {
      maxWidth: 200
  },
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: '#f7ecc9',
    padding: '10px 0px', 
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  dashboardBtn: {
    maxWidth: 150,
    marginTop: 15
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#f7ecc9'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'space-between',
    padding: '10px 0px'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
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
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar
          style={{display:'flex', justifyContent: 'space-between'}}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <img src={logo} alt="lgo" className={classes.logo + " img-fluid"} />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer + ' qmf---Drawer_bk'}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <Typography variant="h6" noWrap className="pl-2">
          <Link to="/" >
            <img src={logo} alt="logo" className={classes.logo + " img-fluid"} />
          </Link>
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        {/* <List>
            <ListItem button >
              <ListItemIcon></ListItemIcon>
              <ListItemText primary={Introduction} />
            </ListItem>
        </List> */}
        <Divider />
        <List>
            <a href="/#about" className={classes.links + " my-2 d-block"}>ABOUT</a>
          <Divider />
            <a href="/#features" className={classes.links + " my-2 d-block"}>FEATURES</a>
          <Divider />
            <a href="/#roadmap" className={classes.links + " my-2 d-block"}>ROADMAP</a>
          <Divider />
            <a href="/whitepaper" className={classes.links + " my-2 d-block"}>WHITEPAPER</a>
          <Divider />
            <a href="/#news" className={classes.links + " my-2 d-block"}>LATEST</a>
          <Divider />
            <a href="/#faqs" className={classes.links + " my-2 d-block"}>FAQ</a>
          <Divider />
          {/* <Link to="/locker" className={classes.links + " my-2 d-block"}>
            Liquidity Locker
          </Link> */}
          <Divider />
          <Link to="/" className={classes.links}>
            <img src={dashboardBtn} alt="lgo" className={classes.dashboardBtn + " img-fluid"} />
          </Link>
        </List>
      </Drawer>
    </div>
  );
}


export default Menu;
