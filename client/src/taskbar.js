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
import Music from './music';


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
  };
    

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs variant='fullWidth' value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="Stress Graph" {...a11yProps(1)} />
          <Tab label="Music" {...a11yProps(2)} />
          <Tab label="About This Project" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel id='color' value={value} index={0}>
        <HomePage />  
      </TabPanel>
      <TabPanel id='color' value={value} index={1}>
        <h3 style={{fontFamily: 'Montserrat', color: 'white'}}>MyoWare Sensor Graph</h3>
        {/* <h4 style={{fontFamily: 'Montserrat', color: 'white'}}>Date: <span id="date"></span></h4> */}
        <GraphEffect />
      </TabPanel>
      <TabPanel id='music' value={value} index={2}>
        <Music />
      </TabPanel>
      <TabPanel id='color' value={value} index={3}>
        <About />
      </TabPanel>
    </div>
  );
}