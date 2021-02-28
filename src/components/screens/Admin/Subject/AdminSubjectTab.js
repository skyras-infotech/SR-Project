import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import theme from '../../../../theme'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AdminSubject from './AdminSubject';
import AdminSubjectList from './AdminSubjectList';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import ReorderIcon from '@material-ui/icons/Reorder';
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';

export default function AdminSubjectTab() {

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
        <Tab icon={<ReorderIcon/>} label="Subject List" />
        <Tab icon={<AddCircleRoundedIcon/>} label="Add Subject"/>
      </Tabs>

      
        <TabPanel value={value} index={0} dir={theme.direction}>
            <AdminSubjectList/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
            <AdminSubject/>
        </TabPanel>
    </Paper>
  );
}