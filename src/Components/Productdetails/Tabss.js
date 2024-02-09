import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './Tabss.css'
import Tabstype1 from './Tabstype1';
import Specification from './Specification'
import Command from './ThirdTab/Command';
import Reviews from './FourthTab/Reviews';
import { Container } from '@mui/material';
import Fifthpage from '../Fifthpage'
import Footer from '../Footer'

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
        <Container sx={{marginTop:"40px"}} >
        <Box sx={{ width: '100%'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{backgroundColor:"#f9f9ff" }} >
          <Tab label="Description" {...a11yProps(0)} />
          <Tab label="Specification" {...a11yProps(1)} />
          <Tab label="Comments" {...a11yProps(2)} />
          <Tab label="Reviews" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0} >
       <Tabstype1/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Specification/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Command/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
      <Reviews/>
      </CustomTabPanel>
    </Box>
    </Container >
    <Fifthpage/>
            <Footer/>
    </div>

  );
}
