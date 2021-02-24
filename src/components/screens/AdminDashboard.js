import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import {IconButton,Grid,Avatar, Card} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import logo from '../../Images/logo.png'
import person from '../../Images/person.jpg'
import { ExpandMore } from '@material-ui/icons';
import adminDashbardStyle from '../Styles/adminDashboardStyle';
import dashboardRoutes from '../../routes';
import theme from '../../theme'
import {NavLink, withRouter,Switch,Route} from 'react-router-dom';
import AdminTeacherTab from './AdminTeacherTab';

const useStyles = makeStyles(adminDashbardStyle);

theme.overrides = {
    
  MuiListItem:{
    root:{
      color:"green"
    },
    selected:{
      borderRightStyle: "solid",
      borderColor: "yellow",
      backgroundColor:"lightgrey",
      borderWidth: 5,
    }
  }
}

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [title, setTitle] = React.useState("");

  const handleListItemClick = (event, index) => {
    setTitle(dashboardRoutes[index].name); 
  };

  const activeRoute = (routeName) => {
    return props.location.pathname === routeName ? true : false;
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} >
        <Grid item xs={12} align="center" className={classes.margin}>
            <img src={logo} alt="Logo" className={classes.large}/>
        </Grid>

        <Grid item xs={12} align="center" className={classes.margin}>
            <Typography variant="h5" className={classes.fontSize}>Sri Sathya Sai VidhyaNiketan</Typography>
        </Grid>
      </div>
      <Divider />

      <List >
        {dashboardRoutes.map((prop, index) => (
          <NavLink to={prop.path} style={{ textDecoration: 'none' }} key={index}>
            <ListItem button key={index} className={classes.drawerSelectedBGColor} selected={activeRoute(prop.path)}
                           onClick={(event)=>handleListItemClick(event,index)} >
                <Typography variant="h6" >{prop.name}</Typography>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </div>
  );      

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} elevation={0}>
        <Toolbar variant="dense">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          
          <Grid item xs={12} container justify="space-between" alignItems="center">
              <Grid item><Typography variant="h6" noWrap className={classes.dashboardTitle}>{title}</Typography></Grid>
              <Grid item>
                  <Card className={classes.margin} variant="outlined">
                    <Grid direction="row" item container alignItems="center">
                          <Avatar src={person} alt="user"  className={classes.marginRight}/>
                          <Divider orientation="vertical" flexItem />
                          <ExpandMore/>
                    </Grid>
                  </Card>
              </Grid>
          </Grid>

         
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />

        <Switch>
            <Route exact path="/teacher/viewteachardetails">
                <AdminTeacherTab val={true}/>
            </Route>
            {dashboardRoutes.map((route) => (
              <Route exact path={route.path} key={route.path}>
                <route.components />
              </Route>
            ))}
        </Switch>
            
      </main>
    </div>
  );
}

export default withRouter(ResponsiveDrawer);
