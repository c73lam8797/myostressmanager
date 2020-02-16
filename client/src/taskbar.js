import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import HomePage from './homepage';
import About from './about';
import GraphEffect from './grapheffect';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={4}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);

    // if (newValue ==1){
    //   GraphEffect.state.clicked=true;
    // }
    // else {
    //   GraphEffect.state.clicked=false;
    // }
  };
    

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="Display Graph" {...a11yProps(1)} />
          <Tab label="About" {...a11yProps(2)} />
          <Tab label="Test" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <HomePage />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h3>Myo Sensor Graph</h3>
        <h4>Date: <span id="date"></span></h4>
        <GraphEffect />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <About />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <iframe src="https://open.spotify.com/embed/album/5Eevxp2BCbWq25ZdiXRwYd?si=D_xaXLNkQTqGjEqydKQ-Ig" 
        allowTransparency="true" allow="encrypted-media" width={300} height={380} frameBorder={0} style={{padding: '10px'}} />
        <iframe src="https://open.spotify.com/embed/album/5Eevxp2BCbWq25ZdiXRwYd?si=D_xaXLNkQTqGjEqydKQ-Ig" 
        allowTransparency="true" allow="encrypted-media" width={300} height={380} frameBorder={0} style={{padding: '10px'}} />
      </TabPanel>
    </div>
  );
}