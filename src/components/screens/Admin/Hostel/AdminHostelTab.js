import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import theme from '../../../../theme'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AdminHostel from './AdminHostel';
import AdminHostelList from './AdminHostelList';
import AdminRoom from './AdminRoom';
import AdminRoomList from './AdminRoomList';
import AdminBed from './AdminBed';
import AdminBedList from './AdminBedList';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import ReorderIcon from '@material-ui/icons/Reorder';

export default function AdminHostelTab() {

  //const history = useHistory();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={2}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <Paper elevation={2}>

      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab icon={<ReorderIcon/>} label="Hostel List" />
        <Tab icon={<AddCircleRoundedIcon/>} label="Add Hostel"/>
        <Tab icon={<ReorderIcon/>} label="Room List" />
        <Tab icon={<AddCircleRoundedIcon/>} label="Add Room"/>
        <Tab icon={<ReorderIcon/>} label="Bed List" />
        <Tab icon={<AddCircleRoundedIcon/>} label="Add Bed"/>
      </Tabs>

        <TabPanel value={value} index={0} dir={theme.direction}>
            <AdminHostelList/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
            <AdminHostel/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
            <AdminRoomList/>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
            <AdminRoom/>
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
            <AdminBedList/>
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
            <AdminBed/>
        </TabPanel>
    </Paper>
  );
}